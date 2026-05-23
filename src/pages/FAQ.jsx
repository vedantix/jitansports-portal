import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { base44 } from '@/api/base44Client';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import SEO, { ROUTE_SEO, buildFAQSchema } from '@/components/SEO';
import { useSiteContent } from '@/hooks/useSiteContent';

const FALLBACK_FAQS = [
  {
    question: 'Waar geeft JitanSports personal training?',
    answer:
      'JitanSports traint in omgeving Den Bosch. Dat kan outdoor, aan huis of op een locatie die bij jou past.',
    category: 'Personal Training',
  },
  {
    question: 'Is de proefles echt gratis?',
    answer:
      'Ja. De proefles is gratis en vrijblijvend, zodat je kunt kennismaken met de aanpak en kunt voelen of de training bij jou past.',
    category: 'Algemeen',
  },
  {
    question: 'Kan ik mijn afspraak online plannen?',
    answer:
      'Ja. Via de afspraakplanner kies je zelf een dienst, datum en beschikbare tijd. De agenda gebruikt de werktijden die in het adminpaneel zijn ingesteld.',
    category: 'Algemeen',
  },
  {
    question: 'Wat is deep tissue massage?',
    answer:
      'Deep tissue massage is een stevige massagevorm die zich richt op dieper gelegen bindweefsel en spieren. Het wordt vaak ingezet bij nek-, schouder- en rugklachten.',
    category: 'Massage',
  },
  {
    question: 'Kan ik training en massage combineren?',
    answer:
      'Ja. Veel klanten combineren personal training met massage voor betere belastbaarheid, herstel en ontspanning.',
    category: 'Massage',
  },
];

export default function FAQ() {
  const { content } = useSiteContent();
  const [faqs, setFaqs] = useState(FALLBACK_FAQS);
  const [activeCategory, setActiveCategory] = useState('Alle');

  useEffect(() => {
    base44.entities.FAQ.list('order')
      .then((data) => {
        if (data?.length) {
          setFaqs(
            data.map((faq) => ({
              id: faq.id,
              question: faq.question,
              answer: faq.answer,
              category: faq.category || 'Algemeen',
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  const categories = useMemo(
    () => ['Alle', ...new Set(faqs.map((faq) => faq.category).filter(Boolean))],
    [faqs]
  );

  const filteredFaqs = activeCategory === 'Alle'
    ? faqs
    : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <div>
      <SEO
        {...ROUTE_SEO['/faq']}
        title={content.seo_faq_title || ROUTE_SEO['/faq'].title}
        description={content.seo_faq_description || ROUTE_SEO['/faq'].description}
        image={content.seo_image}
        jsonLd={buildFAQSchema(faqs)}
      />
      <section className="bg-secondary px-4 py-16 text-secondary-foreground md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <HelpCircle className="h-6 w-6" />
          </div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">{content.faq_eyebrow}</p>
          <h1 className="font-display text-4xl font-bold md:text-5xl">{content.faq_title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary-foreground/70 md:text-lg">
            {content.faq_subtitle}
          </p>
        </div>
      </section>

      <section className="px-4 py-14 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? 'bg-secondary text-white'
                    : 'border border-border bg-white text-muted-foreground hover:text-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <FAQAccordion items={filteredFaqs} />
          <div className="mt-10 rounded-lg border border-primary/20 bg-primary/10 p-5 text-center">
            <h2 className="mb-2 text-xl font-bold text-secondary">{content.faq_not_found_title}</h2>
            <p className="mb-5 text-sm text-muted-foreground">
              {content.faq_not_found_text}
            </p>
            <Link to="/contact">
              <Button className="gap-2 bg-secondary text-white hover:bg-secondary/90">
                {content.faq_not_found_button} <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
