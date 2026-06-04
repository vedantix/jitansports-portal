import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useSiteContent } from '@/hooks/useSiteContent';
import { createWhatsAppUrl } from '@/lib/siteContent';

export default function CTASection({
  title = undefined,
  subtitle = undefined,
  dark = false,
  primaryLabel = undefined,
  secondaryLabel = undefined,
  showContact = false,
  contactLabel = 'Neem contact op',
}) {
  const { content } = useSiteContent();
  const heading = title || content.cta_title;
  const copy = subtitle || content.cta_subtitle;
  const whatsappUrl = createWhatsAppUrl(content);

  return (
    <section className={`px-4 py-16 md:py-20 lg:py-24 ${dark ? 'bg-secondary text-secondary-foreground' : 'bg-primary/5'}`}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${dark ? '' : 'text-secondary'}`}>
          {heading}
        </h2>
        <p className={`text-lg mb-8 ${dark ? 'text-secondary-foreground/70' : 'text-muted-foreground'}`}>
          {copy}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/booking">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 gap-2 w-full sm:w-auto">
              {primaryLabel || content.primary_cta_text} <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className={`gap-2 w-full sm:w-auto ${dark ? 'border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10' : ''}`}>
              <MessageCircle className="w-4 h-4" /> {secondaryLabel || content.secondary_cta_text}
            </Button>
          </a>
          {showContact && (
            <Link to="/contact">
              <Button size="lg" variant="ghost" className={`w-full sm:w-auto ${dark ? 'text-secondary-foreground hover:bg-secondary-foreground/10' : 'text-secondary hover:bg-secondary/10'}`}>
                {contactLabel}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
