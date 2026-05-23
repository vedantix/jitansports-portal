import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <span className="text-2xl font-display font-bold">
              Jitan<span className="text-primary">Sports</span>
            </span>
            <p className="mt-4 text-secondary-foreground/70 text-sm leading-relaxed">
              {"Personal Training, Voedingsadvies en Massage in één compleet traject. Jouw gezondheid is ons doel."}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary">Diensten</h4>
            <div className="space-y-2.5">
              {[
                { label: 'Personal Training', path: '/personal-training' },
                { label: 'Massage', path: '/massage' },
                { label: 'Get Fit Programma', path: '/get-fit' },
                { label: 'Tarieven', path: '/tarieven' },
              ].map(l => (
                <Link key={l.path} to={l.path} className="block text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary">Informatie</h4>
            <div className="space-y-2.5">
              {[
                { label: 'Over Ons', path: '/over-ons' },
                { label: 'Blog', path: '/blog' },
                { label: 'Contact', path: '/contact' },
                { label: 'Afspraak Maken', path: '/booking' },
              ].map(l => (
                <Link key={l.path} to={l.path} className="block text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+31682272680" className="flex items-center gap-3 text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 shrink-0" /> 06 82 27 26 80
              </a>
              <a href="mailto:info@jitansports.com" className="flex items-center gap-3 text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 shrink-0" /> info@jitansports.com
              </a>
              <div className="flex items-start gap-3 text-sm text-secondary-foreground/70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{"Regio Den Haag & omstreken"}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-secondary-foreground/50">
            {"© "}{new Date().getFullYear()}{" JitanSports. Alle rechten voorbehouden."}
          </p>
          <p className="text-xs text-secondary-foreground/40">
            {"Website ontwikkeld door "}
            <a href="https://vedantix.nl" target="_blank" rel="noopener noreferrer dofollow" className="hover:text-primary transition-colors underline">Vedantix</a>
          </p>
        </div>
      </div>
    </footer>
  );
}