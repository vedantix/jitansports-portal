import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import ReactMarkdown from 'react-markdown';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTASection from '../components/CTASection';
import SEO, { buildArticleSchema } from '@/components/SEO';
import ResponsiveImage from '@/components/ResponsiveImage';

const formatDate = (date) =>
  new Intl.DateTimeFormat('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base44.entities.Blog.filter({ slug, status: 'gepubliceerd' }).then(data => {
      if (data?.length) setPost(data[0]);
    }).catch(() => {}).finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="w-8 h-8 border-4 border-border border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-bold text-secondary mb-4">Artikel niet gevonden</h1>
        <Link to="/blog"><Button variant="outline" className="gap-2"><ArrowLeft className="w-4 h-4" /> Terug naar Blog</Button></Link>
      </div>
    );
  }

  return (
    <div>
      <SEO
        title={`${post.title} | JitanSports`}
        description={post.meta_description || post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.featured_image}
        type="article"
        jsonLd={buildArticleSchema(post)}
      />
      {/* Header */}
      {post.featured_image && (
        <div className="relative h-[40vh] min-h-[300px]">
          <ResponsiveImage
            src={post.featured_image}
            alt={post.title}
            className="w-full h-full object-cover"
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
        </div>
      )}

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Terug naar Blog
        </Link>

        {post.category && (
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
        )}
        <h1 className="text-3xl md:text-4xl font-display font-bold text-secondary mt-2 mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10">
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {formatDate(post.created_date)}</span>
          {post.author && <span>Door {post.author}</span>}
        </div>

        <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-secondary prose-a:text-primary">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Deel dit artikel:</span>
          <button
            onClick={() => navigator.share?.({ title: post.title, url: window.location.href }).catch(() => {})}
            className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-muted transition-colors"
            aria-label="Artikel delen"
          >
            <Share2 className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </article>

      <CTASection />
    </div>
  );
}
