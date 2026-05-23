import { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Plus, Trash2, Edit } from 'lucide-react';

const CATEGORIES = ['Algemeen', 'Personal Training', 'Massage', 'Voeding', 'Get Fit', 'Tarieven'];
const EMPTY = { question: '', answer: '', category: 'Algemeen', order: 0 };

export default function ManageFAQ() {
  const [faqs, setFaqs] = useState([]);
  const [form, setForm] = useState(null);
  const [filterCat, setFilterCat] = useState('all');
  const [loading, setLoading] = useState(true);

  const load = () => {
    base44.entities.FAQ.list('order').then(data => {
      setFaqs(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  };

  useEffect(load, []);

  const save = async () => {
    if (form.id) {
      await base44.entities.FAQ.update(form.id, form);
    } else {
      await base44.entities.FAQ.create(form);
    }
    setForm(null);
    load();
  };

  const deleteFaq = async (id) => {
    if (window.confirm('Vraag verwijderen?')) {
      await base44.entities.FAQ.delete(id);
      load();
    }
  };

  const filtered = filterCat === 'all' ? faqs : faqs.filter(f => f.category === filterCat);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary">FAQ beheren</h1>
        <button
          onClick={() => setForm(EMPTY)}
          className="bg-secondary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-secondary/90 flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" /> Vraag toevoegen
        </button>
      </div>

      {form && (
        <div className="bg-white rounded-2xl p-6 border border-border mb-6">
          <h2 className="font-semibold text-secondary mb-4">{form.id ? 'Vraag bewerken' : 'Nieuwe vraag'}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <select
              value={form.category || 'Algemeen'}
              onChange={e => setForm(p => ({ ...p, category: e.target.value }))}
              className="border border-border rounded-lg px-3 py-2 text-sm"
            >
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <input
              type="number"
              value={form.order || 0}
              onChange={e => setForm(p => ({ ...p, order: Number(e.target.value) }))}
              placeholder="Volgorde (0 = bovenaan)"
              className="border border-border rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <input
            value={form.question}
            onChange={e => setForm(p => ({ ...p, question: e.target.value }))}
            placeholder="Vraag *"
            className="w-full border border-border rounded-lg px-3 py-2 text-sm mb-3"
          />
          <textarea
            value={form.answer}
            onChange={e => setForm(p => ({ ...p, answer: e.target.value }))}
            placeholder="Antwoord *"
            rows={4}
            className="w-full border border-border rounded-lg px-3 py-2 text-sm mb-3 resize-none"
          />
          <div className="flex gap-2">
            <button onClick={save} className="bg-secondary text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-secondary/90">Opslaan</button>
            <button onClick={() => setForm(null)} className="border border-border px-5 py-2 rounded-xl text-sm font-medium hover:bg-muted">Annuleren</button>
          </div>
        </div>
      )}

      <div className="flex gap-2 mb-5 flex-wrap">
        <button
          onClick={() => setFilterCat('all')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${filterCat === 'all' ? 'bg-secondary text-white' : 'bg-white border border-border hover:bg-muted'}`}
        >
          Alle ({faqs.length})
        </button>
        {CATEGORIES.map(c => {
          const count = faqs.filter(f => f.category === c).length;
          if (count === 0) return null;
          return (
            <button
              key={c}
              onClick={() => setFilterCat(c)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${filterCat === c ? 'bg-secondary text-white' : 'bg-white border border-border hover:bg-muted'}`}
            >
              {c} ({count})
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
          {filtered.map(faq => (
            <div key={faq.id} className="bg-white rounded-2xl p-5 border border-border">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{faq.category}</span>
                  <p className="font-semibold text-secondary mt-2 mb-1">{faq.question}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
                <div className="flex gap-1 flex-shrink-0">
                  <button onClick={() => setForm(faq)} className="p-2 hover:bg-muted rounded-lg transition-colors">
                    <Edit className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button onClick={() => deleteFaq(faq.id)} className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <p className="text-center text-muted-foreground py-12">Geen vragen gevonden.</p>}
        </div>
      )}
    </div>
  );
}