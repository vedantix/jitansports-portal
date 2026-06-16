import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { aboutItems, homeItem, secondaryNavItems, serviceItems } from '@/config/navigation';

function DesktopDropdown({ id, label, items, isActive, activeMenu, setActiveMenu, currentPath }) {
  const isOpen = activeMenu === id;

  const closeOnBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setActiveMenu(null);
    }
  };

  return (
    <div
      className="relative"
      onBlur={closeOnBlur}
      onMouseEnter={() => setActiveMenu(id)}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <button
        type="button"
        className={`inline-flex h-11 items-center gap-1 rounded-lg px-3 text-sm font-semibold transition-colors ${
          isActive
            ? 'text-amber-700 bg-primary/10'
            : 'text-foreground/70 hover:text-foreground hover:bg-muted'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={() => setActiveMenu(isOpen ? null : id)}
        onFocus={() => setActiveMenu(id)}
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`absolute left-0 top-full pt-2 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="w-60 rounded-lg border border-border bg-white p-2 shadow-xl" role="menu">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              role="menuitem"
              className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                currentPath === item.path ? 'text-amber-700' : 'text-foreground'
              }`}
              onClick={() => setActiveMenu(null)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();
  const servicesActive = serviceItems.some((item) => location.pathname === item.path);
  const aboutActive = aboutItems.some((item) => location.pathname === item.path);

  useEffect(() => {
    setOpen(false);
    setActiveMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    if (!open && !activeMenu) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        setActiveMenu(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    if (open) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, activeMenu]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border/60 bg-white/95 shadow-sm backdrop-blur-md" aria-label="Hoofdnavigatie">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex h-14 items-center justify-between gap-5 md:h-24">
            <Logo onClick={() => setOpen(false)} />

            {/* Desktop nav */}
            <div className="hidden min-w-0 items-center justify-end gap-1 xl:flex">
              {homeItem && (
                <Link
                  to={homeItem.path}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                    location.pathname === homeItem.path
                      ? 'text-amber-700 bg-primary/10'
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {homeItem.label}
                </Link>
              )}
              <DesktopDropdown
                id="services"
                label="Diensten"
                items={serviceItems}
                isActive={servicesActive}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                currentPath={location.pathname}
              />
              <DesktopDropdown
                id="about"
                label="Over Jitan"
                items={aboutItems}
                isActive={aboutActive}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                currentPath={location.pathname}
              />
              {secondaryNavItems.map(item => (
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
      </nav>

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
            <div className="flex h-14 items-center justify-between border-b border-border px-4 md:h-24">
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
              {homeItem && (
                <div className="mb-5 space-y-1">
                  <Link
                    to={homeItem.path}
                    className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      location.pathname === homeItem.path
                        ? 'text-amber-700 bg-primary/10'
                        : 'text-foreground/70 hover:bg-muted'
                    }`}
                  >
                    {homeItem.label}
                  </Link>
                </div>
              )}
              <p className="mb-2 px-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Diensten</p>
              <div className="space-y-1">
                {serviceItems.map(item => (
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
                {aboutItems.map(item => (
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
                {secondaryNavItems.map(item => (
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
    </>
  );
}