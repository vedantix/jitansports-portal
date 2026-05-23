import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useSiteContent } from '@/hooks/useSiteContent';

const FALLBACK_IMAGES = [
  { id: 1, image_url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=75', title: 'Personal Training' },
  { id: 2, image_url: 'https://images.unsplash.com/photo-1544033527-b192daee1f5b?auto=format&fit=crop&w=600&q=75', title: 'Outdoor Training' },
  { id: 3, image_url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=75', title: 'Krachttraining' },
  { id: 4, image_url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=75', title: 'Fitness' },
  { id: 5, image_url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=75', title: 'Massage' },
  { id: 6, image_url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=75', title: 'Training sessie' },
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
            <div
              key={img.id}
              className="mb-3 break-inside-avoid cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setLightbox(index)}
            >
              <img
                src={img.image_url}
                alt={img.title || 'JitanSports Training'}
                className="w-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <button
            className="absolute left-3 md:left-6 p-3 text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={e => { e.stopPropagation(); prevImg(); }}
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <img
            src={images[lightbox]?.image_url}
            alt={images[lightbox]?.title}
            className="max-w-[88vw] max-h-[88vh] object-contain rounded-xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute right-3 md:right-6 p-3 text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={e => { e.stopPropagation(); nextImg(); }}
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
