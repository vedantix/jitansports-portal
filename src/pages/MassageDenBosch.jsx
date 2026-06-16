import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';
import { useSiteContent } from '@/hooks/useSiteContent';
import { contentLines } from '@/lib/siteContent';
import SEO, { ROUTE_SEO, buildFAQSchema, buildLocalBusinessSchema, buildServiceSchema } from '@/components/SEO';
import PageHero from '@/components/PageHero';

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

  return (
    <div>
      <SEO
        {...ROUTE_SEO['/massage-den-bosch']}
        title={content.seo_massage_den_bosch_title || ROUTE_SEO['/massage-den-bosch'].title}
        description={content.seo_massage_den_bosch_description || ROUTE_SEO['/massage-den-bosch'].description}
        image={content.seo_image}
        jsonLd={[
          buildLocalBusinessSchema(content),
          buildServiceSchema({
            name: 'Massage Den Bosch',
            serviceType: 'Deep Tissue Massage en Ontspanningsmassage',
            description:
              'Massage in Den Bosch aan huis of op locatie: Deep Tissue Massage, sportmassage en ontspanningsmassage voor herstel en ontspanning.',
            path: '/massage-den-bosch',
            image: content.massage_db_hero_image,
          }),
          buildFAQSchema(faqs),
        ]}
      />
      <PageHero
        image={content.massage_db_hero_image}
        title={content.massage_db_title}
        subtitle={content.massage_db_subtitle}
        align="center"
        overlayClassName="bg-secondary/85"
        titleClassName="md:text-5xl lg:text-5xl"
        badge={(
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
            <span className="text-white/60 text-sm ml-2">{content.massage_db_rating_text}</span>
          </div>
        )}
      >
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/booking">
            <Button size="lg" className="gap-2 bg-primary font-bold text-secondary">{content.massage_db_primary_button} <ArrowRight className="w-4 h-4" /></Button>
          </Link>
          <a href={`tel:${content.phone_href}`}>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">{content.phone_display}</Button>
          </a>
        </div>
      </PageHero>

      <section className="px-4 py-16 md:py-20 lg:py-24">
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
      <CTASection title="Klaar om fitter, sterker en energieker te worden?" subtitle={content.massage_db_cta_subtitle} />
    </div>
  );
}
