import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Star, Users, Clock } from 'lucide-react';
import Logo from '@/components/Logo';
import { useSiteContent } from '@/hooks/useSiteContent';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { content } = useSiteContent();

  return (
    <footer className="bg-secondary text-white">
      {/* Trust bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-3 gap-4 text-center">
          {[
            { icon: Clock, value: '10+', label: 'Jaar ervaring' },
            { icon: Users, value: '100+', label: 'Tevreden klanten' },
            { icon: Star, value: '5.0', label: 'Google rating' },
          ].map(item => (
            <div key={item.label} className="flex flex-col items-center gap-1">
              <item.icon className="w-5 h-5 text-primary mb-1" />
              <p className="text-xl font-bold text-primary">{item.value}</p>
              <p className="text-white/50 text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Logo tone="dark" className="mb-4 [&_span:first-child]:bg-white/10 [&_span:first-child]:text-primary" />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Personal Training, Deep Tissue Massage en voedingsbegeleiding in {content.region}.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: content.instagram_url, label: 'Instagram' },
                { icon: Facebook, href: content.facebook_url, label: 'Facebook' },
                { icon: Linkedin, href: content.linkedin_url, label: 'LinkedIn' },
              ].map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary hover:text-secondary transition-all flex items-center justify-center"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="font-semibold text-white mb-4">Diensten</h4>
            <ul className="space-y-2">
              {[
                ['Personal Training', '/personal-training'],
                ['Deep Tissue Massage', '/massage'],
                ['Get Fit Programma', '/get-fit'],
                ['Tarieven', '/tarieven'],
                ['Gratis Proefles', '/booking'],
                ['Blog', '/blog'],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="text-white/60 hover:text-primary text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Werkgebied */}
          <div>
            <h4 className="font-semibold text-white mb-4">Werkgebied</h4>
            <ul className="space-y-2">
              {[
                ['Personal Trainer omgeving Den Bosch', '/personal-trainer-den-bosch'],
                ['Outdoor Training omgeving Den Bosch', '/personal-training'],
                ['Training aan huis omgeving Den Bosch', '/personal-training'],
                ['Get Fit omgeving Den Bosch', '/get-fit'],
                ['Massage omgeving Den Bosch', '/massage-den-bosch'],
                ['Deep Tissue Massage omgeving Den Bosch', '/deep-tissue-massage-den-bosch'],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="text-white/60 hover:text-primary text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 mb-5">
              <a href={`tel:${content.phone_href}`} className="flex items-center gap-2 text-white/60 hover:text-primary text-sm transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" /> {content.phone_display}
              </a>
              <a href={`mailto:${content.email}`} className="flex items-center gap-2 text-white/60 hover:text-primary text-sm transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" /> {content.email}
              </a>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{content.address_label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>© {currentYear} JitanSports. Alle rechten voorbehouden.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link to="/over-ons" className="hover:text-white transition-colors">Over ons</Link>
            <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <a
              href="https://vedantix.nl"
              target="_blank"
              rel="noopener"
              className="hover:text-primary transition-colors"
            >
              Website door Vedantix
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
