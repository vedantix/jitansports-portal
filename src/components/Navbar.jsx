import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Crown, Dumbbell, Heart, Menu, Salad, Trophy, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const DIENSTEN = [
  { label: 'Personal Training', path: '/personal-training', desc: 'Training aan huis of outdoor', icon: Dumbbell },
  { label: 'Massage', path: '/massage', desc: 'Deep Tissue & Ontspanning', icon: Heart },
  { label: 'Voeding', path: '/voeding', desc: 'Schema en lichaamsanalyse', icon: Salad },
  { label: 'VIP Treatment', path: '/vip-treatment', desc: 'Training + Massage combinatie', icon: Crown },
  { label: 'Get Fit', path: '/get-fit', desc: '12-weken coaching pakket', icon: Trophy },
];

const DIENSTEN_PATHS = new Set(DIENSTEN.map(d => d.path));

const NAV_BEFORE = [{ label: 'Home', path: '/' }];
const NAV_AFTER = [
  { label: 'Tarieven', path: '/tarieven' },
  { label: 'Over Ons', path: '/over-ons' },
  { label: 'Referenties', path: '/referenties' },
  { label: 'Contact', path: '/contact' },
];

function NavLink({ to, active, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
        active
          ? 'text-amber-700 bg-primary/10'
          : 'text-foreground/70 hover:text-foreground hover:bg-muted'
      }`}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dienstenOpen, setDienstenOpen] = useState(false);
  const [mobileDienstenOpen, setMobileDienstenOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const isDienstenActive = DIENSTEN_PATHS.has(location.pathname);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDienstenOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDienstenOpen(false);
    setMobileDienstenOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 border-b border-border/60 bg-white/96 shadow-sm backdrop-blur-md"
      aria-label="Hoofdnavigatie"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Logo compact onClick={() => setMobileOpen(false)} />

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-0.5">
            {NAV_BEFORE.map(item => (
              <NavLink key={item.path} to={item.path} active={location.pathname === item.path}>
                {item.label}
              </NavLink>
            ))}

            {/* Diensten dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDienstenOpen(prev => !prev)}
                onKeyDown={e => e.key === 'Escape' && setDienstenOpen(false)}
                aria-haspopup="true"
                aria-expanded={dienstenOpen}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  isDienstenActive || dienstenOpen
                    ? 'text-amber-700 bg-primary/10'
                    : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                }`}
              >
                Diensten
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dienstenOpen ? 'rotate-180' : ''}`} />
              </button>

              {dienstenOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl border border-border shadow-2xl shadow-secondary/10 py-2 z-50">
                  <p className="px-4 pt-2 pb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">Diensten</p>
                  {DIENSTEN.map(item => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setDienstenOpen(false)}
                      className={`flex items-start gap-3 px-4 py-3 hover:bg-muted/60 transition-colors group ${
                        location.pathname === item.path ? 'bg-primary/5' : ''
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className={`text-sm font-semibold leading-tight ${location.pathname === item.path ? 'text-amber-700' : 'text-secondary'}`}>
                          {item.label}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV_AFTER.map(item => (
              <NavLink key={item.path} to={item.path} active={location.pathname === item.path}>
                {item.label}
              </NavLink>
            ))}

            <Button
              asChild
              className="ml-5 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-5 shadow-md shadow-primary/25"
            >
              <Link to="/booking">Plan Proefles</Link>
            </Button>
          </div>

          {/* Mobile / tablet toggle */}
          <button
            onClick={() => setMobileOpen(prev => !prev)}
            className="xl:hidden flex h-11 w-11 items-center justify-center rounded-lg hover:bg-muted transition-colors"
            aria-label={mobileOpen ? 'Menu sluiten' : 'Menu openen'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="xl:hidden bg-white border-b border-border shadow-lg animate-in slide-in-from-top-2"
        >
          <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                location.pathname === '/' ? 'text-amber-700 bg-primary/10' : 'text-foreground/70 hover:bg-muted'
              }`}
            >
              Home
            </Link>

            {/* Diensten expandable */}
            <div>
              <button
                onClick={() => setMobileDienstenOpen(prev => !prev)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isDienstenActive ? 'text-amber-700 bg-primary/10' : 'text-foreground/70 hover:bg-muted'
                }`}
              >
                Diensten
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDienstenOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileDienstenOpen && (
                <div className="mt-1 ml-4 space-y-0.5 border-l-2 border-primary/20 pl-2">
                  {DIENSTEN.map(item => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        location.pathname === item.path
                          ? 'text-amber-700 bg-primary/10'
                          : 'text-foreground/60 hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      <item.icon className="w-4 h-4 text-primary shrink-0" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV_AFTER.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === item.path ? 'text-amber-700 bg-primary/10' : 'text-foreground/70 hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-3 mt-2 border-t border-border">
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
              >
                <Link to="/booking" onClick={() => setMobileOpen(false)}>
                  Plan Gratis Proefles
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}