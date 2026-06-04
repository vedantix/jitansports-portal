import { useEffect } from 'react';
import { DEFAULT_SITE_CONTENT } from '@/lib/siteContent';
import { CORE_SERVICES, LOCAL_AREAS } from '@/config/seoContent';

export const SITE_URL = 'https://jitan-sports.nl';
export const DEFAULT_IMAGE = DEFAULT_SITE_CONTENT.seo_image;

export const ROUTE_SEO = {
  '/': {
    title: 'Personal Trainer & Deep Tissue Massage Den Bosch | Jitan Sports',
    description:
      'Verbeter je conditie, herstel sneller en bereik jouw doelen met personal training, deep tissue massage en voedingsbegeleiding in Den Bosch. Plan direct een gratis intake.',
    path: '/',
    localBusiness: true,
  },
  '/personal-training': {
    title: 'Personal Training Den Bosch - Outdoor & Aan Huis | JitanSports',
    description:
      '1-op-1 personal training in Den Bosch, Rosmalen en Vught. Outdoor, aan huis, duo-training en voedingsadvies. Start met een gratis proefles.',
    path: '/personal-training',
  },
  '/massage': {
    title: 'Massage Den Bosch - Deep Tissue, Sportmassage & Aan Huis | JitanSports',
    description:
      'Professionele deep tissue massage, sportmassage en ontspanningsmassage aan huis in Den Bosch. Gericht op herstel, pijnvermindering en ontspanning.',
    path: '/massage',
  },
  '/voeding': {
    title: 'Voedingscoach Den Bosch - Voedingsschema & Lichaamsanalyse | JitanSports',
    description:
      "Voedingscoach in Den Bosch voor afvallen, aankomen, spieropbouw, voedingsschema's op maat, lichaamsanalyse en digitaal weegrapport.",
    path: '/voeding',
  },
  '/get-fit': {
    title: 'Get Fit Pakket Den Bosch - 12 Weken Personal Training | JitanSports',
    description:
      'Een compleet 12-weken traject met personal training, voeding, lichaamsanalyse, massage en coaching.',
    path: '/get-fit',
  },
  '/vip-treatment': {
    title: 'VIP Treatment Den Bosch - Personal Training + Massage | JitanSports',
    description:
      'Exclusieve VIP Treatment in Den Bosch: 1 uur personal training gevolgd door 1 uur massage. Premium inspanning, herstel en ontspanning.',
    path: '/vip-treatment',
  },
  '/bedrijven': {
    title: 'Bedrijfsfitness en Stoelmassage Den Bosch | JitanSports',
    description:
      'Stoelmassage, vitaliteitsdagen, groepstrainingen en workshops voor bedrijven in Den Bosch en omgeving. Vraag een offerte aan bij JitanSports.',
    path: '/bedrijven',
  },
  '/referenties': {
    title: 'Google Reviews & Ervaringen | JitanSports Den Bosch',
    description:
      'Lees echte ervaringen van klanten over personal training, Deep Tissue Massage, voedingsbegeleiding en coaching bij JitanSports in Den Bosch.',
    path: '/referenties',
  },
  '/over-ons': {
    title: 'Over Jitan - Personal Trainer, Massage Specialist & Voedingscoach Den Bosch',
    description:
      'Leer Jitan kennen: personal trainer, Deep Tissue Massage specialist en voedingscoach in Den Bosch. Persoonlijke begeleiding met 10+ jaar ervaring.',
    path: '/over-ons',
  },
  '/tarieven': {
    title: 'Tarieven Personal Training, Massage & Coaching Den Bosch | JitanSports',
    description:
      'Bekijk tarieven voor personal training, Deep Tissue Massage, sportmassage, VIP Treatment en het Get Fit pakket bij JitanSports Den Bosch.',
    path: '/tarieven',
  },
  '/blog': {
    title: 'Blog over Personal Training, Massage en Afvallen Den Bosch | JitanSports',
    description:
      'Praktische tips van Jitan over personal training, Deep Tissue Massage, sportmassage, afvallen, voeding, herstel en fitter worden in Den Bosch.',
    path: '/blog',
  },
  '/faq': {
    title: 'Veelgestelde Vragen over Personal Training en Massage Den Bosch | JitanSports',
    description:
      'Antwoorden op vragen over personal training, Deep Tissue Massage, sportmassage, voedingsbegeleiding, afvallen, tarieven en gratis intake bij JitanSports.',
    path: '/faq',
  },
  '/contact': {
    title: 'Contact met JitanSports | Personal Trainer Den Bosch',
    description:
      'Neem contact op met JitanSports voor personal training, Deep Tissue Massage, voedingsadvies of een gratis proefles in Den Bosch en omgeving.',
    path: '/contact',
  },
  '/booking': {
    title: 'Gratis Intake of Afspraak Plannen | JitanSports Den Bosch',
    description:
      'Plan direct een gratis proefles, intake, personal training sessie of massage bij JitanSports in Den Bosch.',
    path: '/booking',
  },
  '/personal-trainer-den-bosch': {
    title: 'Personal Trainer Den Bosch | Jitan Sports',
    description:
      'Personal trainer in Den Bosch voor afvallen, krachttraining, fitter worden, conditie en voedingsbegeleiding. Start met een gratis proefles.',
    path: '/personal-trainer-den-bosch',
  },
  '/personal-trainer-rosmalen': {
    title: 'Personal Trainer Rosmalen - Aan Huis en Outdoor | JitanSports',
    description:
      'Personal training in Rosmalen voor afvallen, krachttraining, conditie en voedingsbegeleiding. Training aan huis of outdoor met gratis proefles.',
    path: '/personal-trainer-rosmalen',
  },
  '/personal-trainer-vught': {
    title: 'Personal Trainer Vught - Aan Huis en Outdoor | JitanSports',
    description:
      'Personal training in Vught voor afvallen, sterker worden, conditie en voedingsbegeleiding. Training aan huis of outdoor met gratis proefles.',
    path: '/personal-trainer-vught',
  },
  '/personal-trainer-boxtel': {
    title: 'Personal Trainer Boxtel - Aan Huis en Outdoor | JitanSports',
    description:
      'Personal training in Boxtel voor afvallen, krachttraining, conditie en voedingsbegeleiding. Training aan huis of outdoor met gratis proefles.',
    path: '/personal-trainer-boxtel',
  },
  '/massage-den-bosch': {
    title: 'Massage Den Bosch - Deep Tissue, Sportmassage & Ontspanning | JitanSports',
    description:
      'Massage in Den Bosch aan huis of op locatie. Deep Tissue Massage, sportmassage en ontspanningsmassage voor herstel en ontspanning.',
    path: '/massage-den-bosch',
  },
  '/deep-tissue-massage-den-bosch': {
    title: 'Deep Tissue Massage Den Bosch | Jitan Sports',
    description:
      'Deep Tissue Massage in Den Bosch voor rugklachten, nek- en schouderpijn, spierherstel, vastzittend bindweefsel en sportblessures.',
    path: '/deep-tissue-massage-den-bosch',
  },
  '/sportmassage-den-bosch': {
    title: 'Sportmassage Den Bosch | Jitan Sports',
    description:
      'Professionele sportmassage in Den Bosch. Sneller herstel, minder spierpijn, betere prestaties en blessurepreventie. Aan huis beschikbaar.',
    path: '/sportmassage-den-bosch',
  },
  '/massage-aan-huis-den-bosch': {
    title: 'Massage Aan Huis Den Bosch | Deep Tissue & Ontspanning | JitanSports',
    description:
      'Massage aan huis in Den Bosch en omgeving. Deep Tissue Massage, sportmassage en ontspanningsmassage met professionele massagetafel.',
    path: '/massage-aan-huis-den-bosch',
  },
  '/voedingscoach-den-bosch': {
    title: 'Voedingscoach Den Bosch | Afvallen, Spieropbouw & Lichaamsanalyse | JitanSports',
    description:
      "Voedingscoach in Den Bosch voor voedingsschema's op maat, afvallen, spieropbouw, lichaamsanalyse en digitaal weegrapport.",
    path: '/voedingscoach-den-bosch',
  },
  '/voedingsbegeleiding-den-bosch': {
    title: 'Voedingsbegeleiding Den Bosch | Jitan Sports',
    description:
      "Voedingsbegeleiding in Den Bosch voor afvallen, spieropbouw, gezonder eten, voedingsschema's op maat, lichaamsanalyse en voortgangsmetingen.",
    path: '/voedingsbegeleiding-den-bosch',
  },
};

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function buildLocalBusinessSchema(content = DEFAULT_SITE_CONTENT) {
  const businessId = absoluteUrl('/#jitan-sports');
  const streetAddress = content.address_label || DEFAULT_SITE_CONTENT.address_label;
  const serviceOffers = CORE_SERVICES.map((service) => ({
    '@type': 'Offer',
    url: absoluteUrl(service.url),
    areaServed: LOCAL_AREAS,
    itemOffered: {
      '@type': 'Service',
      name: service.name,
      description: service.answer,
      provider: { '@id': businessId },
    },
  }));

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'SportsActivityLocation', 'HealthAndBeautyBusiness'],
    '@id': businessId,
    name: 'Jitan Sports',
    alternateName: 'JitanSports',
    description:
      'Personal training, Deep Tissue Massage, sportmassage, massage aan huis en voedingsbegeleiding in Den Bosch en omgeving.',
    url: SITE_URL,
    logo: absoluteUrl('/images/jitansports-logo-menu.png'),
    image: absoluteUrl(content.seo_image || DEFAULT_IMAGE),
    telephone: content.phone_href || DEFAULT_SITE_CONTENT.phone_href,
    email: content.email || DEFAULT_SITE_CONTENT.email,
    priceRange: '€€',
    areaServed: LOCAL_AREAS.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    address: {
      '@type': 'PostalAddress',
      ...(streetAddress && !streetAddress.toLowerCase().includes('omgeving') ? { streetAddress } : {}),
      addressLocality: 'Den Bosch',
      addressRegion: 'Noord-Brabant',
      addressCountry: 'NL',
    },
    sameAs: [
      content.instagram_url || DEFAULT_SITE_CONTENT.instagram_url,
      content.facebook_url || DEFAULT_SITE_CONTENT.facebook_url,
      content.linkedin_url || DEFAULT_SITE_CONTENT.linkedin_url,
    ].filter(Boolean),
    founder: { '@id': absoluteUrl('/over-ons#jitan') },
    knowsAbout: [
      'Personal Training',
      'Deep Tissue Massage',
      'Sportmassage',
      'Voedingsbegeleiding',
      'Afvallen',
      'Krachttraining',
      'Herstel',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      reviewCount: '40',
    },
    makesOffer: serviceOffers,
  };
}

export function buildServiceSchema({
  name,
  description,
  path,
  serviceType = name,
  image = DEFAULT_IMAGE,
  areaServed = LOCAL_AREAS,
}) {
  const businessId = absoluteUrl('/#jitan-sports');

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(path)}#service`,
    name,
    serviceType,
    description,
    url: absoluteUrl(path),
    image: absoluteUrl(image),
    provider: { '@id': businessId },
    areaServed: areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    audience: {
      '@type': 'Audience',
      audienceType: 'Mensen die fitter, sterker, pijnvrijer of energieker willen worden',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      reviewCount: '40',
    },
    offers: {
      '@type': 'Offer',
      url: absoluteUrl('/booking'),
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
    },
  };
}

export function buildBreadcrumbSchema(items = []) {
  const filtered = items.filter((item) => item.name && item.path);
  if (!filtered.length) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: filtered.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildWebPageSchema({ title, description, path = '/', image = DEFAULT_IMAGE }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    inLanguage: 'nl-NL',
    isPartOf: { '@id': absoluteUrl('/#website') },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: absoluteUrl(image),
    },
    about: CORE_SERVICES.map((service) => service.name),
  };
}

export function buildPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': absoluteUrl('/over-ons#jitan'),
    name: 'Jitan',
    url: absoluteUrl('/over-ons'),
    worksFor: { '@id': absoluteUrl('/#jitan-sports') },
    jobTitle: 'Personal Trainer, Massage Specialist en Voedingscoach',
    hasOccupation: [
      { '@type': 'Occupation', name: 'Personal Trainer' },
      { '@type': 'Occupation', name: 'Massage Specialist' },
      { '@type': 'Occupation', name: 'Voedingscoach' },
    ],
    knowsAbout: [
      'personal training',
      'deep tissue massage',
      'sportmassage',
      'voedingsbegeleiding',
      'krachttraining',
      'afvallen',
      'herstel',
    ],
    areaServed: LOCAL_AREAS,
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': absoluteUrl('/#website'),
    name: 'Jitan Sports',
    url: SITE_URL,
    inLanguage: 'nl-NL',
    publisher: { '@id': absoluteUrl('/#jitan-sports') },
    about: CORE_SERVICES.map((service) => service.name),
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
  const image = post.featuredImage || post.featured_image || DEFAULT_IMAGE;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.meta_description || post.excerpt,
    image: absoluteUrl(image),
    author: {
      '@type': 'Organization',
      name: 'Jitan Sports',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Jitan Sports',
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/images/jitansports-logo-menu.png'),
      },
    },
    datePublished: post.created_date,
    dateModified: post.updated_date || post.created_date,
    articleSection: post.category || 'Gezondheid',
    inLanguage: 'nl-NL',
    about: ['personal training', 'massage', 'voeding', 'herstel', 'Den Bosch'],
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    isPartOf: { '@id': absoluteUrl('/blog#blog') },
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
