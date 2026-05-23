import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Shield } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';
import { useSiteContent } from '@/hooks/useSiteContent';
import { contentLines } from '@/lib/siteContent';

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "JitanSports – Deep Tissue Massage omgeving Den Bosch",
  "description": "Professionele Deep Tissue Massage in omgeving Den Bosch. Effectief bij rugklachten, nek/schouder pijn en sportblessures. Aan huis beschikbaar.",
  "telephone": "+31682272680",
  "address": { "@type": "PostalAddress", "addressLocality": "Den Bosch", "addressCountry": "NL" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "28" }
};

export default function DeepTissueMassageDenBosch() {
  const { content } = useSiteContent();
  const sectionParagraphs = contentLines(content, 'deep_db_section_text');
  const benefits = contentLines(content, 'deep_db_benefits');
  const faqs = [1, 2, 3, 4, 5].map((number) => ({
    question: content[`deep_db_faq_${number}_question`],
    answer: content[`deep_db_faq_${number}_answer`],
  }));

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(SCHEMA);
    document.head.appendChild(script);
    return () => { if (document.head.contains(script)) document.head.removeChild(script); };
  }, []);

  return (
    <div>
      <section className="relative py-20 px-4 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={content.deep_db_hero_image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
            <span className="text-white/60 text-sm ml-2">{content.deep_db_rating_text}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">{content.deep_db_title}</h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {content.deep_db_subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-primary text-secondary font-bold gap-2">{content.deep_db_primary_button} <ArrowRight className="w-4 h-4" /></Button>
            </Link>
            <a href={`tel:${content.phone_href}`}>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">{content.phone_display}</Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-display font-bold text-secondary mb-4">{content.deep_db_section_title}</h2>
            {sectionParagraphs.map((paragraph, index) => (
              <p key={paragraph} className={`text-muted-foreground leading-relaxed ${index === sectionParagraphs.length - 1 ? 'mb-5' : 'mb-4'}`}>
                {paragraph}
              </p>
            ))}
            <h3 className="font-bold text-secondary mb-3">{content.deep_db_benefits_title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {benefits.map(b => (
                <div key={b} className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <h3 className="font-bold text-secondary text-lg mb-2">{content.deep_db_card_title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{content.deep_db_card_text}</p>
              <div className="flex items-center gap-6 mb-5">
                <div>
                  <p className="text-2xl font-bold text-primary">{content.deep_db_price_1}</p>
                  <p className="text-xs text-muted-foreground">{content.deep_db_price_1_label}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">{content.deep_db_price_2}</p>
                  <p className="text-xs text-muted-foreground">{content.deep_db_price_2_label}</p>
                </div>
              </div>
              <Link to="/booking">
                <Button className="w-full bg-primary text-secondary font-bold gap-2">{content.deep_db_card_button} <ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
            <div className="bg-muted/40 rounded-2xl p-5 border border-border">
              <p className="text-sm font-medium text-secondary mb-2">{content.deep_db_combine_title}</p>
              <p className="text-sm text-muted-foreground">
                {content.deep_db_combine_text}
              </p>
              <Link to="/personal-training" className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3 hover:underline">
                {content.deep_db_combine_link_text} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-display font-bold text-secondary mb-6 text-center">{content.deep_db_faq_title}</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection title={content.deep_db_cta_title} subtitle={content.deep_db_cta_subtitle} />
    </div>
  );
}
