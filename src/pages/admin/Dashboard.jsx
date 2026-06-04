import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { Calendar, FileText, Clock, Image, HelpCircle, DollarSign, PanelsTopLeft } from 'lucide-react';

export default function Dashboard() {
  const [stats, setStats] = useState({ upcoming: 0, newRequests: 0, blogs: 0 });
  const [recentAppointments, setRecentAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    Promise.all([
      base44.entities.Appointment.list('-created_date', 50),
      base44.entities.Blog.filter({ status: 'gepubliceerd' }),
    ]).then(([appointments, blogs]) => {
      const upcoming = appointments.filter(a => a.date >= today && a.status !== 'geannuleerd');
      setStats({
        upcoming: upcoming.length,
        newRequests: appointments.filter(a => a.status === 'nieuw').length,
        blogs: blogs.length,
      });
      setRecentAppointments(appointments.slice(0, 5));
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const STATUS_COLOR = {
    nieuw: 'bg-amber-100 text-amber-800',
    bevestigd: 'bg-green-100 text-green-800',
    geannuleerd: 'bg-red-100 text-red-800',
    afgerond: 'bg-gray-100 text-gray-600',
  };

  const STAT_CARDS = [
    { label: 'Aankomende afspraken', value: stats.upcoming, icon: Calendar, link: '/admin/appointments', color: 'text-blue-500 bg-blue-50' },
    { label: 'Nieuwe aanvragen', value: stats.newRequests, icon: Clock, link: '/admin/appointments', color: 'text-amber-500 bg-amber-50' },
    { label: 'Gepubliceerde blogs', value: stats.blogs, icon: FileText, link: '/admin/blog', color: 'text-purple-500 bg-purple-50' },
  ];

  const QUICK_LINKS = [
    { title: 'Website content', desc: 'Pas teksten, CTA en SEO aan', link: '/admin/content', icon: PanelsTopLeft },
    { title: 'Beschikbaarheid', desc: 'Beheer werktijden en vakanties', link: '/admin/availability', icon: Clock },
    { title: 'Tarieven', desc: 'Pas prijzen en pakketten aan', link: '/admin/pricing', icon: DollarSign },
    { title: 'FAQ', desc: 'Beheer veelgestelde vragen', link: '/admin/faq', icon: HelpCircle },
    { title: 'Galerij', desc: 'Upload en beheer foto\'s', link: '/admin/gallery', icon: Image },
  ];

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-secondary mb-1">Dashboard</h1>
      <p className="text-muted-foreground mb-8">Welkom terug bij het JitanSports beheerpaneel.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {STAT_CARDS.map(card => (
          <Link key={card.label} to={card.link} className="bg-white rounded-2xl p-5 border border-border hover:shadow-md transition-all">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${card.color}`}>
              <card.icon className="w-5 h-5" />
            </div>
            <p className="text-2xl font-bold text-secondary">{card.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{card.label}</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent appointments */}
        <div className="bg-white rounded-2xl p-5 border border-border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-secondary">Recente afspraken</h2>
            <Link to="/admin/appointments" className="text-primary text-xs hover:underline">Alle bekijken →</Link>
          </div>
          <div className="space-y-3">
            {recentAppointments.map(apt => (
              <div key={apt.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div>
                  <p className="text-sm font-medium text-secondary">{apt.name}</p>
                  <p className="text-xs text-muted-foreground">{apt.service} · {apt.date}</p>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${STATUS_COLOR[apt.status] || 'bg-gray-100'}`}>
                  {apt.status}
                </span>
              </div>
            ))}
            {recentAppointments.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-4">Nog geen afspraken</p>
            )}
          </div>
        </div>

        {/* Quick links */}
        <div className="bg-white rounded-2xl p-5 border border-border">
          <h2 className="font-semibold text-secondary mb-4">Snelle acties</h2>
          <div className="space-y-2">
            {QUICK_LINKS.map(item => (
              <Link
                key={item.title}
                to={item.link}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors"
              >
                <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-secondary">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
