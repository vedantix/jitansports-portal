import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

const { appId, token, functionsVersion, appBaseUrl } = appParams;

const LIST_METHODS = new Set(['list', 'filter']);
const entityCache = new WeakMap();

function normalizeEntityList(result) {
  if (Array.isArray(result)) return result;
  if (Array.isArray(result?.items)) return result.items;
  if (Array.isArray(result?.data)) return result.data;
  if (Array.isArray(result?.results)) return result.results;
  if (Array.isArray(result?.records)) return result.records;
  return [];
}

function wrapEntity(entity) {
  if (!entity || typeof entity !== 'object') return entity;
  if (entityCache.has(entity)) return entityCache.get(entity);

  const wrapped = new Proxy(entity, {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);

      if (LIST_METHODS.has(prop) && typeof value === 'function') {
        return async (...args) => normalizeEntityList(await value.apply(target, args));
      }

      return typeof value === 'function' ? value.bind(target) : value;
    },
  });

  entityCache.set(entity, wrapped);
  return wrapped;
}

const rawBase44 = createClient({
  appId,
  token,
  functionsVersion,
  serverUrl: '',
  requiresAuth: false,
  appBaseUrl
});

export const base44 = new Proxy(rawBase44, {
  get(target, prop, receiver) {
    const value = Reflect.get(target, prop, receiver);

    if (prop === 'entities' && value && typeof value === 'object') {
      return new Proxy(value, {
        get(entities, entityName, entityReceiver) {
          return wrapEntity(Reflect.get(entities, entityName, entityReceiver));
        },
      });
    }

    return typeof value === 'function' ? value.bind(target) : value;
  },
});
