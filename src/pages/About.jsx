import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Award, Heart, Target, Zap, Star } from 'lucide-react';
import CTASection from '../components/CTASection';
import SEO, { buildLocalBusinessSchema, buildPersonSchema, buildWebPageSchema } from '@/components/SEO';
import ResponsiveImage from '@/components/ResponsiveImage';
import PageHero from '@/components/PageHero';

const HERO_IMG = '/images/optimized/page-about-hero-960.jpg';
const PROFILE_IMG = '/images/optimized/page-about-hero-960.jpg';
const ACTION_IMG = '/images/optimized/page-training-hero-960.jpg';
const MASSAGE_IMG = '/images/optimized/page-massage-hero-960.jpg';

const VALUES = [
  { icon: Heart, title: 'Luisterend oor', text: 'Ik wil eerst weten wie jij bent. Je doel, je situatie, je twijfels en je ritme bepalen hoe we starten.' },
  { icon: Target, title: 'Stap voor stap', text: 'Niets moet in één keer. We bouwen rustig op, houden het haalbaar en sturen bij waar nodig.' },
  { icon: Award, title: 'Vintage krachttraining', text: 'Duidelijke basisoefeningen, goede techniek en progressie. Geen trucjes, wel sterker worden.' },
  { icon: Zap, title: 'Training en Deep Tissue', text: 'JitanSports onderscheidt zich door de combinatie van Vintage Krachttraining en Deep Tissue Massage.' },
];

const CERTS = [
  'Gecertificeerd Personal Trainer', 'Vintage Krachttraining',
  'Deep Tissue Massage Specialist', 'Voedings- en Dieetleer',
  'Sportmassage', 'EHBO Gecertificeerd',
  'Zwangerschapstraining', 'Revalidatietraining',
];

const STATS = [
  { value: '10+', label: 'Jaar ervaring' },
  { value: '200+', label: 'Klanten begeleid' },
  { value: '5.0', label: 'Google rating' },
  { value: '100%', label: 'Persoonlijke aanpak' },
];

const SUCCESS_STORIES = [
  {
    situation: 'Een ondernemer uit Den Bosch had weinig energie, stijve schouders en geen vast sportritme.',
    approach: 'We combineerden twee korte krachttrainingen per week met voedingsafspraken voor drukke werkdagen en Deep Tissue Massage voor nek en schouders.',
    result: 'Na twaalf weken was zijn energie stabieler, voelde zijn houding sterker en was trainen weer een vast onderdeel van zijn week.',
    quote: 'Jitan maakte het praktisch. Geen groot verhaal, maar precies wat ik nodig had om weer ritme te krijgen.',
  },
  {
    situation: 'Een klant uit Rosmalen wilde afvallen, maar viel steeds terug na strenge dieten.',
    approach: 'We startten met lichaamsanalyse, krachttraining, eiwitrijke maaltijden en kleine gewoontes die binnen het gezin haalbaar bleven.',
    result: 'Het gewicht ging omlaag, kracht nam toe en de klant kreeg vooral rust omdat eten niet meer voelde als alles-of-niets.',
    quote: 'Voor het eerst voelde afvallen niet als straf. Ik begreep eindelijk wat mijn lichaam nodig had.',
  },
  {
    situation: 'Een sportieve klant uit Vught liep telkens vast door rug- en heupspanning na intensieve trainingen.',
    approach: 'We gebruikten sportmassage, Deep Tissue Massage en een aangepaste trainingsopbouw met meer aandacht voor herstel.',
    result: 'De belastbaarheid nam toe en de klant kon weer trainen zonder steeds terugkerende spanning.',
    quote: 'Jitan keek verder dan de pijnplek. Daardoor bleef het resultaat ook na de massage hangen.',
  },
];

export default function About() {
  return (
    <div>
      <SEO
        title="Over JitanSports – Personal Trainer Den Bosch | Jitan's verhaal"
        description="Leer Jitan kennen: personal trainer, massage therapeut en voedingscoach in omgeving Den Bosch. 10+ jaar ervaring, passie voor sport en gezondheid. Lees zijn verhaal."
        path="/over-ons"
        image={HERO_IMG}
        jsonLd={[
          buildWebPageSchema({
            title: "Over JitanSports – Personal Trainer Den Bosch | Jitan's verhaal",
            description:
              'Leer Jitan kennen: personal trainer, massage therapeut en voedingscoach in omgeving Den Bosch. 10+ jaar ervaring, passie voor sport en gezondheid. Lees zijn verhaal.',
            path: '/over-ons',
            image: HERO_IMG,
          }),
          buildPersonSchema(),
          buildLocalBusinessSchema(),
        ]}
      />

      <PageHero
        image={HERO_IMG}
        eyebrow="Over JitanSports"
        title="Ontmoet Jitan – jouw persoonlijke coach"
        subtitle="Persoonlijke begeleiding voor wie sterker, fitter en vrijer wil bewegen. Met vintage krachttraining, voeding en Deep Tissue Massage."
        contentClassName="max-w-xl"
        overlayClassName="bg-gradient-to-r from-secondary/90 to-secondary/40"
      />

      {/* Stats bar */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {STATS.map(stat => (
            <div key={stat.label}>
              <p className="text-2xl md:text-3xl font-bold text-primary-foreground">{stat.value}</p>
              <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main story */}
      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-bold text-secondary">JitanSports is ontstaan vanuit ervaring</h2>
            <p>Ervaring in het er na je 40e nog steeds goed uit kunnen zien én jezelf goed voelen. Je kunt nog steeds ongelofelijke prestaties behalen en jezelf energieker, vitaler, gelukkiger en zelfverzekerder voelen.</p>
            <p>Ik weet hoe groot de stap kan voelen als je wilt veranderen. Je wilt fitter worden, gezonder leven of eindelijk van die terugkerende klachten af. Maar je wilt ook iemand naast je die luistert, meedenkt en je niet in een standaard schema duwt.</p>
            <p>JitanSports onderscheidt zich door de combinatie van Vintage Krachttraining en Deep Tissue Massage. Dat is geen losse verzameling diensten, maar één aanpak: sterker worden, beter herstellen en stap voor stap bouwen aan een gezonde lifestyle.</p>
            <p>Met jarenlange ervaring en opleidingen in fitness, personal training, voeding en massage help ik je verder. Niet door te schreeuwen vanaf de zijlijn, maar door rustig, duidelijk en persoonlijk met je mee te lopen.</p>
            <h3 className="text-xl font-bold text-secondary mt-6">Jouw guide naar een gezonde lifestyle</h3>
            <p>Met een luisterend oor en empathie voor jouw doel en situatie gaan we voor resultaat. Stap voor stap, op jouw eigen tempo. Niets moet. We gaan ervoor.</p>
            <p>Ik train aan huis en outdoor in omgeving Den Bosch, zodat de drempel laag blijft en jij kunt starten op een plek waar jij je prettig voelt.</p>
          </div>

          <div className="space-y-6">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[5/4]">
              <ResponsiveImage src={PROFILE_IMG} alt="JitanSports personal training en massage" className="w-full h-full object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className="p-6 rounded-2xl bg-secondary text-white">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Mijn certificeringen</p>
              <div className="grid grid-cols-2 gap-2">
                {CERTS.map(cert => (
                  <div key={cert} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Massage expertise */}
      <section className="px-4 py-16 md:py-20 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 aspect-[4/3] overflow-hidden rounded-2xl lg:order-1 lg:aspect-[16/10]">
            <ResponsiveImage src={MASSAGE_IMG} alt="Deep Tissue Massage Den Bosch" className="w-full h-full object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-amber-700 font-semibold uppercase tracking-wider text-sm mb-3">Massage en Herstel</p>
            <h2 className="text-3xl font-display font-bold text-secondary mb-5">Specialist in Deep Tissue Massage</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Deep Tissue Massage is voor mij een volwaardig onderdeel van begeleiding. Vastzittend bindweefsel, blokkades en chronische spanning kunnen je training en dagelijks leven flink beperken.</p>
              <p>Door massage en krachttraining te combineren, werken we niet alleen aan verlichting, maar ook aan belastbaarheid. Je lichaam moet niet alleen losser voelen, het moet ook sterker worden.</p>
              <p>Ik kom aan huis met een professionele massagetafel, zodat ontspanning na de behandeling niet meteen wordt onderbroken door reistijd.</p>
            </div>
            <Link to="/massage" className="mt-6 inline-block">
              <Button variant="outline" className="gap-2">Bekijk massagediensten <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Voeding */}
      <section className="px-4 py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber-700 font-semibold uppercase tracking-wider text-sm mb-3">Voeding en Leefstijl</p>
            <h2 className="text-3xl font-display font-bold text-secondary mb-5">Voeding als fundament</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>In mijn beginjaren als trainer focuste ik op training en liet ik voeding min of meer over aan de klant zelf. Totdat ik besefte hoe groot de impact van voeding was op de resultaten die mijn klanten behaalden.</p>
              <p>Sindsdien is voedingsbegeleiding een vast onderdeel van mijn aanpak. Niet met ingewikkelde diëten of extreme restricties – maar met een realistische, duurzame aanpak die past bij jouw leven.</p>
              <p>Elke maand voer ik een lichaamsanalyse uit waarbij we niet alleen gewicht meten, maar ook vetpercentage, spiermassa en BMI. Zo kunnen we echt de voortgang meten en het plan bijsturen waar nodig.</p>
              <p>Voeding is voor 80% verantwoordelijk voor jouw resultaat. Trainen zonder aandacht voor voeding is als een auto rijden zonder benzine. Samen zorgen we ervoor dat jij optimaal gevoed bent om te presteren en te herstellen.</p>
            </div>
            <Link to="/voeding" className="mt-6 inline-block">
              <Button variant="outline" className="gap-2">Meer over voedingsbegeleiding <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[16/10]">
            <ResponsiveImage src={ACTION_IMG} alt="Personal Training Den Bosch" className="w-full h-full object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-16 md:py-20 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-700 font-semibold uppercase tracking-wider text-sm mb-3">Mijn visie</p>
            <h2 className="text-3xl font-display font-bold text-secondary">Waar ik in geloof</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((item) => (
              <div key={item.title} className="p-8 rounded-2xl bg-white border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="px-4 py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-3xl">
            <p className="text-amber-700 font-semibold uppercase tracking-wider text-sm mb-3">Succesverhalen</p>
            <h2 className="text-3xl font-display font-bold text-secondary mb-4">Resultaat begint met een aanpak die bij de persoon past</h2>
            <p className="text-muted-foreground leading-relaxed">
              Iedere klant start anders. Daarom kijk ik naar de situatie, het lichaam, de agenda en de reden waarom eerdere pogingen niet bleven werken.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {SUCCESS_STORIES.map((story, index) => (
              <article key={story.quote} className="rounded-2xl border border-border bg-muted/30 p-6">
                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p><strong className="text-secondary">Situatie:</strong> {story.situation}</p>
                  <p><strong className="text-secondary">Aanpak:</strong> {story.approach}</p>
                  <p><strong className="text-secondary">Resultaat:</strong> {story.result}</p>
                </div>
                <blockquote className="mt-6 border-l-4 border-primary pl-4 text-sm italic text-secondary">
                  "{story.quote}"
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-4 py-16 md:py-20 lg:py-24 bg-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-primary text-primary" />)}
          </div>
          <blockquote className="text-xl md:text-2xl font-display italic leading-relaxed text-white/90 mb-6">
            "Jitan heeft mijn leven letterlijk veranderd. Niet alleen mijn lichaam, maar ook mijn mindset rondom eten en bewegen. Hij ziet wat je nodig hebt voordat je het zelf weet."
          </blockquote>
          <p className="text-primary font-semibold">— Frank D., Rosmalen · Get Fit Programma</p>
          <Link to="/referenties" className="mt-8 inline-block">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 gap-2">
              Lees alle klantverhalen <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <CTASection title="Maak kennis met Jitan" subtitle="Plan een gratis intake en ontdek wat persoonlijke begeleiding voor jou kan betekenen." />
    </div>
  );
}
