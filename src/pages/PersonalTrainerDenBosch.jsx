import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Star, MapPin } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';
import { useSiteContent } from '@/hooks/useSiteContent';
import { contentLines } from '@/lib/siteContent';

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "JitanSports – Personal Trainer omgeving Den Bosch",
  "description": "Personal trainer in omgeving Den Bosch voor gewichtsverlies, krachttraining en voedingsbegeleiding. 10+ jaar ervaring. Gratis proefles.",
  "url": "https://jitan-sports.nl/personal-trainer-den-bosch",
  "telephone": "+31682272680",
  "address": { "@type": "PostalAddress", "addressLocality": "Den Bosch", "addressCountry": "NL" },
  "priceRange": "€€",
  "openingHours": ["Mo-Fr 07:00-20:00", "Sa 09:00-17:00"],
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "47" }
};

export default function PersonalTrainerDenBosch() {
  const { content } = useSiteContent();
  const sectionParagraphs = contentLines(content, 'trainer_db_section_text');
  const features = contentLines(content, 'trainer_db_features');
  const areas = contentLines(content, 'trainer_db_areas');
  const services = [1, 2, 3, 4].map((number) => ({
    name: content[`trainer_db_service_${number}_name`],
    desc: content[`trainer_db_service_${number}_desc`],
  }));
  const faqs = [1, 2, 3, 4].map((number) => ({
    question: content[`trainer_db_faq_${number}_question`],
    answer: content[`trainer_db_faq_${number}_answer`],
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
          <img src={content.trainer_db_hero_image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
            <span className="text-white/60 text-sm ml-2">{content.trainer_db_rating_text}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">{content.trainer_db_title}</h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            {content.trainer_db_subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-primary text-secondary font-bold gap-2">
                {content.trainer_db_primary_button} <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href={`tel:${content.phone_href}`}>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                {content.phone_display}
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-display font-bold text-secondary mb-4">{content.trainer_db_section_title}</h2>
            {sectionParagraphs.map((paragraph, index) => (
              <p key={paragraph} className={`text-muted-foreground leading-relaxed ${index === sectionParagraphs.length - 1 ? 'mb-5' : 'mb-4'}`}>
                {paragraph}
              </p>
            ))}
            <div className="space-y-2">
              {features.map(f => (
                <div key={f} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-muted/40 rounded-2xl p-6 border border-border">
            <h3 className="font-bold text-secondary text-lg mb-5">{content.trainer_db_services_title}</h3>
            {services.map(s => (
              <div key={s.name} className="mb-4 pb-4 border-b border-border last:border-0 last:mb-0 last:pb-0">
                <p className="font-semibold text-secondary text-sm">{s.name}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{s.desc}</p>
              </div>
            ))}
            <Link to="/booking" className="block mt-5">
              <Button className="w-full bg-primary text-secondary font-bold gap-2">
                {content.trainer_db_services_button} <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-display font-bold text-secondary mb-6">{content.trainer_db_areas_title}</h2>
          <div className="flex flex-wrap justify-center gap-2.5">
            {areas.map(area => (
              <span key={area} className="flex items-center gap-1.5 bg-white border border-border px-3 py-1.5 rounded-full text-sm text-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary" /> {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-secondary mb-8 text-center">
            {content.trainer_db_faq_title}
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        title={content.trainer_db_cta_title}
        subtitle={content.trainer_db_cta_subtitle}
      />
    </div>
  );
}
