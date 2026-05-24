import { useQuery } from '@tanstack/react-query';
import { base44, hasBase44App } from '@/api/base44Client';
import { DEFAULT_SITE_CONTENT, mergeSiteContent } from '@/lib/siteContent';

export function useSiteContent() {
  const query = useQuery({
    queryKey: ['site-content'],
    queryFn: async () => {
      if (!base44.entities?.SiteContent) return [];
      return base44.entities.SiteContent.list('order');
    },
    enabled: hasBase44App,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  return {
    ...query,
    content: query.data ? mergeSiteContent(query.data) : DEFAULT_SITE_CONTENT,
  };
}
