import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Shield } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';
import { useSiteContent } from '@/hooks/useSiteContent';
import { contentLines } from '@/lib/siteContent';
import SEO, { ROUTE_SEO, buildFAQSchema, buildLocalBusinessSchema, buildServiceSchema } from '@/components/SEO';
import PageHero from '@/components/PageHero';
import ServiceReviews from '@/components/ServiceReviews';
import SeoSummary from '@/components/SeoSummary';

export default function DeepTissueMassageDenBosch() {
  const { content } = useSiteContent();
  const sectionParagraphs = contentLines(content, 'deep_db_section_text');
  const benefits = contentLines(content, 'deep_db_benefits');
  const faqs = [1, 2, 3, 4, 5].map((number) => ({
    question: content[`deep_db_faq_${number}_question`],
    answer: content[`deep_db_faq_${number}_answer`],
  }));

  return (
    <div>
      <SEO
        {...ROUTE_SEO['/deep-tissue-massage-den-bosch']}
        title={ROUTE_SEO['/deep-tissue-massage-den-bosch'].title}
        description={content.seo_deep_tissue_den_bosch_description || ROUTE_SEO['/deep-tissue-massage-den-bosch'].description}
        image={content.seo_image}
        jsonLd={[
          buildLocalBusinessSchema(content),
          buildServiceSchema({
            name: 'Deep Tissue Massage Den Bosch',
            serviceType: 'Deep Tissue Massage',
            description:
              'Deep Tissue Massage in Den Bosch voor rugklachten, nek- en schouderpijn, spierherstel, vastzittend bindweefsel en sportblessures.',
            path: '/deep-tissue-massage-den-bosch',
            image: content.deep_db_hero_image,
          }),
          buildFAQSchema(faqs),
        ]}
      />
      <PageHero
        image={content.deep_db_hero_image}
        title="Deep Tissue Massage in Den Bosch"
        subtitle={content.deep_db_subtitle}
        align="center"
        overlayClassName="bg-secondary/85"
        titleClassName="md:text-5xl lg:text-5xl"
        badge={(
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
            <span className="text-white/60 text-sm ml-2">{content.deep_db_rating_text}</span>
          </div>
        )}
      >
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/booking">
            <Button size="lg" className="gap-2 bg-primary font-bold text-secondary">{content.deep_db_primary_button} <ArrowRight className="w-4 h-4" /></Button>
          </Link>
          <a href={`tel:${content.phone_href}`}>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">{content.phone_display}</Button>
          </a>
        </div>
      </PageHero>

      <section className="px-4 py-16 md:py-20 lg:py-24">
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

      <section className="bg-white px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-muted/30 p-7">
            <h2 className="mb-4 text-2xl font-display font-bold text-secondary">Wanneer toepassen?</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Deep Tissue Massage is geschikt wanneer spieren en bindweefsel langdurig vastzitten. Denk aan rugklachten, nek- en schouderspanning, stijve heupen, hoofdpijn door spierspanning, stressklachten of herstel na intensieve training.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-white p-7 shadow-sm">
            <h2 className="mb-4 text-2xl font-display font-bold text-secondary">Herstel van blessures</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Bij sportblessures en overbelasting kan Deep Tissue Massage helpen om spierspanning te verminderen, doorbloeding te verbeteren en herstel te ondersteunen. Jitan combineert massagekennis met trainingservaring, zodat behandeling en belastbaarheid logisch op elkaar aansluiten.
            </p>
          </article>
        </div>
      </section>

      <SeoSummary>
        <p>
          Jitan Sports biedt Deep Tissue Massage in Den Bosch voor mensen met rug-, nek- en schouderklachten, sportblessures en opgebouwde spierspanning. De behandeling richt zich op diepe spierlagen en bindweefsel en ondersteunt herstel, betere doorbloeding en vrijer bewegen.
        </p>
      </SeoSummary>

      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-display font-bold text-secondary mb-6 text-center">{content.deep_db_faq_title}</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <ServiceReviews title="Ervaringen met Deep Tissue Massage" />

      <CTASection title="Klaar om fitter, sterker en energieker te worden?" subtitle={content.deep_db_cta_subtitle} />
    </div>
  );
}
