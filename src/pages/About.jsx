import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Award, Heart, Target, Zap, Star } from 'lucide-react';
import CTASection from '../components/CTASection';
import SEO from '@/components/SEO';

const HERO_IMG = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=75';
const PROFILE_IMG = 'https://images.unsplash.com/photo-1567013127542-490d757e51cd?w=800&q=75';
const ACTION_IMG = 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=75';
const MASSAGE_IMG = 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=75';

const VALUES = [
  { icon: Heart, title: 'Persoonlijke betrokkenheid', text: 'Iedereen verdient een trainer die echt luistert. Ik leer jou kennen als persoon – jouw doelen, uitdagingen en motivatie. Geen standaard aanpak, maar echte aandacht.' },
  { icon: Target, title: 'Resultaat als drijfveer', text: 'Ik geloof alleen in methodes die werken. Elke sessie, elk voedingsplan en elke massage is ontworpen om jou dichter bij jouw doel te brengen. Efficiënt en effectief.' },
  { icon: Award, title: 'Vakkennis en ervaring', text: 'Met meer dan 10 jaar ervaring in personal training, massage en voedingsbegeleiding beschik ik over de kennis om met elke situatie om te gaan – van beginner tot sporter, van herstel tot topprestatie.' },
  { icon: Zap, title: 'Holistische aanpak', text: 'Training, voeding en herstel zijn onlosmakelijk met elkaar verbonden. Ik begeleid jou op alle drie de vlakken voor maximale en duurzame resultaten.' },
];

const CERTS = [
  'Gecertificeerd Personal Trainer', 'Sport- en Fitnesskunde',
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

export default function About() {
  return (
    <div>
      <SEO
        title="Over JitanSports – Personal Trainer Den Bosch | Jitan's verhaal"
        description="Leer Jitan kennen: personal trainer, massage therapeut en voedingscoach in omgeving Den Bosch. 10+ jaar ervaring, passie voor sport en gezondheid. Lees zijn verhaal."
        path="/over-ons"
      />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Over JitanSports" className="w-full h-full object-cover" loading="eager" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">Over JitanSports</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Ontmoet Jitan – jouw persoonlijke coach
            </h1>
            <p className="text-white/80 text-lg">
              Personal trainer, massagetherapeut en voedingscoach in omgeving Den Bosch. Meer dan 10 jaar ervaring, honderden tevreden klanten.
            </p>
          </div>
        </div>
      </section>

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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-bold text-secondary">Mijn verhaal begint met een keuze</h2>
            <p>Sport heeft altijd een centrale plek in mijn leven ingenomen. Al van jongs af aan was beweging voor mij niet zomaar een hobby – het was een manier om mijzelf te ontwikkelen, grenzen te verleggen en het beste uit mezelf te halen. Die passie heeft me uiteindelijk geleid naar het prachtige vak van personal trainer.</p>
            <p>Mijn weg naar dit vak begon niet altijd in rechte lijn. Ik kende de frustratie van onsamenhangende trainingsschema's, tegenstrijdige voedingsadviezen en de overweldigende hoeveelheid informatie op het internet. Ik wist uit eigen ervaring hoe verwarrend en demotiverend dat kon zijn. Die ervaring heeft me gevormd tot de trainer die ik vandaag ben.</p>
            <p>Na mijn opleidingen in Sport- en Fitnesskunde, voedingsleer en massagetherapie werkte ik samen met klanten van uiteenlopende achtergronden – van jonge sporters die wilden presteren tot mensen van boven de vijftig die gewoon fitter door het leven wilden gaan. Van atleten die herstelden van een serieuze blessure tot drukke ondernemers die moeite hadden tijd vrij te maken voor hun gezondheid.</p>
            <p>Wat ik leerde in al die jaren? Dat ieder mens uniek is. Er bestaat geen standaard trainingsschema of dieet dat voor iedereen werkt. Echt resultaat bereik je alleen met een aanpak die volledig is afgestemd op jouw lichaam, jouw leven en jouw doelen.</p>
            <h3 className="text-xl font-bold text-secondary mt-6">Waarom ik aan huis train</h3>
            <p>In 2015 maakte ik een bewuste keuze: geen vaste sportschool meer, maar training aan huis en outdoor. Die keuze was niet toevallig. Ik zag hoe klanten floreerden wanneer ze in een vertrouwde omgeving trainden – meer ontspannen, meer gemotiveerd en meer consistent.</p>
            <p>Training aan huis elimineert alle drempels: geen reistijd, geen parkeerkosten, geen intimiderende sportschoolsfeer. Jij traint in jouw eigen tempo, in jouw eigen omgeving, met een trainer die volledig voor jou beschikbaar is. Dat is waar ik in geloof.</p>
            <p>Daarmee bedien ik klanten in heel omgeving Den Bosch – van Rosmalen en Vught tot Oss en Sint-Michielsgestel. Ik rijd naar jou toe, zodat jij je volledig kunt focussen op jouw training.</p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden h-[420px]">
              <img src={PROFILE_IMG} alt="Jitan – Personal Trainer Den Bosch" className="w-full h-full object-cover" loading="lazy" decoding="async" />
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
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden h-80 order-2 lg:order-1">
            <img src={MASSAGE_IMG} alt="Deep Tissue Massage Den Bosch" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-amber-700 font-semibold uppercase tracking-wider text-sm mb-3">Massage en Herstel</p>
            <h2 className="text-3xl font-display font-bold text-secondary mb-5">Specialist in Deep Tissue Massage</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Naast personal training ben ik gecertificeerd massagetherapeut met specialisatie in Deep Tissue Massage en sportmassage. Massage is voor mij niet een aanvulling op training – het is een volwaardig onderdeel van een complete gezondheidsaanpak.</p>
              <p>Veel van mijn klanten ontdekken de kracht van de combinatie: trainen én massages ontvangen. Spieren herstellen sneller, blessures worden voorkomen en de algehele belastbaarheid neemt toe.</p>
              <p>Mijn massages voer ik aan huis uit in omgeving Den Bosch. Ik breng mijn professionele massagetafel mee zodat jij volledig kunt ontspannen in jouw vertrouwde omgeving.</p>
            </div>
            <Link to="/massage" className="mt-6 inline-block">
              <Button variant="outline" className="gap-2">Bekijk massagediensten <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Voeding */}
      <section className="py-20 px-4 bg-white">
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
          <div className="rounded-2xl overflow-hidden h-80">
            <img src={ACTION_IMG} alt="Personal Training Den Bosch" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-muted/30">
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

      {/* Testimonial */}
      <section className="py-16 px-4 bg-secondary text-white">
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