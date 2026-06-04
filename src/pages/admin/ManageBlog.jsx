import { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Plus, Trash2, Edit, Eye, ImagePlus, Upload, X } from 'lucide-react';

const CATEGORIES = ['Personal Training', 'Massage', 'Voeding', 'Lifestyle', 'Nieuws'];
const IMAGE_FORMATS = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
const EMPTY_POST = {
  title: '', slug: '', excerpt: '', content: '', category: 'Personal Training',
  status: 'concept', author: 'JitanSports', meta_description: '', featuredImage: '', featured_image: '', tags: '',
};

function slugify(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default function ManageBlog() {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  const load = () => {
    base44.entities.Blog.list('-created_date').then(data => {
      setPosts(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  };

  useEffect(load, []);

  const normalizePost = (post) => ({
    ...post,
    featuredImage: post.featuredImage || post.featured_image || '',
    featured_image: post.featured_image || post.featuredImage || '',
  });

  const updateFeaturedImage = (url) => {
    setEditPost((previous) => ({ ...previous, featuredImage: url, featured_image: url }));
  };

  const uploadFeaturedImage = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    if (!IMAGE_FORMATS.includes(file.type)) {
      window.alert('Gebruik een jpg, jpeg, png of webp afbeelding.');
      return;
    }

    setUploadingImage(true);
    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      updateFeaturedImage(file_url);
    } finally {
      setUploadingImage(false);
    }
  };

  const save = async () => {
    setSaving(true);
    try {
      const data = { ...editPost };
      if (!data.slug && data.title) data.slug = slugify(data.title);
      data.featuredImage = data.featuredImage || data.featured_image || '';
      data.featured_image = data.featuredImage;
      if (editPost.id) {
        await base44.entities.Blog.update(editPost.id, data);
      } else {
        await base44.entities.Blog.create(data);
      }
      setEditPost(null);
      load();
    } finally {
      setSaving(false);
    }
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
          <div className="rounded-2xl border border-border bg-muted/20 p-4">
            <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <label className="block text-sm font-medium">Featured image</label>
                <p className="text-xs text-muted-foreground">Ondersteund: jpg, jpeg, png, webp. Wordt boven het artikel en als social image gebruikt.</p>
              </div>
              {editPost.featuredImage && (
                <button
                  type="button"
                  onClick={() => updateFeaturedImage('')}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-semibold text-muted-foreground transition hover:bg-white hover:text-red-600"
                >
                  <X className="h-3.5 w-3.5" /> Verwijderen
                </button>
              )}
            </div>
            <div className="grid gap-4 lg:grid-cols-[1fr_240px]">
              <div className="space-y-3">
                <div className="flex flex-col gap-2 sm:flex-row">
                  <input
                    value={editPost.featuredImage || ''}
                    onChange={e => updateFeaturedImage(e.target.value)}
                    placeholder="https://... of upload een afbeelding"
                    className="min-w-0 flex-1 border border-border rounded-lg px-3 py-2.5 text-sm"
                  />
                  <label className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-secondary/90 ${uploadingImage ? 'pointer-events-none opacity-60' : ''}`}>
                    {uploadingImage ? (
                      <>
                        <Upload className="h-4 w-4 animate-pulse" /> Uploaden
                      </>
                    ) : (
                      <>
                        <ImagePlus className="h-4 w-4" /> Upload
                      </>
                    )}
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
                      className="hidden"
                      onChange={uploadFeaturedImage}
                    />
                  </label>
                </div>
                <p className="text-xs text-muted-foreground">
                  Tip: gebruik een horizontale foto. De blogdetailpagina toont maximaal 500px hoog op desktop en 300px op mobiel.
                </p>
              </div>
              <div className="overflow-hidden rounded-xl border border-border bg-white">
                {editPost.featuredImage ? (
                  <img src={editPost.featuredImage} alt="Featured image preview" className="h-36 w-full object-cover" />
                ) : (
                  <div className="flex h-36 flex-col items-center justify-center text-center text-muted-foreground">
                    <ImagePlus className="mb-2 h-8 w-8 opacity-40" />
                    <p className="text-xs">Geen afbeelding geselecteerd</p>
                  </div>
                )}
              </div>
            </div>
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
                <div className="flex min-w-0 flex-1 items-center gap-4">
                  {(post.featuredImage || post.featured_image) && (
                    <img
                      src={post.featuredImage || post.featured_image}
                      alt=""
                      className="hidden h-14 w-20 rounded-lg object-cover sm:block"
                    />
                  )}
                  <div className="min-w-0">
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
                </div>
                <div className="flex gap-1 flex-shrink-0">
                  <button onClick={() => setEditPost(normalizePost(post))} className="p-2 hover:bg-muted rounded-lg transition-colors" title="Bewerken">
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
