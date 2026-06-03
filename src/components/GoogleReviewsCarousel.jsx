import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import JotformReviews from '@/components/JotformReviews';

export default function GoogleReviewsCarousel() {
  return (
    <section className="bg-white px-4 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-700">
            Google Reviews
          </p>
          <h2 className="font-display text-3xl font-bold text-secondary md:text-4xl">
            Wat klanten zeggen
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Echte ervaringen van klanten van JitanSports
          </p>
        </div>

        <JotformReviews variant="carousel" />

        <div className="mt-8 text-center">
          <Button asChild className="bg-secondary text-white hover:bg-secondary/90">
            <Link to="/referenties">Bekijk alle reviews</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
