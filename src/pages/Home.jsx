import { lazy, Suspense, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MessageCircle, Phone, Crown, Dumbbell, MapPin, Star, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { base44 } from '@/api/base44Client';
import { useSiteContent } from '@/hooks/useSiteContent';
import { contentLines, createWhatsAppUrl } from '@/lib/siteContent';
import SEO, { ROUTE_SEO, buildFAQSchema, buildLocalBusinessSchema } from '@/components/SEO';
import ResponsiveImage from '@/components/ResponsiveImage';
import PageHero from '@/components/PageHero';
import { reviewsConfig } from '@/config/reviews';

const GoalCards = lazy(() => import('../components/GoalCards'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'));
const HowItWorks = lazy(() => import('../components/HowItWorks'));
const ForWhom = lazy(() => import('../components/ForWhom'));
const GoogleReviewsCarousel = lazy(() => import('../components/GoogleReviewsCarousel'));
const TrustStats = lazy(() => import('../components/TrustStats'));
const GallerySection = lazy(() => import('../components/GallerySection'));
const FAQAccordion = lazy(() => import('../components/FAQAccordion'));
const CTASection = lazy(() => import('../components/CTASection'));

const LEGACY_HERO_COPY = {
  eyebrow: 'YOUR HEALTH IS OUR GOAL',
  highlight: 'met persoonlijke begeleiding op jouw tempo',
  subtitle: 'Personal training, deep tissue massage en voedingsbegeleiding in Den Bosch, Rosmalen, Vught en omgeving.',
};

const UPDATED_HERO_COPY = {
  eyebrow: 'PERSONAL TRAINING • MASSAGE • VOEDINGSBEGELEIDING',
  highlight: 'met een complete aanpak',
  subtitle:
    'Bij JitanSports combineren we personal training, deep tissue massage en voedingsbegeleiding voor blijvend resultaat. Persoonlijke aandacht. Gericht op jouw doelen. Voor lichaam én geest.',
};

function normalizeHeroCopy(content) {
  return {
    eyebrow:
      !content.hero_eyebrow || content.hero_eyebrow === LEGACY_HERO_COPY.eyebrow
        ? UPDATED_HERO_COPY.eyebrow
        : content.hero_eyebrow,
    title: content.hero_title || 'Word fitter, sterker en pijnvrij',
    highlight:
      !content.hero_highlight || content.hero_highlight === LEGACY_HERO_COPY.highlight
        ? UPDATED_HERO_COPY.highlight
        : content.hero_highlight,
    subtitle:
      !content.hero_subtitle || content.hero_subtitle === LEGACY_HERO_COPY.subtitle
        ? UPDATED_HERO_COPY.subtitle
        : content.hero_subtitle,
  };
}

function renderHeroTitle(title, highlight) {
  const lines = String(title || '')
    .replace(/,\s+/, ',\n')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <>
      {lines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
      {highlight && (
        <span className="mt-3 block text-2xl font-bold leading-tight text-primary md:text-3xl lg:text-4xl">
          {highlight}
        </span>
      )}
    </>
  );
}

function DeferredSection({ children }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

export default function Home() {
  const { content } = useSiteContent();
  const [faqs, setFaqs] = useState([]);
  const hero = normalizeHeroCopy(content);
  const services = [1, 2, 3].map((number) => ({
    title: content[`home_service_${number}_title`],
    desc: content[`home_service_${number}_desc`],
    link: content[`home_service_${number}_link`],
    img: content[`home_service_${number}_image`],
    cta: content[`home_service_${number}_cta`],
  }));
  const uspItems = contentLines(content, 'home_about_usps');
  const fallbackFaqs = [1, 2, 3, 4].map((number) => ({
    question: content[`home_faq_${number}_question`],
    answer: content[`home_faq_${number}_answer`],
  }));
  const visibleFaqs = faqs.length ? faqs : fallbackFaqs;
  const trustBarItems = [
    {
      type: 'rating',
      title: `${reviewsConfig.rating}/5 Google Reviews`,
    },
    {
      icon: Trophy,
      title: '10+ jaar ervaring',
    },
    {
      icon: Dumbbell,
      title: 'Personal Training & Massage',
    },
    {
      icon: MapPin,
      title: 'Den Bosch',
    },
  ];

  useEffect(() => {
    base44.entities.FAQ.list('order')
      .then((data) => {
        if (data?.length) {
          setFaqs(
            data.slice(0, 6).map((faq) => ({
              id: faq.id,
              question: faq.question,
              answer: faq.answer,
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  const whatsappUrl = createWhatsAppUrl(content);

  return (
    <div>
      <SEO
        {...ROUTE_SEO['/']}
        title={content.seo_home_title || ROUTE_SEO['/'].title}
        description={content.seo_home_description || ROUTE_SEO['/'].description}
        image={content.seo_image || content.hero_image}
        jsonLd={[buildLocalBusinessSchema(content), buildFAQSchema(visibleFaqs)].filter(Boolean)}
      />
      <PageHero
        image={content.hero_image || '/images/optimized/hero-desktop-1344.jpg'}
        eyebrow={hero.eyebrow}
        title={renderHeroTitle(hero.title, hero.highlight)}
        subtitle={hero.subtitle}
        contentClassName="max-w-2xl"
        titleClassName="mb-6 text-4xl md:text-5xl lg:text-6xl"
        subtitleClassName="max-w-[62ch] text-base md:text-lg"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/booking">
            <Button size="lg" className="w-full gap-2 bg-primary px-7 text-base font-bold text-secondary hover:bg-primary/90 sm:w-auto">
              {content.primary_cta_text} <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="w-full gap-2 border-white/30 text-base text-white hover:bg-white/10 sm:w-auto">
              <MessageCircle className="h-5 w-5" /> {content.secondary_cta_text}
            </Button>
          </a>
        </div>
        <div className="flex items-center gap-2 mt-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
          ))}
          <span className="text-white font-semibold text-sm">{reviewsConfig.rating}/5</span>
        </div>
      </PageHero>

      <section className="border-b border-border bg-white px-4 py-6">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustBarItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex min-h-20 items-center gap-3 rounded-lg bg-muted/50 px-4 py-3 text-sm font-semibold text-secondary">
                {item.type === 'rating' ? (
                  <div className="flex shrink-0 items-center gap-0.5" aria-label={`${reviewsConfig.rating} van 5 sterren`}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                ) : (
                  <Icon className="h-5 w-5 shrink-0 text-primary" />
                )}
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
        <div className="sr-only">
          {reviewsConfig.reviewProofText}
        </div>
      </section>

      <DeferredSection>
        <GoogleReviewsCarousel />
      </DeferredSection>

      <section className="bg-secondary px-4 py-16 text-white md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Unieke combinatie</p>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Vintage Krachttraining, Deep Tissue Massage en voedingsbegeleiding</h2>
          </div>
          <div className="space-y-4 text-white/76">
            <p>
              JitanSports onderscheidt zich door de unieke combinatie van Vintage Krachttraining, Deep Tissue Massage en voedingsbegeleiding.
            </p>
            <p>
              Daardoor krijg je niet alleen betere resultaten, maar herstel je ook sneller en werk je tegelijkertijd aan een sterk en gezond lichaam.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose – after hero */}
      <DeferredSection>
        <WhyChooseUs />
      </DeferredSection>

      {/* Goal Cards – Priority 1 */}
      <DeferredSection>
        <GoalCards />
      </DeferredSection>

      {/* How it works */}
      <DeferredSection>
        <HowItWorks />
      </DeferredSection>

      {/* Services */}
      <section className="px-4 py-16 md:py-20 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-amber-700 font-semibold uppercase tracking-wider text-sm mb-2">{content.home_services_eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">{content.home_services_title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
              >
                <Link
                  to={service.link}
                  className="group block rounded-2xl overflow-hidden border border-border bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <ResponsiveImage
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-secondary mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.desc}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 group-hover:gap-2 transition-all">
                      {service.cta} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats – Priority 3 */}
      <section className="px-4 py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto rounded-2xl bg-secondary px-6 py-8 text-white md:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-sm font-semibold text-primary">
                <Crown className="h-4 w-4" /> Exclusieve combinatie
              </div>
              <h2 className="mb-3 text-2xl font-display font-bold md:text-3xl">VIP Treatment: 1 uur training + 1 uur massage</h2>
              <p className="max-w-2xl text-white/72">
                Een complete reset aan huis: eerst doelgerichte personal training, daarna massage voor herstel en ontspanning.
              </p>
            </div>
            <Link to="/vip-treatment">
              <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 md:w-auto">
                Bekijk VIP Treatment <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Stats – Priority 3 */}
      <DeferredSection>
        <TrustStats />
      </DeferredSection>

      {/* Mid CTA */}
      <section className="px-4 py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-secondary mb-3">{content.home_mid_cta_title}</h2>
          <p className="text-muted-foreground mb-7 text-base">
            {content.home_mid_cta_text}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/booking">
              <Button size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white font-bold gap-2">
                {content.home_mid_cta_button} <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href={`tel:${content.phone_href}`}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                <Phone className="w-4 h-4" /> {content.phone_display}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* For whom */}
      <DeferredSection>
        <ForWhom />
      </DeferredSection>

      {/* Gallery – Priority 4 */}
      <DeferredSection>
        <GallerySection />
      </DeferredSection>

      {/* About */}
      <section className="px-4 py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[5/4]">
            <ResponsiveImage
              src={content.home_about_image}
              alt="Jitan – Personal Trainer omgeving Den Bosch"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="text-amber-700 font-semibold uppercase tracking-wider text-sm mb-3">{content.home_about_eyebrow}</p>
            <h2 className="text-3xl font-display font-bold text-secondary mb-5">
              {content.home_about_title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {content.home_about_text}
            </p>
            <div className="grid grid-cols-2 gap-2.5 mb-6">
              {uspItems.map(item => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link to="/over-ons">
              <Button variant="outline" className="gap-2">
                {content.home_about_button} <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 md:py-20 lg:py-24 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-secondary">{content.home_faq_title}</h2>
          </div>
          <DeferredSection>
            <FAQAccordion items={visibleFaqs} />
          </DeferredSection>
        </div>
      </section>

      <DeferredSection>
        <CTASection />
      </DeferredSection>
    </div>
  );
}