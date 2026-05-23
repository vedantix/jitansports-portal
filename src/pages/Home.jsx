import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { base44 } from '@/api/base44Client';
import { useSiteContent } from '@/hooks/useSiteContent';
import { createWhatsAppUrl } from '@/lib/siteContent';
import SEO, { ROUTE_SEO, buildFAQSchema, buildLocalBusinessSchema } from '@/components/SEO';
import GoalCards from '../components/GoalCards';
import ReviewsSection from '../components/ReviewsSection';
import TrustStats from '../components/TrustStats';
import GallerySection from '../components/GallerySection';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';

const SERVICES = [
  {
    title: "Personal Training",
    desc: "1-op-1 begeleiding outdoor of aan huis. Op jouw tempo, naar jouw doel.",
    link: "/personal-training",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=75",
  },
  {
    title: "Deep Tissue Massage",
    desc: "Professionele massage voor herstel, ontspanning en pijnvermindering.",
    link: "/massage",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=75",
  },
  {
    title: "Get Fit Programma",
    desc: "12 weken intensief traject inclusief voeding en persoonlijke coaching.",
    link: "/get-fit",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=75",
  },
];

const FAQS = [
  { question: "Waar trainen we?", answer: "JitanSports traint aan huis, in het park of op een locatie die jou uitkomt in omgeving Den Bosch." },
  { question: "Hoe lang duurt een sessie?", answer: "Een standaard trainingssessie duurt 60 minuten. Massages zijn 60 of 90 minuten." },
  { question: "Is de gratis proefles écht gratis?", answer: "Ja, 100% gratis en volledig vrijblijvend. Je ontdekt hoe wij werken en of het bij je past." },
  { question: "Kan ik training en massage combineren?", answer: "Absoluut! Veel klanten combineren personal training met Deep Tissue Massage voor het beste resultaat." },
];

const USP_ITEMS = [
  'Personal Training specialist',
  '10+ jaar ervaring',
  'Deep Tissue Massage',
  'Voedingsadvies',
  'Outdoor & aan huis',
  'Gratis proefles',
];

export default function Home() {
  const { content } = useSiteContent();
  const [faqs, setFaqs] = useState(FAQS);

  useEffect(() => {
    base44.entities.FAQ.list('order')
      .then((data) => {
        if (data?.length) {
          setFaqs(
            data.slice(0, 6).map((faq) => ({
              id: faq.id,
              question: faq.question,
              answer: faq.answer,
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  const whatsappUrl = createWhatsAppUrl(content);

  return (
    <div>
      <SEO
        {...ROUTE_SEO['/']}
        image={content.seo_image || content.hero_image}
        jsonLd={[buildLocalBusinessSchema(), buildFAQSchema(faqs)].filter(Boolean)}
      />
      {/* Hero */}
      <section className="relative flex min-h-[82svh] items-center overflow-hidden md:min-h-[86vh]">
        <div className="absolute inset-0">
          <img
            src={content.hero_image}
            alt="JitanSports Personal Trainer omgeving Den Bosch"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/82 to-secondary/25 md:bg-gradient-to-r md:from-secondary/94 md:via-secondary/76 md:to-secondary/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">
              {content.hero_eyebrow}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-4">
              {content.hero_title}<br />
              <span className="text-primary">{content.hero_highlight}</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed">
              {content.hero_subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/booking">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-secondary font-bold px-7 text-base gap-2">
                  {content.primary_cta_text} <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 gap-2 text-base">
                  <MessageCircle className="w-5 h-5" /> {content.secondary_cta_text}
                </Button>
              </a>
            </div>
            <div className="flex items-center gap-3 mt-8">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="hsl(var(--primary))" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-white/70 text-sm">
                <span className="text-white font-semibold">100+ tevreden klanten</span> gingen je voor
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Goal Cards – Priority 1 */}
      <GoalCards />

      {/* Services */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-amber-700 font-semibold uppercase tracking-wider text-sm mb-2">Wat wij bieden</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Onze diensten</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={service.link}
                  className="group block rounded-2xl overflow-hidden border border-border bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-52 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-secondary mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.desc}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 group-hover:gap-2 transition-all">
                      Meer info <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats – Priority 3 */}
      <TrustStats />

      {/* Reviews – Priority 2 */}
      <ReviewsSection />

      {/* Mid CTA */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-secondary mb-3">Klaar om te starten?</h2>
            <p className="text-muted-foreground mb-7 text-base">
              Plan vandaag nog je gratis proefles en ontdek wat JitanSports voor jou kan betekenen.
            </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/booking">
              <Button size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white font-bold gap-2">
                Start Vandaag <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href={`tel:${content.phone_href}`}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                <Phone className="w-4 h-4" /> {content.phone_display}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery – Priority 4 */}
      <GallerySection />

      {/* About */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden h-[420px]"
          >
            <img
              src={content.hero_image}
              alt="Jitan – Personal Trainer omgeving Den Bosch"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
          <div>
            <p className="text-amber-700 font-semibold uppercase tracking-wider text-sm mb-3">Over JitanSports</p>
            <h2 className="text-3xl font-display font-bold text-secondary mb-5">
              Jouw persoonlijke gids naar een gezonde lifestyle
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              JitanSports is ontstaan vanuit eigen ervaring. Ervaring in het er na je 40ste nog steeds goed uit kunnen zien én jezelf goed voelen. Met meer dan 10 jaar ervaring help ik klanten in omgeving Den Bosch hun doelen te bereiken.
            </p>
            <div className="grid grid-cols-2 gap-2.5 mb-6">
              {USP_ITEMS.map(item => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link to="/over-ons">
              <Button variant="outline" className="gap-2">
                Meer over Jitan <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-secondary">Veelgestelde vragen</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
