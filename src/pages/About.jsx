import { Award, Eye, Target, Heart } from 'lucide-react';
import CTASection from '../components/CTASection';
import { useSiteContent } from '@/hooks/useSiteContent';
import { contentLines } from '@/lib/siteContent';
import ResponsiveImage from '@/components/ResponsiveImage';
import SEO, { ROUTE_SEO } from '@/components/SEO';

export default function About() {
  const { content } = useSiteContent();
  const paragraphs = contentLines(content, 'about_main_text');
  const icons = [Eye, Target, Award, Heart];
  const blocks = icons.map((icon, index) => {
    const number = index + 1;
    return {
      icon,
      title: content[`about_card_${number}_title`],
      text: content[`about_card_${number}_text`],
    };
  });

  return (
    <div>
      <SEO
        {...ROUTE_SEO['/over-ons']}
        title={content.seo_about_title || ROUTE_SEO['/over-ons'].title}
        description={content.seo_about_description || ROUTE_SEO['/over-ons'].description}
        image={content.seo_image}
      />
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ResponsiveImage src={content.about_hero_image} alt="Over JitanSports" className="w-full h-full object-cover" sizes="100vw" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 to-secondary/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">{content.about_hero_eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              {content.about_hero_title}
            </h1>
          </div>
        </div>
      </section>

      {/* Wie ben ik */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden h-80 lg:h-[500px]">
            <ResponsiveImage src={content.about_profile_image} alt="Jitan" className="w-full h-full object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold text-secondary mb-6">{content.about_main_title}</h2>
            {paragraphs.map((paragraph, index) => (
              <p key={paragraph} className={`text-muted-foreground leading-relaxed ${index === paragraphs.length - 1 ? '' : 'mb-4'}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Blocks */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {blocks.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-white border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
