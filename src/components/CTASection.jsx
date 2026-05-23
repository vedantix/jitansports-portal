import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

const WA_URL = "https://wa.me/31682272680?text=Hallo%20JitanSports%2C%20ik%20wil%20graag%20een%20gratis%20proefles%20aanvragen.";

export default function CTASection({ title = "Klaar om jouw doelen te bereiken?", subtitle = "Plan vandaag nog jouw gratis proefles en ontdek wat JitanSports voor jou kan betekenen.", dark = false }) {
  return (
    <section className={`py-20 px-4 ${dark ? 'bg-secondary text-secondary-foreground' : 'bg-primary/5'}`}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${dark ? '' : 'text-secondary'}`}>
          {title}
        </h2>
        <p className={`text-lg mb-8 ${dark ? 'text-secondary-foreground/70' : 'text-muted-foreground'}`}>
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/booking">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 gap-2 w-full sm:w-auto">
              Plan Gratis Proefles <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className={`gap-2 w-full sm:w-auto ${dark ? 'border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10' : ''}`}>
              <MessageCircle className="w-4 h-4" /> WhatsApp Contact
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}