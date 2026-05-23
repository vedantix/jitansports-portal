import { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Plus, Trash2 } from 'lucide-react';

const DAYS = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];

const DEFAULT_AVAIL = DAYS.map((_, i) => ({
  day_of_week: i,
  start_time: '09:00',
  end_time: '17:00',
  slot_duration: 60,
  is_active: i >= 1 && i <= 5,
}));

export default function ManageAvailability() {
  const [avail, setAvail] = useState(DEFAULT_AVAIL);
  const [blocked, setBlocked] = useState([]);
  const [newBlock, setNewBlock] = useState({ date: '', time: '', reason: '' });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    base44.entities.Availability.list('day_of_week').then(data => {
      if (data?.length) {
        setAvail(DEFAULT_AVAIL.map(d => data.find(a => a.day_of_week === d.day_of_week) || d));
      }
    }).catch(() => {});
    base44.entities.BlockedDate.list('-date').then(setBlocked).catch(() => {});
  }, []);

  const saveAvail = async () => {
    const existing = await base44.entities.Availability.list();
    for (const a of avail) {
      const found = existing.find(e => e.day_of_week === a.day_of_week);
      if (found) {
        await base44.entities.Availability.update(found.id, a);
      } else {
        await base44.entities.Availability.create(a);
      }
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const addBlock = async () => {
    if (!newBlock.date) return;
    const created = await base44.entities.BlockedDate.create(newBlock);
    setBlocked(prev => [created, ...prev]);
    setNewBlock({ date: '', time: '', reason: '' });
  };

  const removeBlock = async (id) => {
    await base44.entities.BlockedDate.delete(id);
    setBlocked(prev => prev.filter(b => b.id !== id));
  };

  const update = (i, field, value) => {
    setAvail(prev => {
      const next = [...prev];
      next[i] = { ...next[i], [field]: value };
      return next;
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-secondary mb-6">Beschikbaarheid beheren</h1>

      <div className="bg-white rounded-2xl p-6 border border-border mb-6">
        <h2 className="font-semibold text-secondary text-lg mb-5">Werktijden per dag</h2>
        <div className="space-y-3">
          {avail.map((a, i) => (
            <div key={a.day_of_week} className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 w-32">
                <input
                  type="checkbox"
                  checked={a.is_active}
                  onChange={e => update(i, 'is_active', e.target.checked)}
                  className="w-4 h-4 accent-primary"
                />
                <span className={`text-sm font-medium ${a.is_active ? 'text-secondary' : 'text-muted-foreground'}`}>
                  {DAYS[a.day_of_week]}
                </span>
              </div>
              {a.is_active && (
                <>
                  <input
                    type="time"
                    value={a.start_time}
                    onChange={e => update(i, 'start_time', e.target.value)}
                    className="border border-border rounded-lg px-3 py-1.5 text-sm w-28"
                  />
                  <span className="text-muted-foreground text-sm">tot</span>
                  <input
                    type="time"
                    value={a.end_time}
                    onChange={e => update(i, 'end_time', e.target.value)}
                    className="border border-border rounded-lg px-3 py-1.5 text-sm w-28"
                  />
                  <select
                    value={a.slot_duration}
                    onChange={e => update(i, 'slot_duration', Number(e.target.value))}
                    className="border border-border rounded-lg px-2 py-1.5 text-xs"
                  >
                    {[30, 45, 60, 90].map(d => (
                      <option key={d} value={d}>{d} min</option>
                    ))}
                  </select>
                </>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={saveAvail}
          className={`mt-6 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${
            saved ? 'bg-green-500 text-white' : 'bg-secondary text-white hover:bg-secondary/90'
          }`}
        >
          {saved ? 'Opgeslagen!' : 'Werktijden opslaan'}
        </button>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-border">
        <h2 className="font-semibold text-secondary text-lg mb-5">Geblokkeerde datums</h2>
        <div className="flex flex-wrap gap-2 mb-5">
          <input
            type="date"
            value={newBlock.date}
            onChange={e => setNewBlock(p => ({ ...p, date: e.target.value }))}
            className="border border-border rounded-lg px-3 py-2 text-sm"
          />
          <input
            type="time"
            value={newBlock.time}
            onChange={e => setNewBlock(p => ({ ...p, time: e.target.value }))}
            className="border border-border rounded-lg px-3 py-2 text-sm"
            placeholder="Tijd"
          />
          <input
            value={newBlock.reason}
            onChange={e => setNewBlock(p => ({ ...p, reason: e.target.value }))}
            placeholder="Reden (bijv. Vakantie)"
            className="border border-border rounded-lg px-3 py-2 text-sm flex-1 min-w-32"
          />
          <button
            onClick={addBlock}
            disabled={!newBlock.date}
            className="bg-secondary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary/90 disabled:opacity-50 flex items-center gap-1"
          >
            <Plus className="w-4 h-4" /> Blokkeren
          </button>
        </div>
        <div className="space-y-2">
          {blocked.map(b => (
            <div key={b.id} className="flex items-center justify-between px-4 py-3 bg-red-50 rounded-xl border border-red-100">
              <span className="text-sm text-secondary">
                <strong>{b.date}</strong>
                {b.time && ` om ${b.time}`}
                {b.reason && <span className="text-muted-foreground"> – {b.reason}</span>}
              </span>
              <button onClick={() => removeBlock(b.id)} className="p-1.5 hover:bg-red-100 rounded-lg transition-colors">
                <Trash2 className="w-4 h-4 text-red-500" />
              </button>
            </div>
          ))}
          {blocked.length === 0 && (
            <p className="text-muted-foreground text-sm text-center py-5">Geen geblokkeerde datums</p>
          )}
        </div>
      </div>
    </div>
  );
}