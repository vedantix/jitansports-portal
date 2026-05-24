import { appParams } from '@/lib/app-params';

const { appId, token, functionsVersion, appBaseUrl } = appParams;
const apiServerUrl = (appBaseUrl || 'https://base44.app').replace(/\/$/, '');
const authBaseUrl = (appBaseUrl || apiServerUrl).replace(/\/$/, '');
const apiBaseUrl = `${apiServerUrl}/api`;
export const hasBase44App = Boolean(appId && appId !== 'null' && appId !== 'undefined');

const LIST_METHODS = new Set(['list', 'filter']);
const entityCache = new WeakMap();

export class Base44HttpError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = 'Base44HttpError';
    this.status = status;
    this.data = data;
  }
}

function getStoredToken() {
  if (typeof window === 'undefined') return null;
  try {
    return window.localStorage.getItem('base44_access_token') || window.localStorage.getItem('token');
  } catch {
    return null;
  }
}

function getAuthToken() {
  return token || getStoredToken();
}

function normalizeEntityList(result) {
  if (Array.isArray(result)) return result;
  if (Array.isArray(result?.items)) return result.items;
  if (Array.isArray(result?.data)) return result.data;
  if (Array.isArray(result?.results)) return result.results;
  if (Array.isArray(result?.records)) return result.records;
  return [];
}

function withParams(path, params) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      query.set(key, Array.isArray(value) ? value.join(',') : String(value));
    }
  });
  const queryString = query.toString();
  return queryString ? `${path}?${queryString}` : path;
}

export async function base44Request(path, { method = 'GET', body, headers = {} } = {}) {
  if (!hasBase44App) {
    throw new Base44HttpError('Base44 app id is not configured', 0, null);
  }

  const requestHeaders = new Headers({
    Accept: 'application/json',
    ...headers,
  });
  requestHeaders.set('X-App-Id', String(appId));

  const authToken = getAuthToken();
  if (authToken) {
    requestHeaders.set('Authorization', `Bearer ${authToken}`);
  }
  if (functionsVersion) {
    requestHeaders.set('Base44-Functions-Version', functionsVersion);
  }
  if (typeof window !== 'undefined') {
    requestHeaders.set('X-Origin-URL', window.location.href);
  }

  let payload = body;
  if (body !== undefined && !(body instanceof FormData)) {
    requestHeaders.set('Content-Type', requestHeaders.get('Content-Type') || 'application/json');
    payload = JSON.stringify(body);
  }

  const response = await fetch(`${apiBaseUrl}${path}`, {
    method,
    headers: requestHeaders,
    body: payload,
  });

  const contentType = response.headers.get('content-type') || '';
  const data = response.status === 204
    ? null
    : contentType.includes('application/json')
      ? await response.json().catch(() => null)
      : await response.text();

  if (!response.ok) {
    const message = data?.message || data?.detail || response.statusText || 'Base44 request failed';
    throw new Base44HttpError(message, response.status, data);
  }

  return data;
}

function createEntityHandler(entityName) {
  const basePath = `/apps/${appId}/entities/${entityName}`;

  return {
    async list(sort, limit, skip, fields) {
      if (!hasBase44App) return [];
      return normalizeEntityList(await base44Request(withParams(basePath, { sort, limit, skip, fields })));
    },
    async filter(query, sort, limit, skip, fields) {
      if (!hasBase44App) return [];
      return normalizeEntityList(await base44Request(withParams(basePath, {
        q: JSON.stringify(query || {}),
        sort,
        limit,
        skip,
        fields,
      })));
    },
    get(id) {
      return base44Request(`${basePath}/${id}`);
    },
    create(data) {
      return base44Request(basePath, { method: 'POST', body: data });
    },
    update(id, data) {
      return base44Request(`${basePath}/${id}`, { method: 'PUT', body: data });
    },
    delete(id) {
      return base44Request(`${basePath}/${id}`, { method: 'DELETE' });
    },
    deleteMany(query) {
      return base44Request(basePath, { method: 'DELETE', body: query });
    },
    bulkCreate(data) {
      return base44Request(`${basePath}/bulk`, { method: 'POST', body: data });
    },
    bulkUpdate(data) {
      return base44Request(`${basePath}/bulk`, { method: 'PUT', body: data });
    },
    updateMany(query, data) {
      return base44Request(`${basePath}/update-many`, { method: 'PATCH', body: { query, data } });
    },
  };
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

function integrationPayload(data) {
  if (data instanceof FormData) return data;
  if (!data || typeof data !== 'object') return data;

  const hasFile = Object.values(data).some((value) => value instanceof File);
  if (!hasFile) return data;

  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (value instanceof File) {
      formData.append(key, value, value.name);
    } else if (value && typeof value === 'object') {
      formData.append(key, JSON.stringify(value));
    } else if (value !== undefined && value !== null) {
      formData.append(key, String(value));
    }
  });
  return formData;
}

const entities = new Proxy({}, {
  get(_, entityName) {
    if (typeof entityName !== 'string' || entityName === 'then' || entityName.startsWith('_')) return undefined;
    return wrapEntity(createEntityHandler(entityName));
  },
});

const integrations = new Proxy({}, {
  get(_, packageName) {
    if (typeof packageName !== 'string' || packageName === 'then' || packageName.startsWith('_')) return undefined;
    return new Proxy({}, {
      get(__, endpointName) {
        if (typeof endpointName !== 'string' || endpointName === 'then' || endpointName.startsWith('_')) return undefined;
        return (data = {}) => {
          const payload = integrationPayload(data);
          const corePath = `/apps/${appId}/integration-endpoints/Core/${endpointName}`;
          const packagePath = `/apps/${appId}/integration-endpoints/installable/${packageName}/integration-endpoints/${endpointName}`;
          return base44Request(packageName === 'Core' ? corePath : packagePath, {
            method: 'POST',
            body: payload,
          });
        };
      },
    });
  },
});

const auth = {
  me() {
    return base44Request(`/apps/${appId}/entities/User/me`);
  },
  redirectToLogin(nextUrl) {
    const redirectUrl = nextUrl
      ? new URL(nextUrl, window.location.origin).toString()
      : window.location.href;
    window.location.href = `${authBaseUrl}/login?from_url=${encodeURIComponent(redirectUrl)}`;
  },
  logout(redirectUrl) {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.removeItem('base44_access_token');
      window.localStorage.removeItem('token');
    } catch {
      // Ignore storage failures; redirecting to the auth endpoint remains the source of truth.
    }
    const fromUrl = redirectUrl || window.location.href;
    window.location.href = `${authBaseUrl}/api/apps/auth/logout?from_url=${encodeURIComponent(fromUrl)}`;
  },
  setToken(nextToken, saveToStorage = true) {
    if (!nextToken || !saveToStorage || typeof window === 'undefined') return;
    try {
      window.localStorage.setItem('base44_access_token', nextToken);
      window.localStorage.setItem('token', nextToken);
    } catch {
      // Storage may be unavailable in hardened browser modes.
    }
  },
};

export const base44 = {
  entities,
  integrations,
  auth,
};
