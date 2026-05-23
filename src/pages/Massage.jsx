import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Heart, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';
import { useSiteContent } from '@/hooks/useSiteContent';
import { contentLines } from '@/lib/siteContent';

export default function Massage() {
  const { content } = useSiteContent();
  const benefits = contentLines(content, 'massage_benefits');
  const paragraphs = contentLines(content, 'massage_main_text');
  const cards = [
    { icon: Heart, title: content.massage_card_1_title, desc: content.massage_card_1_text, price: content.massage_card_1_price },
    { icon: Shield, title: content.massage_card_2_title, desc: content.massage_card_2_text, price: content.massage_card_2_price },
  ];
  const steps = [1, 2, 3].map((step) => ({
    step: String(step),
    title: content[`massage_step_${step}_title`],
    desc: content[`massage_step_${step}_text`],
  }));

  return (
    <div>
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={content.massage_hero_image} alt="Massage" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 to-secondary/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">{content.massage_hero_eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              {content.massage_hero_title}
            </h1>
            <p className="text-white/80 text-lg">{content.massage_hero_subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-6 px-4 bg-primary/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-secondary font-semibold">{content.massage_banner_text}</p>
          <Link to="/booking"><Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">{content.massage_banner_button} <ArrowRight className="w-4 h-4" /></Button></Link>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <Zap className="w-4 h-4" /> {content.massage_popular_label}
            </div>
            <h2 className="text-3xl font-display font-bold text-secondary mb-6">{content.massage_main_title}</h2>
            {paragraphs.map((paragraph, index) => (
              <p key={paragraph} className={`text-muted-foreground leading-relaxed ${index === paragraphs.length - 1 ? 'mb-8' : 'mb-4'}`}>
                {paragraph}
              </p>
            ))}
            <div className="space-y-3 mb-8">
              {benefits.map(b => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{b}</span>
                </div>
              ))}
            </div>
            <p className="text-2xl font-bold text-secondary">{content.massage_price_text} <span className="text-sm font-normal text-muted-foreground">{content.massage_price_subtext}</span></p>
          </div>

          <div className="space-y-6">
            {cards.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-8 rounded-2xl bg-muted/50 border border-border/50"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-secondary">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.desc}</p>
                <p className="font-semibold text-primary">{item.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-secondary mb-6">{content.massage_process_title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
            {steps.map(s => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">{s.step}</div>
                <h3 className="font-bold text-secondary mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection dark title={content.massage_cta_title} subtitle={content.massage_cta_subtitle} />
    </div>
  );
}
