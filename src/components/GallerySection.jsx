import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useSiteContent } from '@/hooks/useSiteContent';
import ResponsiveImage from '@/components/ResponsiveImage';

const FALLBACK_IMAGES = [
  { id: 1, image_url: '/images/optimized/service-training-card-720.jpg', title: 'Personal Training' },
  { id: 2, image_url: '/images/optimized/gallery-outdoor-thumb-640.jpg', title: 'Outdoor Training' },
  { id: 3, image_url: '/images/optimized/gallery-strength-thumb-640.jpg', title: 'Krachttraining' },
  { id: 4, image_url: '/images/optimized/service-getfit-card-720.jpg', title: 'Fitness' },
  { id: 5, image_url: '/images/optimized/gallery-massage-thumb-640.jpg', title: 'Massage' },
  { id: 6, image_url: '/images/optimized/gallery-session-thumb-640.jpg', title: 'Training sessie' },
];

export default function GallerySection() {
  const { content } = useSiteContent();
  const [images, setImages] = useState(FALLBACK_IMAGES);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    base44.entities.GalleryImage.filter({ visible: true }, 'order').then(data => {
      if (data?.length >= 3) setImages(data);
    }).catch(() => {});
  }, []);

  const prevImg = () => setLightbox(i => (i - 1 + images.length) % images.length);
  const nextImg = () => setLightbox(i => (i + 1) % images.length);

  useEffect(() => {
    if (lightbox === null) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') prevImg();
      else if (e.key === 'ArrowRight') nextImg();
      else if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox]);

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-amber-700 font-semibold uppercase tracking-wider text-sm mb-2">{content.gallery_eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">{content.gallery_title}</h2>
        </div>
        <div className="columns-2 md:columns-3 gap-3">
          {images.map((img, index) => (
            <button
              key={img.id}
              type="button"
              className="mb-3 block w-full break-inside-avoid cursor-pointer overflow-hidden rounded-xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              onClick={() => setLightbox(index)}
              aria-label={`${img.title || 'JitanSports foto'} openen`}
            >
              <ResponsiveImage
                src={img.image_url}
                alt={img.title || 'JitanSports Training'}
                className="w-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                sizes="(min-width: 768px) 33vw, 50vw"
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Galerij afbeelding"
        >
          <button
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={e => { e.stopPropagation(); setLightbox(null); }}
            aria-label="Galerij sluiten"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            className="absolute left-3 md:left-6 flex h-12 w-12 items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={e => { e.stopPropagation(); prevImg(); }}
            aria-label="Vorige afbeelding"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <ResponsiveImage
            src={images[lightbox]?.image_url}
            alt={images[lightbox]?.title}
            className="max-w-[88vw] max-h-[88vh] object-contain rounded-xl shadow-2xl"
            loading="eager"
            decoding="async"
            sizes="88vw"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute right-3 md:right-6 flex h-12 w-12 items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={e => { e.stopPropagation(); nextImg(); }}
            aria-label="Volgende afbeelding"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
          <p className="absolute bottom-5 text-white/50 text-sm">
            {lightbox + 1} / {images.length}
          </p>
        </div>
      )}
    </section>
  );
}
