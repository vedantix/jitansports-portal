import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DEFAULT_SITE_CONTENT } from '@/lib/siteContent';

export const SITE_URL = 'https://www.jitansports.com';
export const DEFAULT_IMAGE = DEFAULT_SITE_CONTENT.seo_image;

export const ROUTE_SEO = {
  '/': {
    title: 'JitanSports - Personal Trainer & Massage Den Haag',
    description:
      'Personal training, deep tissue massage en voedingsbegeleiding in Den Haag, Wassenaar, Voorburg en Leidschendam. Plan gratis een proefles.',
    path: '/',
    localBusiness: true,
  },
  '/personal-training': {
    title: 'Personal Training Den Haag - Outdoor & Aan Huis | JitanSports',
    description:
      '1-op-1 personal training in Den Haag en omgeving. Outdoor, aan huis, duo-training en voedingsadvies. Start met een gratis proefles.',
    path: '/personal-training',
  },
  '/massage': {
    title: 'Deep Tissue Massage Den Haag - Aan Huis | JitanSports',
    description:
      'Professionele deep tissue massage en ontspanningsmassage in Den Haag. Gericht op herstel, pijnvermindering en ontspanning.',
    path: '/massage',
  },
  '/get-fit': {
    title: 'Get Fit Pakket Den Haag - 12 Weken Coaching | JitanSports',
    description:
      'Een compleet 12-weken traject met personal training, voeding, lichaamsanalyse, massage en coaching.',
    path: '/get-fit',
  },
  '/over-ons': {
    title: 'Over JitanSports - Personal Trainer Den Haag',
    description:
      'Leer JitanSports kennen: personal training, massage en voedingsbegeleiding met een persoonlijke aanpak in de regio Den Haag.',
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
    title: 'Contact met JitanSports | Personal Trainer Den Haag',
    description:
      'Neem contact op met JitanSports voor personal training, massage, voedingsadvies of een gratis proefles in Den Haag en omgeving.',
    path: '/contact',
  },
  '/booking': {
    title: 'Afspraak Plannen | JitanSports',
    description:
      'Plan direct een gratis proefles, personal training sessie of massage bij JitanSports.',
    path: '/booking',
  },
  '/personal-trainer-den-haag': {
    title: 'Personal Trainer Den Haag | JitanSports',
    description:
      'Personal trainer in Den Haag voor afvallen, krachttraining, conditie en voedingsbegeleiding. Gratis proefles.',
    path: '/personal-trainer-den-haag',
  },
  '/personal-trainer-wassenaar': {
    title: 'Personal Trainer Wassenaar | JitanSports',
    description:
      'Personal training in Wassenaar, outdoor of aan huis. Begeleiding op maat en gratis proefles.',
    path: '/personal-trainer-wassenaar',
  },
  '/personal-trainer-voorburg': {
    title: 'Personal Trainer Voorburg | JitanSports',
    description:
      '1-op-1 personal training in Voorburg met voedingsadvies, coaching en een gratis proefles.',
    path: '/personal-trainer-voorburg',
  },
  '/personal-trainer-leidschendam': {
    title: 'Personal Trainer Leidschendam | JitanSports',
    description:
      'Personal training in Leidschendam met training op maat, voedingsadvies en massage.',
    path: '/personal-trainer-leidschendam',
  },
  '/massage-den-haag': {
    title: 'Massage Den Haag - Deep Tissue & Ontspanning | JitanSports',
    description:
      'Massage in Den Haag aan huis of op locatie. Deep tissue massage en ontspanningsmassage voor herstel en ontspanning.',
    path: '/massage-den-haag',
  },
  '/deep-tissue-massage-den-haag': {
    title: 'Deep Tissue Massage Den Haag | JitanSports',
    description:
      'Deep tissue massage in Den Haag voor rugklachten, nek- en schouderpijn, spierherstel en sportblessures.',
    path: '/deep-tissue-massage-den-haag',
  },
};

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: 'JitanSports',
    url: SITE_URL,
    image: DEFAULT_IMAGE,
    telephone: '+31682272680',
    email: DEFAULT_SITE_CONTENT.email,
    priceRange: '€€',
    areaServed: ['Den Haag', 'Wassenaar', 'Voorburg', 'Leidschendam'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Den Haag',
      addressCountry: 'NL',
    },
    sameAs: [
      DEFAULT_SITE_CONTENT.instagram_url,
      DEFAULT_SITE_CONTENT.facebook_url,
      DEFAULT_SITE_CONTENT.linkedin_url,
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
  const seo = ROUTE_SEO[location.pathname] || {
    title: DEFAULT_SITE_CONTENT.seo_title,
    description: DEFAULT_SITE_CONTENT.seo_description,
    path: location.pathname,
  };

  const schema = seo.localBusiness ? buildLocalBusinessSchema() : null;

  return <SEO {...seo} jsonLd={schema} />;
}
