import { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Plus, Trash2, Edit } from 'lucide-react';

const EMPTY = { name: '', price: '', description: '', features: '', highlight: false, order: 0, cta_text: 'Plan Gratis Proefles' };

export default function ManagePricing() {
  const [plans, setPlans] = useState([]);
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);

  const load = () => {
    base44.entities.PricingPlan.list('order').then(data => {
      setPlans(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  };

  useEffect(load, []);

  const save = async () => {
    if (form.id) {
      await base44.entities.PricingPlan.update(form.id, form);
    } else {
      await base44.entities.PricingPlan.create(form);
    }
    setForm(null);
    load();
  };

  const deletePlan = async (id) => {
    if (window.confirm('Tarief verwijderen?')) {
      await base44.entities.PricingPlan.delete(id);
      load();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary">Tarieven beheren</h1>
        <button
          onClick={() => setForm(EMPTY)}
          className="bg-secondary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-secondary/90 flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" /> Tarief toevoegen
        </button>
      </div>

      {form && (
        <div className="bg-white rounded-2xl p-6 border border-border mb-6">
          <h2 className="font-semibold text-secondary mb-4">{form.id ? 'Tarief bewerken' : 'Nieuw tarief'}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <input
              value={form.name}
              onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
              placeholder="Naam * (bijv. Personal Training)"
              className="border border-border rounded-lg px-3 py-2 text-sm"
            />
            <input
              value={form.price}
              onChange={e => setForm(p => ({ ...p, price: e.target.value }))}
              placeholder="Prijs * (bijv. €65 per sessie)"
              className="border border-border rounded-lg px-3 py-2 text-sm"
            />
            <input
              type="number"
              value={form.order}
              onChange={e => setForm(p => ({ ...p, order: Number(e.target.value) }))}
              placeholder="Volgorde (0, 1, 2...)"
              className="border border-border rounded-lg px-3 py-2 text-sm"
            />
            <input
              value={form.cta_text || ''}
              onChange={e => setForm(p => ({ ...p, cta_text: e.target.value }))}
              placeholder="Knoptekst"
              className="border border-border rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <textarea
            value={form.description || ''}
            onChange={e => setForm(p => ({ ...p, description: e.target.value }))}
            placeholder="Korte beschrijving"
            rows={2}
            className="w-full border border-border rounded-lg px-3 py-2 text-sm mb-3 resize-none"
          />
          <textarea
            value={form.features || ''}
            onChange={e => setForm(p => ({ ...p, features: e.target.value }))}
            placeholder="Kenmerken (één per regel)&#10;Bijv:&#10;60 minuten training&#10;Voedingsadvies inbegrepen"
            rows={5}
            className="w-full border border-border rounded-lg px-3 py-2 text-sm mb-3 resize-y font-mono"
          />
          <label className="flex items-center gap-2 text-sm mb-4 cursor-pointer">
            <input
              type="checkbox"
              checked={form.highlight}
              onChange={e => setForm(p => ({ ...p, highlight: e.target.checked }))}
              className="w-4 h-4 accent-primary"
            />
            <span>Uitgelicht (Aanbevolen plan)</span>
          </label>
          <div className="flex gap-2">
            <button onClick={save} className="bg-secondary text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-secondary/90">Opslaan</button>
            <button onClick={() => setForm(null)} className="border border-border px-5 py-2 rounded-xl text-sm font-medium hover:bg-muted">Annuleren</button>
          </div>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="space-y-3">
          {plans.map(plan => (
            <div key={plan.id} className={`bg-white rounded-2xl p-5 border-2 ${plan.highlight ? 'border-primary' : 'border-border'}`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-secondary text-lg">{plan.name}</span>
                    {plan.highlight && (
                      <span className="bg-primary text-secondary text-xs font-bold px-2 py-0.5 rounded-full">Aanbevolen</span>
                    )}
                  </div>
                  <p className="text-primary font-semibold text-base">{plan.price}</p>
                  {plan.description && <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>}
                  {plan.features && (
                    <ul className="mt-2 space-y-0.5">
                      {plan.features.split('\n').filter(Boolean).map((f, i) => (
                        <li key={i} className="text-xs text-muted-foreground">· {f}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="flex gap-1 flex-shrink-0">
                  <button onClick={() => setForm(plan)} className="p-2 hover:bg-muted rounded-lg transition-colors">
                    <Edit className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button onClick={() => deletePlan(plan.id)} className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {plans.length === 0 && <p className="text-center text-muted-foreground py-12">Nog geen tarieven aangemaakt.</p>}
        </div>
      )}
    </div>
  );
}