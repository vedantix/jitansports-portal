import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle, MapPin } from 'lucide-react';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import PageHero from '@/components/PageHero';
import SEO, {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildLocalBusinessSchema,
  buildServiceSchema,
  buildWebPageSchema,
} from '@/components/SEO';
import SeoSummary from '@/components/SeoSummary';
import { Button } from '@/components/ui/button';
import { TOPIC_AREAS, topicPageMap } from '@/config/topicClusters';
import { useSiteContent } from '@/hooks/useSiteContent';
import { createWhatsAppUrl } from '@/lib/siteContent';
import PageNotFound from '@/lib/PageNotFound';

const uniqueLinks = (links = []) => {
  const seen = new Set();
  return links.filter(([, path]) => {
    if (seen.has(path)) return false;
    seen.add(path);
    return true;
  });
};

export default function TopicLandingPage() {
  const { pathname } = useLocation();
  const { content } = useSiteContent();
  const page = topicPageMap[pathname];
  const whatsappUrl = createWhatsAppUrl(content);

  if (!page) return <PageNotFound />;

  const links = uniqueLinks(page.relatedLinks);

  return (
    <div>
      <SEO
        title={page.seoTitle}
        description={page.description}
        path={page.path}
        image={page.image}
        jsonLd={[
          buildWebPageSchema({
            title: page.seoTitle,
            description: page.description,
            path: page.path,
            image: page.image,
          }),
          buildServiceSchema({
            name: page.title,
            description: page.description,
            path: page.path,
            serviceType: page.serviceType,
            image: page.image,
          }),
          buildFAQSchema(page.faqs),
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: page.pillar, path: page.pillar === 'Massage & Herstel' ? '/massage' : page.pillar === 'Voeding & Leefstijl' ? '/voedingsbegeleiding' : '/personal-training' },
            { name: page.title, path: page.path },
          ]),
          buildLocalBusinessSchema(content),
        ].filter(Boolean)}
      />

      <PageHero
        image={page.image}
        imageAlt={`${page.title} bij Jitan Sports`}
        eyebrow={page.pillar}
        title={page.h1}
        subtitle={page.hero}
        contentClassName="max-w-xl"
        primaryCta={{ label: 'Plan profielsessie', href: '/booking' }}
        secondaryCta={{ label: 'WhatsApp direct', href: whatsappUrl, external: true, icon: 'whatsapp' }}
      />

      <section className="bg-primary">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 text-center md:grid-cols-4">
          {['Personal Training', 'Deep Tissue Massage', 'Sportmassage', 'Voedingsbegeleiding'].map((item) => (
            <div key={item} className="rounded-lg bg-white/10 px-3 py-4 text-primary-foreground">
              <p className="text-sm font-bold">{item}</p>
              <p className="mt-1 text-xs text-primary-foreground/70">Jitan Sports</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-700">Waarom dit belangrijk is</p>
            <h2 className="mb-5 text-3xl font-display font-bold text-secondary">{page.title} met persoonlijke begeleiding</h2>
            <p className="leading-relaxed text-muted-foreground">{page.intro}</p>
            <div className="mt-8 rounded-xl border border-border bg-muted/30 p-6">
              <div className="mb-3 flex items-center gap-2 text-secondary">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-bold">Werkgebied</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Jitan Sports helpt klanten in {TOPIC_AREAS.join(', ')} en omliggende plaatsen. Training en massage kunnen aan huis of outdoor worden afgestemd op jouw situatie.
              </p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {page.sections.map((section) => (
              <article key={section.title} className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <h2 className="mb-3 text-xl font-bold text-secondary">{section.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{section.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-700">Voordelen</p>
            <h2 className="text-3xl font-display font-bold text-secondary">Wat deze aanpak oplevert</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 rounded-xl bg-white p-5">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="font-medium text-secondary">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-700">Werkwijze</p>
          <h2 className="mb-8 text-3xl font-display font-bold text-secondary">Hoe werkt het?</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {page.process.map((step, index) => (
              <article key={step} className="rounded-xl border border-border bg-white p-6">
                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SeoSummary>
        {page.summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </SeoSummary>

      <section className="bg-white px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-700">Veelgestelde vragen</p>
          <h2 className="mb-6 text-3xl font-display font-bold text-secondary">FAQ over {page.title.toLowerCase()}</h2>
          <FAQAccordion items={page.faqs} />
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-700">Verder lezen</p>
            <h2 className="text-3xl font-display font-bold text-secondary">Verdiep je in de complete aanpak</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {links.map(([label, path]) => (
              <Link
                key={path}
                to={path}
                className="group flex min-h-14 items-center justify-between rounded-xl border border-border bg-white px-5 py-4 text-sm font-semibold text-secondary transition hover:border-primary hover:text-primary"
              >
                {label}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline" className="gap-2">
              <Link to="/blog">
                Lees alle blogs <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Plan een gratis intake"
        subtitle="Vertel waar je nu staat. Dan kijkt Jitan met je mee welke stap voor jou logisch, haalbaar en effectief is."
        primaryLabel="Plan profielsessie"
        secondaryLabel="WhatsApp direct"
        showContact
      />
    </div>
  );
}
