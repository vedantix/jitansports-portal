import { useEffect, useId, useRef, useState } from 'react';
import GoogleRatingBadge from '@/components/GoogleRatingBadge';
import { isJotformConfigured, reviewsConfig } from '@/config/reviews';

function getWidgetContainerId(widgetId) {
  return `JFWebsiteWidget-${widgetId}`;
}

function createWidgetScriptId(instanceId) {
  return `jotform-google-reviews-${instanceId.replace(/[^a-zA-Z0-9_-]/g, '')}`;
}

export default function JotformReviews({ variant = 'grid', className = '' }) {
  const ref = useRef(null);
  const reactId = useId();
  const [shouldLoad, setShouldLoad] = useState(false);
  const widgetId = reviewsConfig.jotformWidgetId;
  const widgetContainerId = getWidgetContainerId(widgetId);
  const scriptId = createWidgetScriptId(`${variant}-${reactId}-${widgetId}`);
  const minHeightClass = variant === 'carousel' ? 'min-h-[300px]' : 'min-h-[420px]';

  useEffect(() => {
    if (!isJotformConfigured) return undefined;

    const node = ref.current;
    if (!node) return undefined;

    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '360px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || !isJotformConfigured || typeof document === 'undefined') return undefined;

    const existingScript = document.getElementById(scriptId);
    if (existingScript) return undefined;

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = `https://www.jotform.com/website-widgets/embed/${widgetId}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [scriptId, shouldLoad, widgetId]);

  return (
    <div
      ref={ref}
      className={`rounded-xl border border-border bg-white p-4 shadow-sm md:p-5 ${minHeightClass} ${className}`}
      data-review-widget={variant}
    >
      {isJotformConfigured ? (
        <div
          id={widgetContainerId}
          className="w-full"
          data-review-source="jotform-google-reviews"
          data-review-layout={variant}
          data-desktop-visible={reviewsConfig.carousel.desktopVisibleReviews}
          data-tablet-visible={reviewsConfig.carousel.tabletVisibleReviews}
          data-mobile-visible={reviewsConfig.carousel.mobileVisibleReviews}
          data-autoplay-ms={reviewsConfig.carousel.autoplayMs}
          data-infinite-loop={String(reviewsConfig.carousel.infiniteLoop)}
          data-navigation={reviewsConfig.carousel.navigation}
        />
      ) : (
        <div className="flex h-full min-h-[240px] flex-col items-center justify-center gap-4 text-center">
          <GoogleRatingBadge showButton={false} />
          <div>
            <p className="text-sm font-semibold text-secondary">
              Jotform Google Reviews widget klaar om te koppelen
            </p>
            <p className="mt-1 max-w-xl text-sm text-muted-foreground">
              Vul `VITE_JOTFORM_WIDGET_ID` in of vervang centraal de Jotform embed-code.
              Daarna worden de live Google Reviews van JitanSports automatisch geladen.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
