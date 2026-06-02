import { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { Calendar, ArrowRight } from 'lucide-react';
import { useSiteContent } from '@/hooks/useSiteContent';
import ResponsiveImage from '@/components/ResponsiveImage';
import SEO, { ROUTE_SEO } from '@/components/SEO';
import { FALLBACK_POSTS } from '@/lib/blogContent';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';

const formatDate = (date) =>
  new Intl.DateTimeFormat('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

const BLOG_CATEGORIES = ['Alle', 'Personal Training', 'Massage', 'Voeding', 'Lifestyle', 'Resultaten'];

const normalizeCategory = (category = '') => {
  const value = category.toLowerCase();
  if (value.includes('massage') || value.includes('herstel')) return 'Massage';
  if (value.includes('voeding')) return 'Voeding';
  if (value.includes('result')) return 'Resultaten';
  if (value.includes('training')) return 'Personal Training';
  if (value.includes('40') || value.includes('lifestyle')) return 'Lifestyle';
  return category || 'Lifestyle';
};

export default function Blog() {
  const { content } = useSiteContent();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Alle');

  useEffect(() => {
    base44.entities.Blog.filter({ status: 'gepubliceerd' }, '-created_date').then(data => {
      const published = data?.length ? data : [];
      const publishedSlugs = new Set(published.map((post) => post.slug));
      const mergedFallbacks = FALLBACK_POSTS.filter((post) => !publishedSlugs.has(post.slug));
      setPosts([...published, ...mergedFallbacks]);
    }).catch(() => setPosts(FALLBACK_POSTS)).finally(() => setLoading(false));
  }, []);

  const displayPosts = posts.length ? posts : FALLBACK_POSTS;
  const filteredPosts = useMemo(
    () => activeCategory === 'Alle'
      ? displayPosts
      : displayPosts.filter((post) => normalizeCategory(post.category) === activeCategory),
    [activeCategory, displayPosts]
  );

  return (
    <div>
      <SEO
        {...ROUTE_SEO['/blog']}
        title={content.seo_blog_title || ROUTE_SEO['/blog'].title}
        description={content.seo_blog_description || ROUTE_SEO['/blog'].description}
        image={content.seo_image}
      />
      <PageHero
        align="center"
        eyebrow={content.blog_eyebrow}
        title={content.blog_title}
        subtitle={content.blog_subtitle}
        titleClassName="md:text-5xl lg:text-5xl"
      />

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {BLOG_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? 'bg-secondary text-white'
                    : 'border border-border bg-white text-muted-foreground hover:text-secondary'
                }`}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-4 border-border border-t-primary rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div key={post.id}>
                  <Link to={`/blog/${post.slug}`} className="group block rounded-2xl overflow-hidden bg-white border border-border/50 hover:shadow-xl transition-all duration-300">
                    <div className="aspect-[3/2] overflow-hidden">
                      <ResponsiveImage
                        src={post.featured_image || '/images/optimized/page-training-hero-960.jpg'}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                    <div className="p-6">
                      {post.category && (
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">{normalizeCategory(post.category)}</span>
                      )}
                      <h2 className="text-lg font-bold text-secondary mt-2 mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {formatDate(post.created_date)}
                        </span>
                        <span className="text-primary text-sm font-medium flex items-center gap-1">
                          Lees meer <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection title="Klaar om fitter, sterker en energieker te worden?" subtitle="Plan vandaag nog jouw gratis proefles en zet de eerste stap." />
    </div>
  );
}
