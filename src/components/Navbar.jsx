import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Crown, Dumbbell, Heart, Menu, Salad, Trophy, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const DIENSTEN = [
  { label: 'Personal Training', path: '/personal-training', desc: 'Training aan huis of outdoor', icon: Dumbbell },
  { label: 'Massage',           path: '/massage',           desc: 'Deep Tissue & Ontspanning',  icon: Heart   },
  { label: 'Voeding',           path: '/voeding',           desc: 'Schema en lichaamsanalyse',  icon: Salad   },
  { label: 'VIP Treatment',     path: '/vip-treatment',     desc: 'Training + Massage combi',   icon: Crown   },
  { label: 'Get Fit',           path: '/get-fit',           desc: '12-weken coaching pakket',   icon: Trophy  },
];

const DIENSTEN_PATHS = new Set(DIENSTEN.map(d => d.path));

const NAV_ITEMS = [
  { label: 'Home',        path: '/'           },
  { label: 'Tarieven',    path: '/tarieven'   },
  { label: 'Over Ons',    path: '/over-ons'   },
  { label: 'Referenties', path: '/referenties'},
  { label: 'Contact',     path: '/contact'    },
];

/* ─── Desktop nav link ─────────────────────────────────────────── */
function NavLink({ to, active, children }) {
  return (
    <Link
      to={to}
      className={`px-4 py-2 text-[13.5px] font-semibold rounded-lg transition-all whitespace-nowrap ${
        active
          ? 'text-amber-700 bg-amber-50'
          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
      }`}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [mobileOpen,        setMobileOpen]        = useState(false);
  const [dienstenOpen,      setDienstenOpen]      = useState(false);
  const [mobileDienstenOpen,setMobileDienstenOpen]= useState(false);
  const location    = useLocation();
  const dropdownRef = useRef(null);

  const isDienstenActive = DIENSTEN_PATHS.has(location.pathname);

  /* Close dropdown on outside click */
  useEffect(() => {
    function onOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDienstenOpen(false);
      }
    }
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, []);

  /* Close everything on route change */
  useEffect(() => {
    setMobileOpen(false);
    setDienstenOpen(false);
    setMobileDienstenOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 bg-white/97 border-b border-slate-200/80 shadow-sm backdrop-blur-sm"
      aria-label="Hoofdnavigatie"
    >
      {/* ── Bar ── */}
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-[68px] lg:h-[76px]">

          {/* Logo — fixed width so nav items always start from same position */}
          <div className="shrink-0 w-[160px] lg:w-[180px]">
            <Logo compact />
          </div>

          {/* ── Desktop navigation (≥1024px) ─────────────────────── */}
          <div className="hidden lg:flex items-center gap-1">

            {/* Home */}
            <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>

            {/* Diensten dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDienstenOpen(p => !p)}
                onKeyDown={e => e.key === 'Escape' && setDienstenOpen(false)}
                aria-haspopup="listbox"
                aria-expanded={dienstenOpen}
                className={`flex items-center gap-1.5 px-4 py-2 text-[13.5px] font-semibold rounded-lg transition-all whitespace-nowrap ${
                  isDienstenActive || dienstenOpen
                    ? 'text-amber-700 bg-amber-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Diensten
                <ChevronDown
                  className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${dienstenOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown panel */}
              {dienstenOpen && (
                <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[280px] bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-900/10 py-2 z-50">
                  <p className="px-4 pt-2 pb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Onze diensten
                  </p>
                  {DIENSTEN.map(item => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setDienstenOpen(false)}
                      className={`flex items-center gap-3.5 px-4 py-3 hover:bg-slate-50 transition-colors group ${
                        location.pathname === item.path ? 'bg-amber-50/60' : ''
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className={`text-[13px] font-semibold leading-tight truncate ${
                          location.pathname === item.path ? 'text-amber-700' : 'text-slate-800'
                        }`}>
                          {item.label}
                        </p>
                        <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Rest of nav */}
            {NAV_ITEMS.filter(i => i.path !== '/').map(item => (
              <NavLink key={item.path} to={item.path} active={location.pathname === item.path}>
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* ── CTA (desktop) ─────────────────────────────────────── */}
          <div className="hidden lg:flex items-center shrink-0">
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-5 h-10 shadow-md shadow-primary/20 text-[13px]"
            >
              <Link to="/booking">Plan Proefles</Link>
            </Button>
          </div>

          {/* ── Hamburger (< 1024px) ─────────────────────────────── */}
          <button
            onClick={() => setMobileOpen(p => !p)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
            aria-label={mobileOpen ? 'Menu sluiten' : 'Menu openen'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile / tablet menu ───────────────────────────────────── */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden bg-white border-t border-slate-100 shadow-lg"
        >
          <div className="px-4 py-5 space-y-1 max-h-[80vh] overflow-y-auto">

            {/* Home */}
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center px-4 py-3 rounded-xl text-[15px] font-semibold transition-colors ${
                location.pathname === '/' ? 'text-amber-700 bg-amber-50' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Home
            </Link>

            {/* Diensten expandable */}
            <div>
              <button
                onClick={() => setMobileDienstenOpen(p => !p)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-semibold transition-colors ${
                  isDienstenActive ? 'text-amber-700 bg-amber-50' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                Diensten
                <ChevronDown className={`w-4 h-4 opacity-60 transition-transform duration-200 ${mobileDienstenOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileDienstenOpen && (
                <div className="mt-1 ml-3 pl-3 border-l-2 border-primary/25 space-y-0.5">
                  {DIENSTEN.map(item => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium transition-colors ${
                        location.pathname === item.path
                          ? 'text-amber-700 bg-amber-50'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      <item.icon className="w-4 h-4 text-primary shrink-0" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Remaining nav items */}
            {NAV_ITEMS.filter(i => i.path !== '/').map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center px-4 py-3 rounded-xl text-[15px] font-semibold transition-colors ${
                  location.pathname === item.path ? 'text-amber-700 bg-amber-50' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* CTA */}
            <div className="pt-4 mt-2 border-t border-slate-100">
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 text-[15px] shadow-md shadow-primary/20"
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