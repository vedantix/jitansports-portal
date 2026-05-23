import { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Star, Trash2, Eye, EyeOff, Plus, Edit } from 'lucide-react';

const EMPTY = { name: '', city: '', rating: 5, text: '', service: '', visible: true };

export default function ManageReviews() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);

  const load = () => {
    base44.entities.Review.list('-created_date').then(data => {
      setReviews(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  };

  useEffect(load, []);

  const save = async () => {
    if (form.id) {
      await base44.entities.Review.update(form.id, form);
    } else {
      await base44.entities.Review.create(form);
    }
    setForm(null);
    load();
  };

  const toggleVisible = async (r) => {
    await base44.entities.Review.update(r.id, { visible: !r.visible });
    load();
  };

  const deleteReview = async (id) => {
    if (window.confirm('Review verwijderen?')) {
      await base44.entities.Review.delete(id);
      load();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary">Reviews beheren</h1>
        <button
          onClick={() => setForm(EMPTY)}
          className="bg-secondary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-secondary/90 flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" /> Review toevoegen
        </button>
      </div>

      {form && (
        <div className="bg-white rounded-2xl p-6 border border-border mb-6">
          <h2 className="font-semibold text-secondary mb-4">{form.id ? 'Review bewerken' : 'Nieuwe review'}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <input
              value={form.name}
              onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
              placeholder="Naam klant *"
              className="border border-border rounded-lg px-3 py-2 text-sm"
            />
            <input
              value={form.city || ''}
              onChange={e => setForm(p => ({ ...p, city: e.target.value }))}
              placeholder="Woonplaats (bijv. omgeving Den Bosch)"
              className="border border-border rounded-lg px-3 py-2 text-sm"
            />
            <input
              value={form.service || ''}
              onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
              placeholder="Dienst (bijv. Personal Training)"
              className="border border-border rounded-lg px-3 py-2 text-sm"
            />
            <select
              value={form.rating}
              onChange={e => setForm(p => ({ ...p, rating: Number(e.target.value) }))}
              className="border border-border rounded-lg px-3 py-2 text-sm"
            >
              {[5, 4, 3, 2, 1].map(n => (
                <option key={n} value={n}>{n} {n === 1 ? 'ster' : 'sterren'}</option>
              ))}
            </select>
          </div>
          <textarea
            value={form.text}
            onChange={e => setForm(p => ({ ...p, text: e.target.value }))}
            placeholder="Review tekst *"
            rows={3}
            className="w-full border border-border rounded-lg px-3 py-2 text-sm mb-3 resize-none"
          />
          <div className="flex gap-2">
            <button onClick={save} className="bg-secondary text-white px-5 py-2 rounded-xl text-sm font-medium">Opslaan</button>
            <button onClick={() => setForm(null)} className="border border-border px-5 py-2 rounded-xl text-sm font-medium">Annuleren</button>
          </div>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="space-y-3">
          {reviews.map(r => (
            <div key={r.id} className={`bg-white rounded-2xl p-5 border border-border transition-opacity ${!r.visible ? 'opacity-55' : ''}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-semibold text-secondary">{r.name}</span>
                    {r.city && <span className="text-muted-foreground text-sm">– {r.city}</span>}
                    <div className="flex gap-0.5">
                      {[...Array(r.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                      ))}
                    </div>
                    {!r.visible && <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Verborgen</span>}
                  </div>
                  {r.service && <p className="text-xs text-muted-foreground mb-1.5">{r.service}</p>}
                  <p className="text-sm text-foreground italic">"{r.text}"</p>
                </div>
                <div className="flex gap-1 flex-shrink-0">
                  <button onClick={() => setForm(r)} className="p-2 hover:bg-muted rounded-lg transition-colors" title="Bewerken">
                    <Edit className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button onClick={() => toggleVisible(r)} className="p-2 hover:bg-muted rounded-lg transition-colors" title="Zichtbaarheid">
                    {r.visible ? <Eye className="w-4 h-4 text-green-500" /> : <EyeOff className="w-4 h-4 text-gray-400" />}
                  </button>
                  <button onClick={() => deleteReview(r.id)} className="p-2 hover:bg-red-50 rounded-lg transition-colors" title="Verwijderen">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {reviews.length === 0 && <p className="text-center text-muted-foreground py-12">Nog geen reviews</p>}
        </div>
      )}
    </div>
  );
}
