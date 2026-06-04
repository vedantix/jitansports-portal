import { useMemo, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTASection from '../components/CTASection';
import SEO, { buildArticleSchema } from '@/components/SEO';
import { FALLBACK_POSTS, findFallbackPost } from '@/lib/blogContent';
import ResponsiveImage from '@/components/ResponsiveImage';
import { useSiteContent } from '@/hooks/useSiteContent';

const DEFAULT_BLOG_IMAGE = '/images/optimized/page-training-hero-960.jpg';
const AUTHOR_IMAGE = '/images/optimized/page-about-hero-960.jpg';

const formatDate = (date) =>
  new Intl.DateTimeFormat('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

const slugifyHeading = (value = '') =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const stripMarkdown = (markdown = '') =>
  markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[[^\]]+]\([^)]*\)/g, (match) => match.replace(/^\[|\]\([^)]*\)$/g, ''))
    .replace(/[#>*_`~-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const readingTime = (content = '') => {
  const words = stripMarkdown(content).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
};

const getFeaturedImage = (post) => post?.featuredImage || post?.featured_image || DEFAULT_BLOG_IMAGE;

const getSummary = (post) => post?.summary || post?.excerpt || post?.meta_description || '';

const stripLeadingSummarySection = (content = '') => {
  const trimmed = content.trimStart();
  if (!/^##\s+Samenvatting\b/i.test(trimmed)) return content;

  const nextHeadingIndex = trimmed.search(/\n##\s+(?!Samenvatting\b)/i);
  if (nextHeadingIndex === -1) return '';
  return trimmed.slice(nextHeadingIndex).trimStart();
};

const extractHeadings = (content = '') =>
  [...content.matchAll(/^##\s+(?!#)(.+)$/gm)].map((match) => {
    const text = match[1].replace(/[#*_`]/g, '').trim();
    return { text, id: slugifyHeading(text) };
  });

const normalizeCategory = (category = '') => {
  const value = category.toLowerCase();
  if (value.includes('massage') || value.includes('herstel')) return 'Massage';
  if (value.includes('voeding')) return 'Voeding';
  if (value.includes('training') || value.includes('kracht')) return 'Personal Training';
  if (value.includes('result')) return 'Resultaten';
  return category || 'Lifestyle';
};

const mergeFallbackPosts = (published = []) => {
  const publishedSlugs = new Set(published.map((item) => item.slug));
  return [...published, ...FALLBACK_POSTS.filter((item) => !publishedSlugs.has(item.slug))];
};

export default function BlogPost() {
  const { slug } = useParams();
  const { content: siteContent } = useSiteContent();
  const [post, setPost] = useState(null);
  const [allPosts, setAllPosts] = useState(FALLBACK_POSTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadPost() {
      setLoading(true);
      try {
        const [matchingPosts, publishedPosts] = await Promise.all([
          base44.entities.Blog.filter({ slug, status: 'gepubliceerd' }),
          base44.entities.Blog.filter({ status: 'gepubliceerd' }, '-created_date'),
        ]);
        const mergedPosts = mergeFallbackPosts(publishedPosts || []);
        const currentPost = matchingPosts?.[0] || mergedPosts.find((item) => item.slug === slug) || findFallbackPost(slug);
        if (!mounted) return;
        setPost(currentPost || null);
        setAllPosts(mergedPosts);
      } catch {
        if (!mounted) return;
        setPost(findFallbackPost(slug));
        setAllPosts(FALLBACK_POSTS);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadPost();
    return () => {
      mounted = false;
    };
  }, [slug]);

  const articleContent = useMemo(() => stripLeadingSummarySection(post?.content || ''), [post?.content]);
  const headings = useMemo(() => extractHeadings(articleContent), [articleContent]);
  const featuredImage = getFeaturedImage(post);
  const summary = getSummary(post);
  const minutes = readingTime(post?.content || '');
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    const category = normalizeCategory(post.category);
    const sameCategory = allPosts.filter((item) => item.slug !== post.slug && normalizeCategory(item.category) === category);
    const fallback = allPosts.filter((item) => item.slug !== post.slug && normalizeCategory(item.category) !== category);
    return [...sameCategory, ...fallback].slice(0, 3);
  }, [allPosts, post]);

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
    <div className="bg-white">
      <SEO
        title={`${post.title} | JitanSports`}
        description={post.meta_description || post.excerpt}
        path={`/blog/${post.slug}`}
        image={featuredImage}
        type="article"
        jsonLd={buildArticleSchema({ ...post, featured_image: featuredImage, featuredImage })}
      />

      <header className="border-b border-border bg-muted/20 px-4 py-10 md:py-12">
        <div className="mx-auto max-w-5xl">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary">Blog</Link>
            <span>/</span>
            <span className="text-secondary">{post.title}</span>
          </nav>

          {post.category && (
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-amber-700">
              {normalizeCategory(post.category)}
            </p>
          )}
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight text-secondary md:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-primary" /> {formatDate(post.created_date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" /> {minutes} min leestijd
            </span>
            <span className="inline-flex items-center gap-1.5">
              <UserRound className="h-4 w-4 text-primary" /> {post.author || 'Jitan Sports'}
            </span>
          </div>
        </div>
      </header>

      <section className="px-4 pt-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[20px] bg-muted">
          <ResponsiveImage
            src={featuredImage}
            alt={post.title}
            className="h-[300px] w-full object-cover md:h-[500px]"
            sizes="(min-width: 1024px) 1024px, 100vw"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="px-4 py-10 md:py-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[220px_minmax(0,800px)] lg:items-start">
          <aside className="hidden lg:block">
            <div className="sticky top-32 rounded-2xl border border-border bg-white p-5 shadow-sm">
              <p className="mb-4 text-sm font-bold uppercase tracking-wider text-secondary">Inhoud</p>
              {headings.length ? (
                <nav className="space-y-2" aria-label="Inhoudsopgave">
                  {headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className="block rounded-lg px-3 py-2 text-sm leading-snug text-muted-foreground transition hover:bg-primary/10 hover:text-secondary"
                    >
                      {heading.text}
                    </a>
                  ))}
                </nav>
              ) : (
                <p className="text-sm text-muted-foreground">Dit artikel heeft geen tussenkoppen.</p>
              )}
            </div>
          </aside>

          <article className="min-w-0">
            {summary && (
              <div className="mb-10 rounded-2xl border border-primary/25 bg-primary/10 p-6 md:p-8">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-amber-700">Samenvatting</p>
                <p className="text-lg leading-relaxed text-secondary">{summary}</p>
              </div>
            )}

            {headings.length > 0 && (
              <details className="mb-8 rounded-2xl border border-border bg-muted/30 p-5 lg:hidden">
                <summary className="cursor-pointer text-sm font-bold uppercase tracking-wider text-secondary">Inhoudsopgave</summary>
                <nav className="mt-4 space-y-2" aria-label="Mobiele inhoudsopgave">
                  {headings.map((heading) => (
                    <a key={heading.id} href={`#${heading.id}`} className="block text-sm text-muted-foreground hover:text-primary">
                      {heading.text}
                    </a>
                  ))}
                </nav>
              </details>
            )}

            <div className="max-w-[800px] text-[18px] leading-[1.8] text-foreground">
              <ReactMarkdown
                components={{
                  h2: ({ children, node: _node, ...props }) => {
                    const text = String(children);
                    return (
                      <h2 id={slugifyHeading(text)} className="mt-12 scroll-mt-32 font-display text-3xl font-bold leading-tight text-secondary" {...props}>
                        {children}
                      </h2>
                    );
                  },
                  h3: ({ children, node: _node, ...props }) => (
                    <h3 className="mt-8 scroll-mt-32 text-2xl font-bold leading-tight text-secondary" {...props}>
                      {children}
                    </h3>
                  ),
                  p: ({ children, node: _node, ...props }) => (
                    <p className="mt-5 text-[18px] leading-[1.8] text-muted-foreground" {...props}>
                      {children}
                    </p>
                  ),
                  ul: ({ children, node: _node, ...props }) => <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground" {...props}>{children}</ul>,
                  ol: ({ children, node: _node, ...props }) => <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground" {...props}>{children}</ol>,
                  li: ({ children, node: _node, ...props }) => <li className="leading-[1.8]" {...props}>{children}</li>,
                  a: ({ children, node: _node, ...props }) => <a className="font-semibold text-primary underline-offset-4 hover:underline" {...props}>{children}</a>,
                  strong: ({ children, node: _node, ...props }) => <strong className="font-bold text-secondary" {...props}>{children}</strong>,
                  blockquote: ({ children, node: _node, ...props }) => (
                    <blockquote className="mt-8 border-l-4 border-primary bg-muted/40 py-3 pl-5 italic text-secondary" {...props}>
                      {children}
                    </blockquote>
                  ),
                }}
              >
                {articleContent}
              </ReactMarkdown>
            </div>

            <div className="mt-12 rounded-2xl border border-border bg-muted/30 p-6 md:flex md:items-center md:gap-5">
              <div className="mb-5 h-20 w-20 overflow-hidden rounded-full bg-muted md:mb-0">
                <ResponsiveImage
                  src={siteContent.about_profile_image || AUTHOR_IMAGE}
                  alt="Jitan Sports personal trainer en massage specialist"
                  className="h-full w-full object-cover"
                  sizes="80px"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-amber-700">Auteur</p>
                <h2 className="mt-1 text-2xl font-display font-bold text-secondary">Jitan Sports</h2>
                <p className="mt-1 font-semibold text-secondary/80">Personal Trainer · Massage Specialist</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  Jitan helpt klanten in omgeving Den Bosch fitter, sterker en pijnvrijer worden met personal training,
                  Deep Tissue Massage, sportmassage en voedingsbegeleiding. Zijn aanpak is persoonlijk, praktisch en gericht op blijvend resultaat.
                </p>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4 border-t border-border pt-6">
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
        </div>
      </section>

      <CTASection
        title="Klaar om jouw doelen te bereiken?"
        subtitle="Plan een vrijblijvende sessie en ontdek wat personal training, massage en voedingsbegeleiding voor jou kunnen doen."
        primaryLabel="Plan profielsessie"
        secondaryLabel="WhatsApp direct"
      />

      {relatedPosts.length > 0 && (
        <section className="bg-white px-4 py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-amber-700">Verder lezen</p>
                <h2 className="font-display text-3xl font-bold text-secondary">Gerelateerde blogs</h2>
              </div>
              <Button asChild variant="outline" className="gap-2 self-start md:self-auto">
                <Link to="/blog">Alle blogs <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((item) => (
                <Link key={item.slug} to={`/blog/${item.slug}`} className="group overflow-hidden rounded-2xl border border-border bg-white transition hover:shadow-xl">
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <ResponsiveImage
                      src={getFeaturedImage(item)}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      sizes="(min-width: 768px) 33vw, 100vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-amber-700">{normalizeCategory(item.category)}</p>
                    <h3 className="text-lg font-bold leading-tight text-secondary group-hover:text-primary">{item.title}</h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
