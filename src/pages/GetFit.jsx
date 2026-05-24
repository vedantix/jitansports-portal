import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Dumbbell, Salad, Heart, Brain, Phone, Scale, BookOpen, Sparkles } from 'lucide-react';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import { useSiteContent } from '@/hooks/useSiteContent';
import { contentLines } from '@/lib/siteContent';
import ResponsiveImage from '@/components/ResponsiveImage';
import SEO, { ROUTE_SEO } from '@/components/SEO';

const INCLUSION_ICONS = [Dumbbell, Scale, Salad, BookOpen, Heart, Brain, Phone, Sparkles];

export default function GetFit() {
  const { content } = useSiteContent();
  const inclusions = INCLUSION_ICONS.map((icon, index) => {
    const number = index + 1;
    return {
      icon,
      title: content[`getfit_item_${number}_title`],
      desc: content[`getfit_item_${number}_text`],
    };
  });
  const whyItems = contentLines(content, 'getfit_why_benefits');
  const faqs = [1, 2, 3, 4].map((number) => ({
    question: content[`getfit_faq_${number}_question`],
    answer: content[`getfit_faq_${number}_answer`],
  }));

  return (
    <div>
      <SEO
        {...ROUTE_SEO['/get-fit']}
        title={content.seo_get_fit_title || ROUTE_SEO['/get-fit'].title}
        description={content.seo_get_fit_description || ROUTE_SEO['/get-fit'].description}
        image={content.seo_image}
      />
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ResponsiveImage src={content.getfit_hero_image} alt="Get Fit Programma" className="w-full h-full object-cover" sizes="100vw" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 to-secondary/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">{content.getfit_hero_eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              {content.getfit_hero_title}
            </h1>
            <p className="text-white/80 text-lg">{content.getfit_hero_subtitle}</p>
          </div>
        </div>
      </section>

      {/* Price banner */}
      <section className="py-6 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">{content.getfit_banner_title}</p>
            <p className="text-sm opacity-80">{content.getfit_banner_subtitle}</p>
          </div>
          <Link to="/booking"><Button variant="secondary" className="gap-2">{content.getfit_banner_button} <ArrowRight className="w-4 h-4" /></Button></Link>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">{content.getfit_included_title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{content.getfit_included_subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inclusions.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white border border-border/50 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-secondary mb-2 text-sm">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-secondary mb-6">{content.getfit_why_title}</h2>
          <div className="space-y-4 text-left">
            {whyItems.map(t => (
              <div key={t} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-secondary mb-8 text-center">{content.getfit_faq_title}</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection dark title={content.getfit_cta_title} subtitle={content.getfit_cta_subtitle} />
    </div>
  );
}
