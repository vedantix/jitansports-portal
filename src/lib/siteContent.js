export const DEFAULT_SITE_CONTENT = Object.freeze({
  hero_eyebrow: 'Personal Trainer omgeving Den Bosch',
  hero_title: 'Personal training en massage aan huis',
  hero_highlight: 'Fit, sterk en vrij van pijn.',
  hero_subtitle:
    'JitanSports helpt je met personal training, deep tissue massage en voedingsbegeleiding in omgeving Den Bosch.',
  hero_image: '/images/jitansports-hero.jpg',
  primary_cta_text: 'Plan gratis proefles',
  secondary_cta_text: 'WhatsApp direct',
  cta_title: 'Klaar om jouw doelen serieus aan te pakken?',
  cta_subtitle:
    'Plan een gratis proefles of massage-intake en ontdek welke aanpak bij jouw lichaam, agenda en doel past.',
  phone_display: '06 82 27 26 80',
  phone_href: '+31682272680',
  whatsapp_number: '31682272680',
  whatsapp_message:
    'Hallo JitanSports, ik wil graag een gratis proefles aanvragen.',
  email: 'info@jitansports.com',
  region: 'omgeving Den Bosch',
  address_label: 'Omgeving Den Bosch',
  instagram_url: 'https://instagram.com',
  facebook_url: 'https://facebook.com',
  linkedin_url: 'https://linkedin.com',
  seo_title: 'JitanSports - Personal Trainer & Massage omgeving Den Bosch',
  seo_description:
    'Personal training, deep tissue massage en voedingsbegeleiding in omgeving Den Bosch. Plan gratis een proefles bij JitanSports.',
  seo_image: '/images/jitansports-hero.jpg',
});

export const CONTENT_FIELDS = [
  {
    group: 'Homepage',
    fields: [
      { key: 'hero_eyebrow', label: 'Hero label', type: 'text', order: 10 },
      { key: 'hero_title', label: 'Hero titel', type: 'text', order: 20 },
      { key: 'hero_highlight', label: 'Hero accentregel', type: 'text', order: 30 },
      { key: 'hero_subtitle', label: 'Hero tekst', type: 'textarea', order: 40 },
      { key: 'hero_image', label: 'Hero afbeelding', type: 'image_url', order: 50 },
      { key: 'primary_cta_text', label: 'Primaire knoptekst', type: 'text', order: 60 },
      { key: 'secondary_cta_text', label: 'Secundaire knoptekst', type: 'text', order: 70 },
    ],
  },
  {
    group: 'CTA',
    fields: [
      { key: 'cta_title', label: 'CTA titel', type: 'text', order: 100 },
      { key: 'cta_subtitle', label: 'CTA tekst', type: 'textarea', order: 110 },
    ],
  },
  {
    group: 'Contact',
    fields: [
      { key: 'phone_display', label: 'Telefoon zichtbaar', type: 'text', order: 200 },
      { key: 'phone_href', label: 'Telefoon link', type: 'tel', order: 210 },
      { key: 'whatsapp_number', label: 'WhatsApp nummer', type: 'tel', order: 220 },
      { key: 'whatsapp_message', label: 'WhatsApp standaardbericht', type: 'textarea', order: 230 },
      { key: 'email', label: 'E-mailadres', type: 'email', order: 240 },
      { key: 'region', label: 'Werkgebied', type: 'text', order: 250 },
      { key: 'address_label', label: 'Locatie label', type: 'text', order: 260 },
      { key: 'instagram_url', label: 'Instagram URL', type: 'url', order: 270 },
      { key: 'facebook_url', label: 'Facebook URL', type: 'url', order: 280 },
      { key: 'linkedin_url', label: 'LinkedIn URL', type: 'url', order: 290 },
    ],
  },
  {
    group: 'SEO',
    fields: [
      { key: 'seo_title', label: 'Standaard SEO titel', type: 'text', order: 300 },
      { key: 'seo_description', label: 'Standaard meta description', type: 'textarea', order: 310 },
      { key: 'seo_image', label: 'Social share afbeelding', type: 'image_url', order: 320 },
    ],
  },
];

export function flattenContentFields() {
  return CONTENT_FIELDS.flatMap((section) =>
    section.fields.map((field) => ({
      ...field,
      group: section.group,
      value: DEFAULT_SITE_CONTENT[field.key] || '',
    }))
  );
}

export function mergeSiteContent(rows = []) {
  const merged = { ...DEFAULT_SITE_CONTENT };
  rows.forEach((row) => {
    if (row?.key && typeof row.value === 'string') {
      merged[row.key] = row.value;
    }
  });
  return merged;
}

export function createWhatsAppUrl(content = DEFAULT_SITE_CONTENT, message) {
  const number = String(content.whatsapp_number || DEFAULT_SITE_CONTENT.whatsapp_number).replace(/\D/g, '');
  const text = message || content.whatsapp_message || DEFAULT_SITE_CONTENT.whatsapp_message;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
