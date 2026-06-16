import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import SEO, { ROUTE_SEO, buildLocalBusinessSchema, buildWebPageSchema } from '@/components/SEO';
import PageHero from '@/components/PageHero';
import GoogleRatingBadge from '@/components/GoogleRatingBadge';
import JotformReviews from '@/components/JotformReviews';
import { Button } from '@/components/ui/button';
import { isGoogleReviewUrlConfigured, reviewsConfig } from '@/config/reviews';

export default function Referenties() {
  return (
    <div>
      <SEO
        {...ROUTE_SEO['/referenties']}
        title={ROUTE_SEO['/referenties'].title}
        description={ROUTE_SEO['/referenties'].description}
        path="/referenties"
        jsonLd={[
          buildWebPageSchema({
            title: ROUTE_SEO['/referenties'].title,
            description: ROUTE_SEO['/referenties'].description,
            path: '/referenties',
          }),
          buildLocalBusinessSchema(),
        ]}
      />

      <section className="bg-white px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-700">
              Live Google Reviews
            </p>
            <h2 className="font-display text-3xl font-bold text-secondary md:text-4xl">
              Alle ervaringen op een rij
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Nieuwe beoordelingen worden automatisch zichtbaar zodra ze via Google en Jotform beschikbaar zijn.
            </p>
          </div>

          <JotformReviews variant="grid" />
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-secondary md:text-4xl">
            Ben jij de volgende successtory?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Plan vandaag nog een gratis proefles en ontdek wat persoonlijke begeleiding voor jou kan betekenen.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2 bg-secondary font-bold text-white hover:bg-secondary/90">
              <Link to="/booking">
                Gratis Proefles <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Opnemen</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}