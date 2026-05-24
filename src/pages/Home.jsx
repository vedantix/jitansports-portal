import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, CheckCircle, Phone, Crown, CalendarCheck, Users, Star, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { base44 } from '@/api/base44Client';
import { useSiteContent } from '@/hooks/useSiteContent';
import { contentLines, createWhatsAppUrl } from '@/lib/siteContent';
import SEO, { ROUTE_SEO, buildFAQSchema, buildLocalBusinessSchema } from '@/components/SEO';
import ResponsiveImage from '@/components/ResponsiveImage';
import GoalCards from '../components/GoalCards';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import ForWhom from '../components/ForWhom';
import ReviewsSection from '../components/ReviewsSection';
import TrustStats from '../components/TrustStats';
import GallerySection from '../components/GallerySection';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';

export default function Home() {
  const { content } = useSiteContent();
  const [faqs, setFaqs] = useState([]);
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

  useEffect(() => {
    const shell = document.getElementById('hero-bg-shell');
    const image = shell?.querySelector('img');
    if (!image || !content.hero_image || content.hero_image.startsWith('/images/optimized/hero-')) return;

    shell.querySelectorAll('source').forEach((source) => source.remove());
    image.removeAttribute('srcset');
    image.removeAttribute('sizes');
    image.src = content.hero_image;
  }, [content.hero_image]);

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
      {/* Hero */}
      <section className="relative flex min-h-[88svh] md:min-h-[92vh] items-stretch overflow-hidden bg-secondary">
        {/* Full-bleed background image */}
        <div id="hero-bg-shell" className="absolute inset-0">
          <img
            src={content.hero_image || '/images/optimized/hero-desktop-1344.jpg'}
            alt="Personal trainer JitanSports Den Bosch"
            className="w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          {/* Gradient: strong dark left, fades to transparent right */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/25 md:from-secondary/92 md:via-secondary/70 md:to-secondary/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-20 w-full">
          <div className="max-w-[560px]">
            {/* Eyebrow */}
            <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-5">
              Personal Training&nbsp;•&nbsp;Deep Tissue Massage&nbsp;•&nbsp;Voedingsbegeleiding
            </p>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold text-white leading-[1.08] mb-2">
              Word fitter,<br />sterker en pijnvrij
            </h1>

            {/* Italic accent line */}
            <p className="text-primary text-2xl sm:text-3xl lg:text-4xl font-display italic font-semibold mb-6 leading-snug">
              met een complete aanpak
            </p>

            {/* Body */}
            <p className="text-white/75 text-base leading-relaxed mb-8 max-w-[460px]">
              Bij JitanSports combinenen we personal training, deep tissue massage en voedingsbegeleiding voor blijvend resultaat. Persoonlijke aandacht. Gericht op jouw doelen. Voor lichaam én geest.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link to="/booking">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-secondary font-bold px-7 text-base gap-2">
                  <CalendarCheck className="w-5 h-5" /> Plan gratis proefles
                </Button>
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/25 text-white hover:bg-white/10 gap-2 text-base">
                  <MessageCircle className="w-5 h-5" /> WhatsApp direct
                </Button>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-5">
              {[
                { icon: Users, label: '100+', sub: 'Tevreden klanten' },
                { icon: Star, label: 'Persoonlijke', sub: 'begeleiding' },
                { icon: Activity, label: 'Training, voeding', sub: 'en herstel in balans' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm leading-none mb-0.5">{label}</p>
                    <p className="text-white/55 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose – after hero */}
      <WhyChooseUs />

      {/* Goal Cards – Priority 1 */}
      <GoalCards />

      {/* How it works */}
      <HowItWorks />

      {/* Services */}
      <section className="py-16 px-4 bg-muted/30">
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
                  <div className="h-52 overflow-hidden">
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
      <section className="py-14 px-4 bg-white">
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
      <TrustStats />

      {/* Reviews – Priority 2 */}
      <ReviewsSection />

      {/* Mid CTA */}
      <section className="py-14 px-4 bg-white">
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
      <ForWhom />

      {/* Gallery – Priority 4 */}
      <GallerySection />

      {/* About */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden h-[420px]">
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
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-secondary">{content.home_faq_title}</h2>
          </div>
          <FAQAccordion items={visibleFaqs} />
        </div>
      </section>

      <CTASection />
    </div>
  );
}