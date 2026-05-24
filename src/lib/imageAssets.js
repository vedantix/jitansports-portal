const IMAGE_BASE = '/images/optimized';

const srcSet = (base, variant, widths, format) =>
  widths.map((width) => `${IMAGE_BASE}/${base}-${variant}-${width}.${format} ${width}w`).join(', ');

const standardAsset = ({ base, variant, widths, fallbackWidth, sizes, width, height }) => ({
  fallback: `${IMAGE_BASE}/${base}-${variant}-${fallbackWidth}.jpg`,
  fallbackSrcSet: srcSet(base, variant, widths, 'jpg'),
  sources: [
    { type: 'image/avif', srcSet: srcSet(base, variant, widths, 'avif'), sizes },
    { type: 'image/webp', srcSet: srcSet(base, variant, widths, 'webp'), sizes },
  ],
  sizes,
  width,
  height,
});

export const IMAGE_ASSETS = {
  hero: {
    fallback: `${IMAGE_BASE}/hero-desktop-1344.jpg`,
    fallbackSrcSet: srcSet('hero', 'desktop', [768, 1024, 1344], 'jpg'),
    sources: [
      {
        media: '(max-width: 767px)',
        type: 'image/avif',
        srcSet: srcSet('hero', 'mobile', [480, 560, 768, 960], 'avif'),
        sizes: '100vw',
      },
      {
        media: '(max-width: 767px)',
        type: 'image/webp',
        srcSet: srcSet('hero', 'mobile', [480, 560, 768, 960], 'webp'),
        sizes: '100vw',
      },
      {
        type: 'image/avif',
        srcSet: srcSet('hero', 'desktop', [768, 1024, 1344], 'avif'),
        sizes: '100vw',
      },
      {
        type: 'image/webp',
        srcSet: srcSet('hero', 'desktop', [768, 1024, 1344], 'webp'),
        sizes: '100vw',
      },
    ],
    sizes: '100vw',
    width: 1344,
    height: 768,
  },
  serviceTraining: standardAsset({
    base: 'service-training',
    variant: 'card',
    widths: [360, 540, 720, 960],
    fallbackWidth: 720,
    sizes: '(min-width: 768px) 33vw, 100vw',
    width: 720,
    height: 475,
  }),
  serviceMassage: standardAsset({
    base: 'service-massage',
    variant: 'card',
    widths: [360, 540, 720, 960],
    fallbackWidth: 720,
    sizes: '(min-width: 768px) 33vw, 100vw',
    width: 720,
    height: 475,
  }),
  serviceGetfit: standardAsset({
    base: 'service-getfit',
    variant: 'card',
    widths: [360, 540, 720, 960],
    fallbackWidth: 720,
    sizes: '(min-width: 768px) 33vw, 100vw',
    width: 720,
    height: 475,
  }),
  pageTraining: standardAsset({
    base: 'page-training',
    variant: 'hero',
    widths: [640, 960, 1280],
    fallbackWidth: 960,
    sizes: '100vw',
    width: 1280,
    height: 717,
  }),
  pageMassage: standardAsset({
    base: 'page-massage',
    variant: 'hero',
    widths: [640, 960, 1280],
    fallbackWidth: 960,
    sizes: '100vw',
    width: 1280,
    height: 717,
  }),
  pageGetfit: standardAsset({
    base: 'page-getfit',
    variant: 'hero',
    widths: [640, 960, 1280],
    fallbackWidth: 960,
    sizes: '100vw',
    width: 1280,
    height: 717,
  }),
  pageAbout: standardAsset({
    base: 'page-about',
    variant: 'hero',
    widths: [640, 960, 1280],
    fallbackWidth: 960,
    sizes: '100vw',
    width: 1280,
    height: 717,
  }),
  galleryOutdoor: standardAsset({
    base: 'gallery-outdoor',
    variant: 'thumb',
    widths: [320, 480, 640],
    fallbackWidth: 480,
    sizes: '(min-width: 768px) 33vw, 50vw',
    width: 640,
    height: 427,
  }),
  galleryStrength: standardAsset({
    base: 'gallery-strength',
    variant: 'thumb',
    widths: [320, 480, 640],
    fallbackWidth: 480,
    sizes: '(min-width: 768px) 33vw, 50vw',
    width: 640,
    height: 427,
  }),
  galleryMassage: standardAsset({
    base: 'gallery-massage',
    variant: 'thumb',
    widths: [320, 480, 640],
    fallbackWidth: 480,
    sizes: '(min-width: 768px) 33vw, 50vw',
    width: 640,
    height: 427,
  }),
  gallerySession: standardAsset({
    base: 'gallery-session',
    variant: 'thumb',
    widths: [320, 480, 640],
    fallbackWidth: 480,
    sizes: '(min-width: 768px) 33vw, 50vw',
    width: 640,
    height: 427,
  }),
};

const knownSources = new Map([
  [IMAGE_ASSETS.hero.fallback, 'hero'],
  ['https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=75', 'serviceTraining'],
  ['https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200', 'serviceTraining'],
  [IMAGE_ASSETS.serviceTraining.fallback, 'serviceTraining'],
  ['https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=75', 'serviceMassage'],
  ['https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200', 'serviceMassage'],
  [IMAGE_ASSETS.serviceMassage.fallback, 'serviceMassage'],
  ['https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=75', 'serviceGetfit'],
  [IMAGE_ASSETS.serviceGetfit.fallback, 'serviceGetfit'],
  ['https://media.base44.com/images/public/6a115e447a3ac96774309014/77461c012_generated_cb61b25a.png', 'pageTraining'],
  [IMAGE_ASSETS.pageTraining.fallback, 'pageTraining'],
  ['https://media.base44.com/images/public/6a115e447a3ac96774309014/f2afe8ff0_generated_c71cfae0.png', 'pageMassage'],
  [IMAGE_ASSETS.pageMassage.fallback, 'pageMassage'],
  ['https://media.base44.com/images/public/6a115e447a3ac96774309014/115f006bd_generated_a407f042.png', 'pageGetfit'],
  [IMAGE_ASSETS.pageGetfit.fallback, 'pageGetfit'],
  ['https://media.base44.com/images/public/6a115e447a3ac96774309014/b6edaf9c7_generated_18c500fb.png', 'pageAbout'],
  [IMAGE_ASSETS.pageAbout.fallback, 'pageAbout'],
  ['https://images.unsplash.com/photo-1544033527-b192daee1f5b?auto=format&fit=crop&w=600&q=75', 'galleryOutdoor'],
  [IMAGE_ASSETS.galleryOutdoor.fallback, 'galleryOutdoor'],
  ['https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=75', 'galleryStrength'],
  [IMAGE_ASSETS.galleryStrength.fallback, 'galleryStrength'],
  ['https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=75', 'galleryMassage'],
  [IMAGE_ASSETS.galleryMassage.fallback, 'galleryMassage'],
  ['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=75', 'gallerySession'],
  [IMAGE_ASSETS.gallerySession.fallback, 'gallerySession'],
]);

const optimizedPrefixes = [
  ['hero-desktop', 'hero'],
  ['hero-mobile', 'hero'],
  ['service-training-card', 'serviceTraining'],
  ['service-massage-card', 'serviceMassage'],
  ['service-getfit-card', 'serviceGetfit'],
  ['page-training-hero', 'pageTraining'],
  ['page-massage-hero', 'pageMassage'],
  ['page-getfit-hero', 'pageGetfit'],
  ['page-about-hero', 'pageAbout'],
  ['gallery-outdoor-thumb', 'galleryOutdoor'],
  ['gallery-strength-thumb', 'galleryStrength'],
  ['gallery-massage-thumb', 'galleryMassage'],
  ['gallery-session-thumb', 'gallerySession'],
];

export function resolveImageAsset(src) {
  const key = knownSources.get(src);
  if (key) return IMAGE_ASSETS[key];

  if (typeof src === 'string' && src.startsWith(`${IMAGE_BASE}/`)) {
    const fileName = src.slice(IMAGE_BASE.length + 1);
    const prefix = optimizedPrefixes.find(([candidate]) => fileName.startsWith(`${candidate}-`));
    if (prefix) return IMAGE_ASSETS[prefix[1]];
  }

  return null;
}
