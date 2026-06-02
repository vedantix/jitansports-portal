import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const SERVICE_ITEMS = [
  { label: 'Personal Training', path: '/personal-training' },
  { label: 'Deep Tissue Massage', path: '/massage' },
  { label: 'Voedingsbegeleiding', path: '/voeding' },
  { label: 'VIP Treatment', path: '/vip-treatment' },
  { label: 'Get Fit Programma', path: '/get-fit' },
  { label: 'Stoelmassage & Bedrijven', path: '/bedrijven' },
];

const ABOUT_ITEMS = [
  { label: 'Over Ons', path: '/over-ons' },
  { label: 'Resultaten & Referenties', path: '/referenties' },
  { label: 'Blog', path: '/blog' },
];

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Tarieven', path: '/tarieven' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const servicesActive = SERVICE_ITEMS.some((item) => location.pathname === item.path);
  const aboutActive = ABOUT_ITEMS.some((item) => location.pathname === item.path);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border/60 bg-white/95 shadow-sm backdrop-blur-md" aria-label="Hoofdnavigatie">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between gap-5 md:h-24">
          <Logo onClick={() => setOpen(false)} />

          {/* Desktop nav */}
          <div className="hidden min-w-0 items-center justify-end gap-1 xl:flex">
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`inline-flex h-11 items-center gap-1 rounded-lg px-3 text-sm font-semibold transition-colors ${
                  servicesActive
                    ? 'text-amber-700 bg-primary/10'
                    : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                }`}
              >
                Diensten <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-60 p-2">
                {SERVICE_ITEMS.map((item) => (
                  <DropdownMenuItem key={item.path} asChild className="cursor-pointer rounded-md px-3 py-2">
                    <Link
                      to={item.path}
                      className={`font-medium ${
                        location.pathname === item.path ? 'text-amber-700' : 'text-foreground'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`inline-flex h-11 items-center gap-1 rounded-lg px-3 text-sm font-semibold transition-colors ${
                  aboutActive
                    ? 'text-amber-700 bg-primary/10'
                    : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                }`}
              >
                Over Jitan <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-60 p-2">
                {ABOUT_ITEMS.map((item) => (
                  <DropdownMenuItem key={item.path} asChild className="cursor-pointer rounded-md px-3 py-2">
                    <Link
                      to={item.path}
                      className={`font-medium ${
                        location.pathname === item.path ? 'text-amber-700' : 'text-foreground'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {NAV_ITEMS.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  location.pathname === item.path
                    ? 'text-amber-700 bg-primary/10'
                    : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="ml-3 shrink-0 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <Link to="/booking">
                Plan Proefles
              </Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-muted xl:hidden"
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
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-secondary/45 xl:hidden"
            aria-label="Menu sluiten"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-navigation"
            className="fixed bottom-0 right-0 top-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-2xl xl:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobiele navigatie"
          >
            <div className="flex h-20 items-center justify-between border-b border-border px-4 md:h-24">
              <Logo compact onClick={() => setOpen(false)} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-muted"
                aria-label="Menu sluiten"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-5">
              <p className="mb-2 px-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Diensten</p>
              <div className="space-y-1">
                {SERVICE_ITEMS.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-amber-700 bg-primary/10'
                        : 'text-foreground/70 hover:bg-muted'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <p className="mb-2 mt-6 px-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Over Jitan</p>
              <div className="space-y-1">
                {ABOUT_ITEMS.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-amber-700 bg-primary/10'
                        : 'text-foreground/70 hover:bg-muted'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <p className="mb-2 mt-6 px-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Website</p>
              <div className="space-y-1">
                {NAV_ITEMS.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-amber-700 bg-primary/10'
                        : 'text-foreground/70 hover:bg-muted'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="border-t border-border p-4">
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <Link to="/booking">
                  Plan Gratis Proefles
                </Link>
              </Button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
