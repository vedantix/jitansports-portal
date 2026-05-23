import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DEFAULT_SITE_CONTENT } from '@/lib/siteContent';
import { useSiteContent } from '@/hooks/useSiteContent';

export const SITE_URL = 'https://jitan-sports.nl';
export const DEFAULT_IMAGE = DEFAULT_SITE_CONTENT.seo_image;

export const ROUTE_SEO = {
  '/': {
    title: 'JitanSports - Personal Trainer & Massage omgeving Den Bosch',
    description:
      'Personal training, deep tissue massage en voedingsbegeleiding in omgeving Den Bosch. Plan gratis een proefles.',
    path: '/',
    localBusiness: true,
  },
  '/personal-training': {
    title: 'Personal Training omgeving Den Bosch - Outdoor & Aan Huis | JitanSports',
    description:
      '1-op-1 personal training in omgeving Den Bosch. Outdoor, aan huis, duo-training en voedingsadvies. Start met een gratis proefles.',
    path: '/personal-training',
  },
  '/massage': {
    title: 'Deep Tissue Massage omgeving Den Bosch - Aan Huis | JitanSports',
    description:
      'Professionele deep tissue massage en ontspanningsmassage in omgeving Den Bosch. Gericht op herstel, pijnvermindering en ontspanning.',
    path: '/massage',
  },
  '/get-fit': {
    title: 'Get Fit Pakket omgeving Den Bosch - 12 Weken Coaching | JitanSports',
    description:
      'Een compleet 12-weken traject met personal training, voeding, lichaamsanalyse, massage en coaching.',
    path: '/get-fit',
  },
  '/over-ons': {
    title: 'Over JitanSports - Personal Trainer omgeving Den Bosch',
    description:
      'Leer JitanSports kennen: personal training, massage en voedingsbegeleiding met een persoonlijke aanpak in omgeving Den Bosch.',
    path: '/over-ons',
  },
  '/tarieven': {
    title: 'Tarieven Personal Training & Massage | JitanSports',
    description:
      'Bekijk de tarieven voor personal training, deep tissue massage, ontspanningsmassage en het Get Fit pakket.',
    path: '/tarieven',
  },
  '/blog': {
    title: 'Blog over Training, Massage en Gezondheid | JitanSports',
    description:
      'Tips en inzichten over personal training, massage, voeding, herstel en een gezonde lifestyle.',
    path: '/blog',
  },
  '/faq': {
    title: 'Veelgestelde Vragen | JitanSports',
    description:
      'Antwoorden op veelgestelde vragen over personal training, massage, tarieven, proeflessen en afspraken bij JitanSports.',
    path: '/faq',
  },
  '/contact': {
    title: 'Contact met JitanSports | Personal Trainer omgeving Den Bosch',
    description:
      'Neem contact op met JitanSports voor personal training, massage, voedingsadvies of een gratis proefles in omgeving Den Bosch.',
    path: '/contact',
  },
  '/booking': {
    title: 'Afspraak Plannen | JitanSports',
    description:
      'Plan direct een gratis proefles, personal training sessie of massage bij JitanSports.',
    path: '/booking',
  },
  '/personal-trainer-den-bosch': {
    title: 'Personal Trainer omgeving Den Bosch | JitanSports',
    description:
      'Personal trainer in omgeving Den Bosch voor afvallen, krachttraining, conditie en voedingsbegeleiding. Gratis proefles.',
    path: '/personal-trainer-den-bosch',
  },
  '/massage-den-bosch': {
    title: 'Massage omgeving Den Bosch - Deep Tissue & Ontspanning | JitanSports',
    description:
      'Massage in omgeving Den Bosch aan huis of op locatie. Deep tissue massage en ontspanningsmassage voor herstel en ontspanning.',
    path: '/massage-den-bosch',
  },
  '/deep-tissue-massage-den-bosch': {
    title: 'Deep Tissue Massage omgeving Den Bosch | JitanSports',
    description:
      'Deep tissue massage in omgeving Den Bosch voor rugklachten, nek- en schouderpijn, spierherstel en sportblessures.',
    path: '/deep-tissue-massage-den-bosch',
  },
};

const ROUTE_CONTENT_KEYS = {
  '/': 'home',
  '/personal-training': 'personal_training',
  '/massage': 'massage',
  '/get-fit': 'get_fit',
  '/over-ons': 'about',
  '/tarieven': 'pricing',
  '/blog': 'blog',
  '/faq': 'faq',
  '/contact': 'contact',
  '/booking': 'booking',
  '/personal-trainer-den-bosch': 'trainer_den_bosch',
  '/massage-den-bosch': 'massage_den_bosch',
  '/deep-tissue-massage-den-bosch': 'deep_tissue_den_bosch',
};

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function buildLocalBusinessSchema(content = DEFAULT_SITE_CONTENT) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: 'JitanSports',
    url: SITE_URL,
    image: content.seo_image || DEFAULT_IMAGE,
    telephone: content.phone_href || DEFAULT_SITE_CONTENT.phone_href,
    email: content.email || DEFAULT_SITE_CONTENT.email,
    priceRange: '€€',
    areaServed: [content.region || DEFAULT_SITE_CONTENT.region],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Den Bosch',
      addressCountry: 'NL',
    },
    sameAs: [
      content.instagram_url || DEFAULT_SITE_CONTENT.instagram_url,
      content.facebook_url || DEFAULT_SITE_CONTENT.facebook_url,
      content.linkedin_url || DEFAULT_SITE_CONTENT.linkedin_url,
    ],
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Personal Training' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Deep Tissue Massage' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Voedingsbegeleiding' } },
    ],
  };
}

export function buildFAQSchema(items = []) {
  const questions = items
    .filter((item) => item.question && item.answer)
    .slice(0, 12)
    .map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    }));

  if (!questions.length) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions,
  };
}

export function buildArticleSchema(post) {
  if (!post) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.meta_description || post.excerpt,
    image: post.featured_image || DEFAULT_IMAGE,
    author: {
      '@type': 'Organization',
      name: post.author || 'JitanSports',
    },
    publisher: {
      '@type': 'Organization',
      name: 'JitanSports',
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/logo.svg'),
      },
    },
    datePublished: post.created_date,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };
}

function appendMeta(head, attributes) {
  const tag = document.createElement('meta');
  Object.entries(attributes).forEach(([key, value]) => {
    if (value !== undefined && value !== null) tag.setAttribute(key, String(value));
  });
  tag.dataset.seoManaged = 'true';
  head.appendChild(tag);
}

export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
  jsonLd,
}) {
  useEffect(() => {
    const head = document.head;
    const fullTitle = title || DEFAULT_SITE_CONTENT.seo_title;
    const fullDescription = description || DEFAULT_SITE_CONTENT.seo_description;
    const canonical = absoluteUrl(path);
    const imageUrl = absoluteUrl(image || DEFAULT_IMAGE);

    document.documentElement.lang = 'nl';
    document.title = fullTitle;
    document.querySelectorAll('[data-seo-managed="true"]').forEach((node) => node.remove());

    const staticDescription = document.querySelector('meta[name="description"]:not([data-seo-managed="true"])');
    if (staticDescription) {
      staticDescription.setAttribute('content', fullDescription);
    } else {
      appendMeta(head, { name: 'description', content: fullDescription });
    }
    appendMeta(head, { name: 'robots', content: noindex ? 'noindex,nofollow' : 'index,follow' });
    appendMeta(head, { property: 'og:locale', content: 'nl_NL' });
    appendMeta(head, { property: 'og:type', content: type });
    appendMeta(head, { property: 'og:site_name', content: 'JitanSports' });
    appendMeta(head, { property: 'og:title', content: fullTitle });
    appendMeta(head, { property: 'og:description', content: fullDescription });
    appendMeta(head, { property: 'og:url', content: canonical });
    appendMeta(head, { property: 'og:image', content: imageUrl });
    appendMeta(head, { name: 'twitter:card', content: 'summary_large_image' });
    appendMeta(head, { name: 'twitter:title', content: fullTitle });
    appendMeta(head, { name: 'twitter:description', content: fullDescription });
    appendMeta(head, { name: 'twitter:image', content: imageUrl });

    const canonicalTag = document.createElement('link');
    canonicalTag.rel = 'canonical';
    canonicalTag.href = canonical;
    canonicalTag.dataset.seoManaged = 'true';
    head.appendChild(canonicalTag);

    const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd].filter(Boolean);
    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      script.dataset.seoManaged = 'true';
      head.appendChild(script);
    });
  }, [description, image, jsonLd, noindex, path, title, type]);

  return null;
}

export function RouteSEO() {
  const location = useLocation();
  const { content } = useSiteContent();
  const routeKey = ROUTE_CONTENT_KEYS[location.pathname];
  const baseSeo = ROUTE_SEO[location.pathname] || {
    title: DEFAULT_SITE_CONTENT.seo_title,
    description: DEFAULT_SITE_CONTENT.seo_description,
    path: location.pathname,
  };
  const seo = {
    ...baseSeo,
    title: routeKey ? content[`seo_${routeKey}_title`] || baseSeo.title : content.seo_title || baseSeo.title,
    description: routeKey
      ? content[`seo_${routeKey}_description`] || baseSeo.description
      : content.seo_description || baseSeo.description,
    image: content.seo_image || DEFAULT_IMAGE,
  };

  const schema = seo.localBusiness ? buildLocalBusinessSchema(content) : null;

  return <SEO {...seo} jsonLd={schema} />;
}
