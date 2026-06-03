import { useEffect, useState } from 'react';
import { base44, hasBase44App } from '@/api/base44Client';
import { DEFAULT_SITE_CONTENT, mergeSiteContent } from '@/lib/siteContent';

let cachedSiteContent = hasBase44App ? null : [];
let siteContentError = null;
let siteContentPromise = null;
const listeners = new Set();

function getSnapshot() {
  return {
    data: cachedSiteContent,
    error: siteContentError,
    isLoading: hasBase44App && !cachedSiteContent && !siteContentError,
  };
}

function publish() {
  const snapshot = getSnapshot();
  listeners.forEach((listener) => listener(snapshot));
}

function loadSiteContent() {
  if (!hasBase44App) return Promise.resolve([]);

  if (!siteContentPromise) {
    siteContentPromise = base44.entities.SiteContent.list('order')
      .then((data) => {
        cachedSiteContent = Array.isArray(data) ? data : [];
        siteContentError = null;
        publish();
        return cachedSiteContent;
      })
      .catch((error) => {
        cachedSiteContent = [];
        siteContentError = error;
        publish();
        return cachedSiteContent;
      });
  }

  return siteContentPromise;
}

export function useSiteContent() {
  const [snapshot, setSnapshot] = useState(getSnapshot);

  useEffect(() => {
    listeners.add(setSnapshot);
    loadSiteContent();

    return () => {
      listeners.delete(setSnapshot);
    };
  }, []);

  return {
    ...snapshot,
    content: snapshot.data ? mergeSiteContent(snapshot.data) : DEFAULT_SITE_CONTENT,
  };
}
