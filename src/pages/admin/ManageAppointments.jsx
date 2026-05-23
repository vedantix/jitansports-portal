import { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Calendar } from 'lucide-react';

const STATUS_COLORS = {
  nieuw: 'bg-amber-100 text-amber-800',
  bevestigd: 'bg-green-100 text-green-800',
  geannuleerd: 'bg-red-100 text-red-800',
  afgerond: 'bg-gray-100 text-gray-600',
};

const FILTERS = ['all', 'nieuw', 'bevestigd', 'geannuleerd', 'afgerond'];

export default function ManageAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    base44.entities.Appointment.list('-created_date', 100).then(data => {
      setAppointments(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  };

  useEffect(load, []);

  const updateStatus = async (id, status) => {
    await base44.entities.Appointment.update(id, { status });
    load();
  };

  const deleteAppointment = async (id) => {
    if (window.confirm('Afspraak definitief verwijderen?')) {
      await base44.entities.Appointment.delete(id);
      load();
    }
  };

  const filtered = filter === 'all' ? appointments : appointments.filter(a => a.status === filter);

  return (
    <div>
      <h1 className="text-2xl font-bold text-secondary mb-6">Afspraken beheren</h1>

      <div className="flex gap-2 mb-6 flex-wrap">
        {FILTERS.map(s => {
          const count = s === 'all' ? appointments.length : appointments.filter(a => a.status === s).length;
          return (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === s ? 'bg-secondary text-white' : 'bg-white border border-border hover:bg-muted'
              }`}
            >
              {s === 'all' ? 'Alle' : s.charAt(0).toUpperCase() + s.slice(1)}
              <span className="ml-1.5 text-xs opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(apt => (
            <div key={apt.id} className="bg-white rounded-2xl p-5 border border-border">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <p className="font-semibold text-secondary">{apt.name}</p>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${STATUS_COLORS[apt.status] || 'bg-gray-100'}`}>
                      {apt.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    <strong>{apt.service}</strong> · {apt.date} om {apt.time}
                  </p>
                  <p className="text-sm text-muted-foreground">{apt.email} · {apt.phone}</p>
                  {apt.message && (
                    <p className="text-sm text-foreground mt-2 bg-muted/50 rounded-lg px-3 py-2 italic">
                      "{apt.message}"
                    </p>
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {apt.status !== 'bevestigd' && (
                    <button
                      onClick={() => updateStatus(apt.id, 'bevestigd')}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-green-100 text-green-800 hover:bg-green-200 transition-colors"
                    >
                      Bevestigen
                    </button>
                  )}
                  {apt.status !== 'afgerond' && apt.status !== 'geannuleerd' && (
                    <button
                      onClick={() => updateStatus(apt.id, 'afgerond')}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      Afronden
                    </button>
                  )}
                  {apt.status !== 'geannuleerd' && (
                    <button
                      onClick={() => updateStatus(apt.id, 'geannuleerd')}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
                    >
                      Annuleren
                    </button>
                  )}
                  <button
                    onClick={() => deleteAppointment(apt.id)}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                  >
                    Verwijderen
                  </button>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <Calendar className="w-12 h-12 mx-auto mb-3 opacity-20" />
              <p>Geen afspraken gevonden</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}