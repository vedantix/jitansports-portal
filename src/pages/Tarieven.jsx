import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import CTASection from '../components/CTASection';
import { useSiteContent } from '@/hooks/useSiteContent';

const DEFAULT_PLANS = [
  {
    name: "Personal Training Outdoor",
    price: "€35,00",
    sub: "per uur (was €50,00)",
    features: ["Training buiten in de natuur", "Alle materialen inbegrepen", "Gratis proefles", "Duo training mogelijk (+€10 p.p.)"],
    highlight: false,
  },
  {
    name: "Personal Training @Home",
    price: "€37,50",
    sub: "per uur (was €55,00)",
    features: ["Training bij jou thuis", "Alle materialen inbegrepen", "Gratis proefles", "Duo training mogelijk (+€10 p.p.)"],
    highlight: false,
  },
  {
    name: "Deep Tissue Massage",
    price: "€75,00",
    sub: "full body – 1 uur",
    features: ["Vastzittend bindweefsel losmaken", "Blokkades verhelpen", "Massage aan huis", "Chronische klachten verminderen"],
    highlight: true,
  },
  {
    name: "Get Fit Pakket",
    price: "€1.750,00",
    sub: "12 weken compleet",
    features: ["2x per week personal training", "Voedingsschema's op maat", "Weegmomenten met analyse", "Deep Tissue Massage", "Mental coaching", "24/7 support"],
    highlight: false,
  },
];

export default function Tarieven() {
  const { content } = useSiteContent();
  const [plans, setPlans] = useState(DEFAULT_PLANS);
  const moreServices = [1, 2, 3, 4, 5].map((number) => ({
    name: content[`pricing_more_${number}_name`],
    desc: content[`pricing_more_${number}_desc`],
    price: content[`pricing_more_${number}_price`],
  }));

  useEffect(() => {
    base44.entities.PricingPlan.list('order')
      .then((data) => {
        if (data?.length) {
          setPlans(
            data.map((plan) => ({
              name: plan.name,
              price: plan.price,
              highlight: !!plan.highlight,
              cta_text: plan.cta_text,
              sub: plan.description,
              features: plan.features
                ? plan.features.split('\n').filter(Boolean)
                : [],
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">{content.pricing_eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{content.pricing_title}</h1>
            <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto">
              {content.pricing_subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-20 px-4 -mt-1">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? 'bg-secondary text-secondary-foreground border-2 border-primary shadow-2xl'
                  : 'bg-white border border-border/50 shadow-sm'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" /> Populair
                </div>
              )}
              <h3 className={`font-bold text-lg mb-1 ${plan.highlight ? '' : 'text-secondary'}`}>{plan.name}</h3>
              <p className={`text-3xl font-bold mb-1 ${plan.highlight ? 'text-primary' : 'text-foreground'}`}>{plan.price}</p>
              <p className={`text-sm mb-6 ${plan.highlight ? 'text-secondary-foreground/60' : 'text-muted-foreground'}`}>{plan.sub}</p>
              <div className="space-y-3 flex-1 mb-8">
                {plan.features.map(f => (
                  <div key={f} className="flex items-start gap-2">
                    <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? 'text-primary' : 'text-primary'}`} />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/booking">
                <Button className={`w-full gap-2 ${plan.highlight ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : ''}`} variant={plan.highlight ? 'default' : 'outline'}>
                  {plan.cta_text || 'Plan Afspraak'} <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* More services */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-secondary mb-10 text-center">{content.pricing_more_title}</h2>
          <div className="space-y-4">
            {moreServices.map(s => (
              <div key={s.name} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white rounded-xl border border-border/50 gap-2">
                <div>
                  <h3 className="font-semibold text-secondary">{s.name}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
                <span className="text-lg font-bold text-primary whitespace-nowrap">{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection dark title={content.pricing_cta_title} subtitle={content.pricing_cta_subtitle} />
    </div>
  );
}
