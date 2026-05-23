import { useEffect, useMemo, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { CONTENT_FIELDS, DEFAULT_SITE_CONTENT, flattenContentFields } from '@/lib/siteContent';
import { CheckCircle, ImagePlus, Save, Upload } from 'lucide-react';

export default function ManageContent() {
  const defaults = useMemo(() => flattenContentFields().map((field) => ({ ...field, id: null })), []);
  const [fields, setFields] = useState(defaults);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [uploadingKey, setUploadingKey] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const rows = base44.entities?.SiteContent
          ? await base44.entities.SiteContent.list('order')
          : [];
        const byKey = new Map(rows.map((row) => [row.key, row]));
        if (!mounted) return;
        setFields(
          defaults.map((field) => ({
            ...field,
            id: byKey.get(field.key)?.id,
            value: byKey.get(field.key)?.value ?? DEFAULT_SITE_CONTENT[field.key] ?? '',
          }))
        );
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, [defaults]);

  const updateField = (key, value) => {
    setFields((prev) => prev.map((field) => (field.key === key ? { ...field, value } : field)));
  };

  const uploadImage = async (field, file) => {
    if (!file) return;
    setUploadingKey(field.key);
    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      updateField(field.key, file_url);
    } finally {
      setUploadingKey(null);
    }
  };

  const save = async () => {
    setSaving(true);
    try {
      for (const field of fields) {
        const payload = {
          key: field.key,
          label: field.label,
          group: field.group,
          type: field.type,
          value: field.value || '',
          order: field.order || 0,
        };

        if (field.id) {
          await base44.entities.SiteContent.update(field.id, payload);
        } else {
          const created = await base44.entities.SiteContent.create(payload);
          field.id = created.id;
        }
      }
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } finally {
      setSaving(false);
    }
  };

  const renderField = (field) => {
    if (field.type === 'textarea') {
      return (
        <textarea
          value={field.value || ''}
          onChange={(event) => updateField(field.key, event.target.value)}
          rows={3}
          className="w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-primary"
        />
      );
    }

    if (field.type === 'image_url') {
      return (
        <div className="space-y-3">
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              type="url"
              value={field.value || ''}
              onChange={(event) => updateField(field.key, event.target.value)}
              placeholder="https://..."
              className="min-w-0 flex-1 rounded-lg border border-border px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-primary"
            />
            <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-secondary/90">
              {uploadingKey === field.key ? (
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
                accept="image/*"
                className="hidden"
                onChange={(event) => uploadImage(field, event.target.files?.[0])}
              />
            </label>
          </div>
          {field.value && (
            <img
              src={field.value}
              alt=""
              className="h-28 w-full rounded-lg border border-border object-cover sm:w-56"
              loading="lazy"
            />
          )}
        </div>
      );
    }

    return (
      <input
        type={field.type === 'tel' ? 'tel' : field.type === 'email' ? 'email' : field.type === 'url' ? 'url' : 'text'}
        value={field.value || ''}
        onChange={(event) => updateField(field.key, event.target.value)}
        className="w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-primary"
      />
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-secondary">Website content beheren</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Pas algemene teksten, CTA's, contactgegevens, SEO en hoofdafbeeldingen aan.
          </p>
        </div>
        <button
          onClick={save}
          disabled={saving}
          className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
            saved ? 'bg-green-500 text-white' : 'bg-secondary text-white hover:bg-secondary/90'
          } disabled:opacity-60`}
        >
          {saved ? <CheckCircle className="h-4 w-4" /> : <Save className="h-4 w-4" />}
          {saving ? 'Opslaan...' : saved ? 'Opgeslagen' : 'Alles opslaan'}
        </button>
      </div>

      <div className="space-y-6">
        {CONTENT_FIELDS.map((section) => {
          const sectionFields = fields.filter((field) => field.group === section.group);

          return (
            <section key={section.group} className="rounded-lg border border-border bg-white p-5">
              <h2 className="mb-4 text-lg font-semibold text-secondary">{section.group}</h2>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {sectionFields.map((field) => (
                  <div key={field.key} className={field.type === 'textarea' || field.type === 'image_url' ? 'lg:col-span-2' : ''}>
                    <label className="mb-1.5 block text-sm font-medium text-secondary">{field.label}</label>
                    {renderField(field)}
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
