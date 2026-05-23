import { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Plus, Trash2, Edit, Eye } from 'lucide-react';

const CATEGORIES = ['Personal Training', 'Massage', 'Voeding', 'Lifestyle', 'Nieuws'];
const EMPTY_POST = {
  title: '', slug: '', excerpt: '', content: '', category: 'Personal Training',
  status: 'concept', author: 'JitanSports', meta_description: '', featured_image: '', tags: '',
};

function slugify(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default function ManageBlog() {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const load = () => {
    base44.entities.Blog.list('-created_date').then(data => {
      setPosts(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  };

  useEffect(load, []);

  const save = async () => {
    setSaving(true);
    const data = { ...editPost };
    if (!data.slug && data.title) data.slug = slugify(data.title);
    if (editPost.id) {
      await base44.entities.Blog.update(editPost.id, data);
    } else {
      await base44.entities.Blog.create(data);
    }
    setEditPost(null);
    setSaving(false);
    load();
  };

  const toggleStatus = async (post) => {
    const newStatus = post.status === 'gepubliceerd' ? 'concept' : 'gepubliceerd';
    await base44.entities.Blog.update(post.id, { status: newStatus });
    load();
  };

  const deletePost = async (id) => {
    if (window.confirm('Artikel definitief verwijderen?')) {
      await base44.entities.Blog.delete(id);
      load();
    }
  };

  if (editPost) {
    return (
      <div>
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => setEditPost(null)} className="text-muted-foreground hover:text-foreground text-sm transition-colors">← Terug</button>
          <h1 className="text-2xl font-bold text-secondary">{editPost.id ? 'Artikel bewerken' : 'Nieuw artikel'}</h1>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-border space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">Titel *</label>
              <input
                value={editPost.title}
                onChange={e => setEditPost(p => ({ ...p, title: e.target.value }))}
                className="w-full border border-border rounded-lg px-3 py-2.5 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Slug (URL)</label>
              <input
                value={editPost.slug || ''}
                onChange={e => setEditPost(p => ({ ...p, slug: e.target.value }))}
                placeholder="auto-gegenereerd uit titel"
                className="w-full border border-border rounded-lg px-3 py-2.5 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Categorie</label>
              <select
                value={editPost.category || ''}
                onChange={e => setEditPost(p => ({ ...p, category: e.target.value }))}
                className="w-full border border-border rounded-lg px-3 py-2.5 text-sm"
              >
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Status</label>
              <select
                value={editPost.status}
                onChange={e => setEditPost(p => ({ ...p, status: e.target.value }))}
                className="w-full border border-border rounded-lg px-3 py-2.5 text-sm"
              >
                <option value="concept">Concept</option>
                <option value="gepubliceerd">Gepubliceerd</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Auteur</label>
              <input
                value={editPost.author || ''}
                onChange={e => setEditPost(p => ({ ...p, author: e.target.value }))}
                className="w-full border border-border rounded-lg px-3 py-2.5 text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Samenvatting</label>
            <textarea
              value={editPost.excerpt || ''}
              onChange={e => setEditPost(p => ({ ...p, excerpt: e.target.value }))}
              rows={2}
              className="w-full border border-border rounded-lg px-3 py-2.5 text-sm resize-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Inhoud * <span className="text-muted-foreground font-normal">(Markdown ondersteund)</span></label>
            <textarea
              value={editPost.content}
              onChange={e => setEditPost(p => ({ ...p, content: e.target.value }))}
              rows={14}
              className="w-full border border-border rounded-lg px-3 py-2.5 text-sm font-mono resize-y"
              placeholder="Schrijf hier de inhoud van het artikel..."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Featured Image URL</label>
              <input
                value={editPost.featured_image || ''}
                onChange={e => setEditPost(p => ({ ...p, featured_image: e.target.value }))}
                placeholder="https://..."
                className="w-full border border-border rounded-lg px-3 py-2.5 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tags</label>
              <input
                value={editPost.tags || ''}
                onChange={e => setEditPost(p => ({ ...p, tags: e.target.value }))}
                placeholder="bijv. afvallen, training, gezond"
                className="w-full border border-border rounded-lg px-3 py-2.5 text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Meta beschrijving (SEO) <span className="text-muted-foreground font-normal">max. 160 tekens</span></label>
            <textarea
              value={editPost.meta_description || ''}
              onChange={e => setEditPost(p => ({ ...p, meta_description: e.target.value }))}
              rows={2}
              maxLength={160}
              className="w-full border border-border rounded-lg px-3 py-2.5 text-sm resize-none"
            />
            <p className="text-xs text-muted-foreground mt-1">{(editPost.meta_description || '').length}/160 tekens</p>
          </div>
          <div className="flex gap-2 pt-2">
            <button
              onClick={save}
              disabled={saving || !editPost.title}
              className="bg-secondary text-white px-6 py-2.5 rounded-xl text-sm font-medium disabled:opacity-50 hover:bg-secondary/90 transition-colors"
            >
              {saving ? 'Opslaan...' : 'Artikel opslaan'}
            </button>
            <button onClick={() => setEditPost(null)} className="border border-border px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-muted transition-colors">
              Annuleren
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary">Blog beheren</h1>
        <button
          onClick={() => setEditPost(EMPTY_POST)}
          className="bg-secondary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-secondary/90 flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" /> Nieuw artikel
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-2xl p-5 border border-border">
              <div className="flex items-center gap-3 justify-between flex-wrap">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-semibold text-secondary truncate">{post.title}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${
                      post.status === 'gepubliceerd' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {post.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {post.category} · {post.author} · {new Date(post.created_date).toLocaleDateString('nl-NL')}
                  </p>
                </div>
                <div className="flex gap-1 flex-shrink-0">
                  <button onClick={() => setEditPost(post)} className="p-2 hover:bg-muted rounded-lg transition-colors" title="Bewerken">
                    <Edit className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button onClick={() => toggleStatus(post)} className="p-2 hover:bg-muted rounded-lg transition-colors" title="Status wisselen">
                    <Eye className={`w-4 h-4 ${post.status === 'gepubliceerd' ? 'text-green-500' : 'text-gray-400'}`} />
                  </button>
                  <button onClick={() => deletePost(post.id)} className="p-2 hover:bg-red-50 rounded-lg transition-colors" title="Verwijderen">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {posts.length === 0 && <p className="text-center text-muted-foreground py-12">Nog geen artikelen. Maak een nieuw artikel aan.</p>}
        </div>
      )}
    </div>
  );
}