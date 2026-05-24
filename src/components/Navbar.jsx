import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Personal Training', path: '/personal-training' },
  { label: 'Massage', path: '/massage' },
  { label: 'Get Fit', path: '/get-fit' },
  { label: 'Tarieven', path: '/tarieven' },
  { label: 'Over Ons', path: '/over-ons' },
  { label: 'Blog', path: '/blog' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border/60 bg-white/95 shadow-sm backdrop-blur-md" aria-label="Hoofdnavigatie">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo onClick={() => setOpen(false)} />

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'text-amber-700 bg-primary/10'
                    : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="ml-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <Link to="/booking">
                Plan Proefles
              </Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-lg hover:bg-muted transition-colors"
            aria-label={open ? 'Menu sluiten' : 'Menu openen'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-b border-border shadow-lg animate-in slide-in-from-top-2">
          <div id="mobile-navigation" className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-amber-700 bg-primary/10'
                    : 'text-foreground/70 hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <Link to="/booking" onClick={() => setOpen(false)}>
                Plan Gratis Proefles
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
