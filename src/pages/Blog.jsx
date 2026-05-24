import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { Calendar, ArrowRight } from 'lucide-react';
import { useSiteContent } from '@/hooks/useSiteContent';
import ResponsiveImage from '@/components/ResponsiveImage';
import SEO, { ROUTE_SEO } from '@/components/SEO';
import { FALLBACK_POSTS } from '@/lib/blogContent';

const formatDate = (date) =>
  new Intl.DateTimeFormat('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

export default function Blog() {
  const { content } = useSiteContent();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base44.entities.Blog.filter({ status: 'gepubliceerd' }, '-created_date').then(data => {
      const published = data?.length ? data : [];
      const publishedSlugs = new Set(published.map((post) => post.slug));
      const mergedFallbacks = FALLBACK_POSTS.filter((post) => !publishedSlugs.has(post.slug));
      setPosts([...published, ...mergedFallbacks]);
    }).catch(() => setPosts(FALLBACK_POSTS)).finally(() => setLoading(false));
  }, []);

  const displayPosts = posts.length ? posts : FALLBACK_POSTS;

  return (
    <div>
      <SEO
        {...ROUTE_SEO['/blog']}
        title={content.seo_blog_title || ROUTE_SEO['/blog'].title}
        description={content.seo_blog_description || ROUTE_SEO['/blog'].description}
        image={content.seo_image}
      />
      <section className="py-20 px-4 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <div>
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">{content.blog_eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{content.blog_title}</h1>
            <p className="text-secondary-foreground/70 text-lg">{content.blog_subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-4 border-border border-t-primary rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayPosts.map((post) => (
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
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
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
    </div>
  );
}
