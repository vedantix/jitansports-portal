import { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Upload, Trash2, Eye, EyeOff } from 'lucide-react';

export default function ManageGallery() {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  const load = () => {
    base44.entities.GalleryImage.list('order').then(data => {
      setImages(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  };

  useEffect(load, []);

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    await base44.entities.GalleryImage.create({
      image_url: file_url,
      title: file.name.replace(/\.[^.]+$/, ''),
      visible: true,
      order: images.length + 1,
    });
    setUploading(false);
    load();
    e.target.value = '';
  };

  const deleteImage = async (id) => {
    if (window.confirm('Afbeelding verwijderen?')) {
      await base44.entities.GalleryImage.delete(id);
      load();
    }
  };

  const toggleVisible = async (img) => {
    await base44.entities.GalleryImage.update(img.id, { visible: !img.visible });
    load();
  };

  const updateOrder = async (img, newOrder) => {
    await base44.entities.GalleryImage.update(img.id, { order: newOrder });
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-secondary">Galerij beheren</h1>
          <p className="text-sm text-muted-foreground mt-1">{images.length} foto's · {images.filter(i => i.visible).length} zichtbaar</p>
        </div>
        <label className={`bg-secondary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-secondary/90 flex items-center gap-1.5 cursor-pointer transition-colors ${uploading ? 'opacity-50 pointer-events-none' : ''}`}>
          <Upload className="w-4 h-4" />
          {uploading ? 'Uploaden...' : 'Foto uploaden'}
          <input type="file" accept="image/*" onChange={uploadImage} className="hidden" />
        </label>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <>
          {images.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <Upload className="w-12 h-12 mx-auto mb-3 opacity-20" />
              <p className="font-medium">Nog geen foto's</p>
              <p className="text-sm mt-1">Upload de eerste foto via de knop rechtsboven.</p>
            </div>
          )}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map(img => (
              <div key={img.id} className={`relative group rounded-xl overflow-hidden border-2 ${img.visible ? 'border-border' : 'border-dashed border-gray-300 opacity-60'}`}>
                <img src={img.image_url} alt={img.title} className="w-full h-36 object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => toggleVisible(img)}
                    className="p-2 bg-white rounded-lg shadow transition-transform hover:scale-110"
                    title={img.visible ? 'Verbergen' : 'Tonen'}
                  >
                    {img.visible ? <Eye className="w-4 h-4 text-green-600" /> : <EyeOff className="w-4 h-4 text-gray-500" />}
                  </button>
                  <button
                    onClick={() => deleteImage(img.id)}
                    className="p-2 bg-red-500 text-white rounded-lg shadow transition-transform hover:scale-110"
                    title="Verwijderen"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-2">
                  <p className="text-xs text-muted-foreground truncate">{img.title || 'Zonder naam'}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-xs text-muted-foreground">Volgorde:</span>
                    <input
                      type="number"
                      value={img.order || 0}
                      onChange={e => updateOrder(img, Number(e.target.value))}
                      className="w-12 text-xs border border-border rounded px-1 py-0.5"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}