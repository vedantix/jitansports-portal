import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import {
  Calendar, Star, FileText, DollarSign, HelpCircle, Image,
  Clock, LayoutDashboard, Menu, X, LogOut, PanelsTopLeft, LockKeyhole
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import SEO from '@/components/SEO';

const NAV_LINKS = [
  { path: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { path: '/admin/appointments', label: 'Afspraken', icon: Calendar },
  { path: '/admin/availability', label: 'Beschikbaarheid', icon: Clock },
  { path: '/admin/content', label: 'Website content', icon: PanelsTopLeft },
  { path: '/admin/reviews', label: 'Reviews', icon: Star },
  { path: '/admin/blog', label: 'Blog', icon: FileText },
  { path: '/admin/pricing', label: 'Tarieven', icon: DollarSign },
  { path: '/admin/faq', label: 'FAQ', icon: HelpCircle },
  { path: '/admin/gallery', label: 'Galerij', icon: Image },
];

export default function AdminLayout() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    base44.auth.me().then(setUser).catch(() => {}).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user || user.role !== 'admin') {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4 text-center px-4">
        <Logo />
        <div className="w-16 h-16 bg-primary/15 rounded-lg flex items-center justify-center mb-2 text-primary">
          <LockKeyhole className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-secondary">{user ? 'Geen toegang' : 'Admin login vereist'}</h1>
        <p className="max-w-sm text-muted-foreground">
          {user
            ? 'Je account heeft geen beheerdersrechten om deze pagina te bekijken.'
            : 'Log in met een adminaccount om afspraken, content, afbeeldingen en beschikbaarheid te beheren.'}
        </p>
        {!user && (
          <Button
            onClick={() => base44.auth.redirectToLogin(`${window.location.origin}/admin`)}
            className="bg-secondary text-white hover:bg-secondary/90"
          >
            Inloggen als admin
          </Button>
        )}
        <Link to="/" className="text-primary hover:underline font-medium">Terug naar website</Link>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SEO
        title="Admin Paneel | JitanSports"
        description="Beheerpaneel voor JitanSports."
        path={location.pathname}
        noindex
      />
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <aside className={`fixed top-0 left-0 h-full w-64 bg-secondary text-white z-30 flex flex-col transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-6 border-b border-white/10">
          <Logo tone="dark" />
          <p className="text-white/50 text-xs mt-3">Admin paneel</p>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {NAV_LINKS.map(link => {
            const active = link.exact
              ? location.pathname === link.path
              : location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  active ? 'bg-primary text-secondary shadow-sm' : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <link.icon className="w-4 h-4 flex-shrink-0" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10 space-y-1">
          <Link to="/" className="flex items-center gap-2 text-white/50 hover:text-white text-sm px-4 py-2 rounded-xl hover:bg-white/10 transition-colors">
            ← Website bekijken
          </Link>
          <button
            onClick={() => base44.auth.logout()}
            className="w-full flex items-center gap-2 text-white/50 hover:text-red-400 text-sm px-4 py-2 rounded-xl hover:bg-white/5 transition-colors"
          >
            <LogOut className="w-4 h-4" /> Uitloggen
          </button>
        </div>
      </aside>

      <div className="lg:ml-64 flex-1 flex flex-col min-h-screen">
        <header className="bg-white border-b border-border px-4 py-3 flex items-center gap-3 lg:hidden sticky top-0 z-10">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <span className="font-semibold text-secondary">Admin Paneel</span>
        </header>
        <main className="flex-1 p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
