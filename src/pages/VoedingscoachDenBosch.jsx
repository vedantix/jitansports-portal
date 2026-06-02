import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, CheckCircle, Salad, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import SEO, { buildFAQSchema } from '@/components/SEO';
import PageHero from '@/components/PageHero';
import ServiceReviews from '@/components/ServiceReviews';

const FAQS = [
  {
    question: 'Waarmee helpt een voedingscoach?',
    answer:
      'Met een persoonlijk voedingsschema, praktische keuzes, lichaamsanalyse en voortgangsmetingen. Het doel is dat je weet wat werkt voor jouw lichaam.',
  },
  {
    question: 'Is voedingscoaching geschikt voor afvallen?',
    answer:
      'Ja. We richten ons op veilig en duurzaam afvallen, zonder crashdieet. Je leert eten op een manier die je volhoudt.',
  },
  {
    question: 'Kan ik ook aankomen of spiermassa opbouwen?',
    answer:
      'Ja. Voor spieropbouw of gezond aankomen maken we een schema met voldoende energie, eiwitten en structuur rondom je training.',
  },
  {
    question: 'Krijg ik een digitaal weegrapport?',
    answer:
      'Ja. Na de lichaamsanalyse ontvang je een digitaal rapport met onder andere gewicht, vetpercentage, spiermassa en vochtbalans.',
  },
];

export default function VoedingscoachDenBosch() {
  return (
    <div>
      <SEO
        title="Voedingscoach Den Bosch | Voedingsschema & Lichaamsanalyse | JitanSports"
        description="Voedingscoach Den Bosch voor afvallen, aankomen, spieropbouw, voedingsschema's op maat, lichaamsanalyse en digitaal weegrapport."
        path="/voedingscoach-den-bosch"
        image="/images/optimized/page-getfit-hero-960.jpg"
        jsonLd={buildFAQSchema(FAQS)}
      />

      <PageHero
        image="/images/optimized/page-getfit-hero-960.jpg"
        eyebrow="Voedingscoach Den Bosch"
        title="Voedingsschema op maat in Den Bosch"
        subtitle="Voor afvallen, aankomen, spieropbouw en meer energie. Praktische voedingsbegeleiding met lichaamsanalyse en digitaal rapport."
        overlayClassName="bg-gradient-to-r from-secondary/94 via-secondary/78 to-secondary/25"
      >
        <Link to="/booking">
          <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            Plan gratis intake <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      </PageHero>

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="mb-5 text-3xl font-display font-bold text-secondary">Voeding die bij jouw leven past</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>Een goed voedingsschema is niet zo streng mogelijk. Het is zo duidelijk mogelijk. Jij moet weten wat je eet, waarom je het eet en hoe je dit volhoudt in je gewone week.</p>
              <p>Als voedingscoach in Den Bosch help ik je met keuzes die passen bij jouw doel. Wil je vet verliezen? Dan bouwen we aan structuur. Wil je spiermassa opbouwen? Dan zorgen we dat je lichaam genoeg brandstof krijgt.</p>
              <p>We meten je voortgang met lichaamsanalyse, zodat je niet blind stuurt op alleen gewicht.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Salad, title: 'Voedingsschema', text: 'Op maat voor jouw doel, smaak en ritme.' },
              { icon: Scale, title: 'Lichaamsanalyse', text: 'Inzicht in vetpercentage, spiermassa en gewicht.' },
              { icon: BarChart3, title: 'Digitaal rapport', text: 'Duidelijke voortgang om gericht bij te sturen.' },
              { icon: CheckCircle, title: 'Support', text: 'Motivatie en praktische hulp bij moeilijke momenten.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-muted/30 p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-display font-bold text-secondary">Voor welke doelen?</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['Afvallen zonder crashdieet', 'Je leert normale keuzes maken waarmee vetverlies haalbaar blijft.'],
              ['Spieropbouw', 'Je eet genoeg om sterker te worden en beter te herstellen van training.'],
              ['Gezonder leven', 'Meer energie, meer structuur en minder willekeur in je voeding.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-border bg-white p-6">
                <h3 className="mb-2 font-bold text-secondary">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-display font-bold text-secondary">Veelgestelde vragen</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <ServiceReviews title="Resultaten met voedingscoaching" />

      <CTASection title="Klaar om fitter, sterker en energieker te worden?" subtitle="Plan een gratis intake voor voedingscoaching, lichaamsanalyse en een plan dat bij jouw lichaam past." />
    </div>
  );
}
