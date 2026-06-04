import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Star, MapPin } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';
import { useSiteContent } from '@/hooks/useSiteContent';
import { contentLines } from '@/lib/siteContent';
import SEO, { ROUTE_SEO, buildFAQSchema, buildLocalBusinessSchema, buildServiceSchema } from '@/components/SEO';
import PageHero from '@/components/PageHero';
import ServiceReviews from '@/components/ServiceReviews';
import SeoSummary from '@/components/SeoSummary';

export default function PersonalTrainerDenBosch() {
  const { content } = useSiteContent();
  const sectionParagraphs = contentLines(content, 'trainer_db_section_text');
  const features = contentLines(content, 'trainer_db_features');
  const areas = contentLines(content, 'trainer_db_areas');
  const services = [1, 2, 3, 4].map((number) => ({
    name: content[`trainer_db_service_${number}_name`],
    desc: content[`trainer_db_service_${number}_desc`],
  }));
  const faqs = [1, 2, 3, 4].map((number) => ({
    question: content[`trainer_db_faq_${number}_question`],
    answer: content[`trainer_db_faq_${number}_answer`],
  }));

  return (
    <div>
      <SEO
        {...ROUTE_SEO['/personal-trainer-den-bosch']}
        title={ROUTE_SEO['/personal-trainer-den-bosch'].title}
        description={content.seo_trainer_den_bosch_description || ROUTE_SEO['/personal-trainer-den-bosch'].description}
        image={content.seo_image}
        jsonLd={[
          buildLocalBusinessSchema(content),
          buildServiceSchema({
            name: 'Personal Trainer Den Bosch',
            serviceType: 'Personal Training',
            description:
              'Personal trainer in Den Bosch voor afvallen, krachttraining, fitter worden, conditie en voedingsbegeleiding. Training aan huis of outdoor.',
            path: '/personal-trainer-den-bosch',
            image: content.trainer_db_hero_image,
          }),
          buildFAQSchema(faqs),
        ]}
      />
      <PageHero
        image={content.trainer_db_hero_image}
        title="Personal Trainer in Den Bosch"
        subtitle={content.trainer_db_subtitle}
        align="center"
        overlayClassName="bg-secondary/85"
        titleClassName="md:text-5xl lg:text-5xl"
        badge={(
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
            <span className="text-white/60 text-sm ml-2">{content.trainer_db_rating_text}</span>
          </div>
        )}
      >
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/booking">
            <Button size="lg" className="gap-2 bg-primary font-bold text-secondary">
              {content.trainer_db_primary_button} <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <a href={`tel:${content.phone_href}`}>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              {content.phone_display}
            </Button>
          </a>
        </div>
      </PageHero>

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-display font-bold text-secondary mb-4">{content.trainer_db_section_title}</h2>
            {sectionParagraphs.map((paragraph, index) => (
              <p key={paragraph} className={`text-muted-foreground leading-relaxed ${index === sectionParagraphs.length - 1 ? 'mb-5' : 'mb-4'}`}>
                {paragraph}
              </p>
            ))}
            <div className="space-y-2">
              {features.map(f => (
                <div key={f} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-muted/40 rounded-2xl p-6 border border-border">
            <h3 className="font-bold text-secondary text-lg mb-5">{content.trainer_db_services_title}</h3>
            {services.map(s => (
              <div key={s.name} className="mb-4 pb-4 border-b border-border last:border-0 last:mb-0 last:pb-0">
                <p className="font-semibold text-secondary text-sm">{s.name}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{s.desc}</p>
              </div>
            ))}
            <Link to="/booking" className="block mt-5">
              <Button className="w-full bg-primary text-secondary font-bold gap-2">
                {content.trainer_db_services_button} <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-display font-bold text-secondary mb-6">{content.trainer_db_areas_title}</h2>
          <div className="flex flex-wrap justify-center gap-2.5">
            {areas.map(area => (
              <span key={area} className="flex items-center gap-1.5 bg-white border border-border px-3 py-1.5 rounded-full text-sm text-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary" /> {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-white p-7">
            <h2 className="mb-4 text-2xl font-display font-bold text-secondary">Voor wie is personal training geschikt?</h2>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              Personal training bij Jitan Sports is geschikt voor beginners, herstarters en ervaren sporters die gerichter willen trainen. Vooral als je wilt afvallen, sterker wilt worden, fitter wilt worden na je 40e of minder pijnklachten wilt ervaren, helpt persoonlijke begeleiding om veilig en consequent vooruitgang te boeken.
            </p>
            <div className="space-y-3">
              {['Afvallen met structuur', 'Sterker worden zonder blessures', 'Fitter worden na je 40e', 'Meer energie en discipline'].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-2xl border border-border bg-muted/30 p-7">
            <h2 className="mb-4 text-2xl font-display font-bold text-secondary">Werkwijze van Jitan</h2>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              Jitan start met een gratis proefles of intake. Daarna krijg je een persoonlijk trainingsplan, duidelijke techniekbegeleiding en praktische voedingsadviezen. Training vindt plaats aan huis, outdoor of op een plek in Den Bosch die bij jou past.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {['Intake en doel bepalen', 'Training op maat', 'Voeding en leefstijl', 'Voortgang meten'].map((item) => (
                <div key={item} className="rounded-lg bg-white px-4 py-3 text-sm font-semibold text-secondary">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <SeoSummary>
        <p>
          Jitan Sports is een personal training praktijk in Den Bosch gespecialiseerd in 1-op-1 begeleiding, afvallen, sterker worden, fitter worden en voedingsbegeleiding. De aanpak combineert training aan huis of outdoor met persoonlijke coaching, techniekcorrectie en meetbare voortgang.
        </p>
      </SeoSummary>

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-secondary mb-8 text-center">
            {content.trainer_db_faq_title}
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <ServiceReviews title="Resultaten met Personal Training Den Bosch" />

      <CTASection title="Klaar om fitter, sterker en energieker te worden?" subtitle={content.trainer_db_cta_subtitle} />
    </div>
  );
}
