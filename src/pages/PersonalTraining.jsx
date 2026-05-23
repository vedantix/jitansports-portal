import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Clock, MapPin, Dumbbell } from 'lucide-react';
import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import { useSiteContent } from '@/hooks/useSiteContent';
import { contentLines } from '@/lib/siteContent';

export default function PersonalTraining() {
  const { content } = useSiteContent();
  const benefits = contentLines(content, 'pt_benefits');
  const paragraphs = contentLines(content, 'pt_main_text');
  const nutritionParagraphs = contentLines(content, 'pt_nutrition_text');
  const featureIcons = [Users, Clock, MapPin, Dumbbell];
  const features = featureIcons.map((icon, index) => {
    const number = index + 1;
    return {
      icon,
      title: content[`pt_feature_${number}_title`],
      text: content[`pt_feature_${number}_text`],
    };
  });
  const faqs = [1, 2, 3, 4].map((number) => ({
    question: content[`pt_faq_${number}_question`],
    answer: content[`pt_faq_${number}_answer`],
  }));

  return (
    <div>
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={content.pt_hero_image} alt="Personal Training Outdoor" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 to-secondary/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">{content.pt_hero_eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              {content.pt_hero_title}
            </h1>
            <p className="text-white/80 text-lg">{content.pt_hero_subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-6 px-4 bg-primary/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-secondary font-semibold">{content.pt_banner_text}</p>
          <Link to="/booking"><Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">{content.pt_banner_button} <ArrowRight className="w-4 h-4" /></Button></Link>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold text-secondary mb-6">{content.pt_main_title}</h2>
              {paragraphs.map((paragraph, index) => (
                <p key={paragraph} className={`text-muted-foreground leading-relaxed ${index === paragraphs.length - 1 ? 'mb-8' : 'mb-4'}`}>
                  {paragraph}
                </p>
              ))}
              <div className="space-y-3">
                {benefits.map(b => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {features.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-muted/50 border border-border/50"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-secondary">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-secondary mb-6">{content.pt_nutrition_title}</h2>
          {nutritionParagraphs.map((paragraph, index) => (
            <p key={paragraph} className={`text-muted-foreground leading-relaxed ${index === nutritionParagraphs.length - 1 ? 'mb-8' : 'mb-4'}`}>
              {paragraph}
            </p>
          ))}
          <Link to="/contact"><Button variant="outline" className="gap-2">{content.pt_nutrition_button} <ArrowRight className="w-4 h-4" /></Button></Link>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-secondary mb-8 text-center">{content.pt_faq_title}</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
