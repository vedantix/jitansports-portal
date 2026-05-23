import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';
import { useSiteContent } from '@/hooks/useSiteContent';
import { contentLines } from '@/lib/siteContent';

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "JitanSports – Massage omgeving Den Bosch",
  "description": "Professionele massage in omgeving Den Bosch. Deep Tissue Massage en ontspanningsmassage aan huis of op locatie. Direct boeken!",
  "telephone": "+31682272680",
  "address": { "@type": "PostalAddress", "addressLocality": "Den Bosch", "addressCountry": "NL" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "31" }
};

export default function MassageDenBosch() {
  const { content } = useSiteContent();
  const sectionParagraphs = contentLines(content, 'massage_db_section_text');
  const features = contentLines(content, 'massage_db_features');
  const services = [1, 2].map((number) => ({
    name: content[`massage_db_service_${number}_name`],
    desc: content[`massage_db_service_${number}_desc`],
    price: content[`massage_db_service_${number}_price`],
    duration: content[`massage_db_service_${number}_duration`],
  }));
  const faqs = [1, 2, 3, 4].map((number) => ({
    question: content[`massage_db_faq_${number}_question`],
    answer: content[`massage_db_faq_${number}_answer`],
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
          <img src={content.massage_db_hero_image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
            <span className="text-white/60 text-sm ml-2">{content.massage_db_rating_text}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">{content.massage_db_title}</h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {content.massage_db_subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-primary text-secondary font-bold gap-2">{content.massage_db_primary_button} <ArrowRight className="w-4 h-4" /></Button>
            </Link>
            <a href={`tel:${content.phone_href}`}>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">{content.phone_display}</Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-display font-bold text-secondary mb-4">{content.massage_db_section_title}</h2>
            {sectionParagraphs.map((paragraph, index) => (
              <p key={paragraph} className={`text-muted-foreground leading-relaxed ${index === sectionParagraphs.length - 1 ? 'mb-5' : 'mb-4'}`}>
                {paragraph}
              </p>
            ))}
            <div className="space-y-2">
              {features.map(f => (
                <div key={f} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {services.map(s => (
              <div key={s.name} className="bg-muted/40 rounded-2xl p-5 border border-border">
                <h3 className="font-bold text-secondary mb-2">{s.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-primary font-bold">{s.price}</span>
                  <span className="text-muted-foreground">{s.duration}</span>
                </div>
              </div>
            ))}
            <Link to="/booking">
              <Button className="w-full bg-primary text-secondary font-bold gap-2 mt-2">{content.massage_db_booking_button} <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-display font-bold text-secondary mb-6 text-center">{content.massage_db_faq_title}</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection title={content.massage_db_cta_title} subtitle={content.massage_db_cta_subtitle} />
    </div>
  );
}
