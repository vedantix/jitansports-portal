import { useEffect, useMemo, useRef, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { CONTENT_FIELDS, DEFAULT_SITE_CONTENT, flattenContentFields } from '@/lib/siteContent';
import { CheckCircle, ChevronDown, ExternalLink, ImagePlus, Save, Upload } from 'lucide-react';

const PAGE_TABS = [
  { id: 'home', label: 'Home', path: '/', groups: ['Homepage hero', 'Homepage doelen en statistieken', 'Homepage diensten en over'] },
  { id: 'personal-training', label: 'Personal Training', path: '/personal-training', groups: ['Personal Training pagina'] },
  { id: 'massage', label: 'Massage', path: '/massage', groups: ['Massage pagina'] },
  { id: 'get-fit', label: 'Get Fit', path: '/get-fit', groups: ['Get Fit pagina'] },
  { id: 'over-ons', label: 'Over Ons', path: '/over-ons', groups: ['Over ons pagina'] },
  { id: 'tarieven', label: 'Tarieven', path: '/tarieven', groups: ['Tarieven pagina'] },
  { id: 'blog-faq-contact', label: 'Blog, FAQ, Contact & Booking', path: null, groups: ['Blog, FAQ, contact en booking'] },
  { id: 'seo-trainer-db', label: 'PT Den Bosch', path: '/personal-trainer-den-bosch', groups: ['SEO pagina Personal Trainer Den Bosch'] },
  { id: 'seo-massage-db', label: 'Massage Den Bosch', path: '/massage-den-bosch', groups: ['SEO pagina Massage Den Bosch'] },
  { id: 'seo-deep-db', label: 'Deep Tissue Den Bosch', path: '/deep-tissue-massage-den-bosch', groups: ['SEO pagina Deep Tissue Den Bosch'] },
  { id: 'seo-per-pagina', label: 'SEO per pagina', path: null, groups: ['SEO per pagina'] },
  { id: 'general', label: 'Algemeen', path: null, groups: ['Algemene CTA, contact en SEO'] },
];

// Mirror public nav structure with dropdowns
const NAV_STRUCTURE = [
  { id: 'home', label: 'Home' },
  {
    id: 'diensten',
    label: 'Diensten',
    children: [
      { id: 'personal-training', label: 'Personal Training', path: '/personal-training' },
      { id: 'massage', label: 'Massage', path: '/massage' },
      { id: 'get-fit', label: 'Get Fit Programma', path: '/get-fit' },
    ],
  },
  {
    id: 'over',
    label: 'Over',
    children: [
      { id: 'over-ons', label: 'Over Ons', path: '/over-ons' },
      { id: 'blog-faq-contact', label: 'Blog, FAQ, Contact & Booking', path: null },
    ],
  },
  { id: 'tarieven', label: 'Tarieven', path: '/tarieven' },
  {
    id: 'seo',
    label: "SEO Pagina's",
    children: [
      { id: 'seo-trainer-db', label: 'PT Den Bosch', path: '/personal-trainer-den-bosch' },
      { id: 'seo-massage-db', label: 'Massage Den Bosch', path: '/massage-den-bosch' },
      { id: 'seo-deep-db', label: 'Deep Tissue Den Bosch', path: '/deep-tissue-massage-den-bosch' },
      { id: 'seo-per-pagina', label: 'SEO per pagina', path: null },
    ],
  },
  { id: 'general', label: 'Algemeen', path: null },
];

export default function ManageContent() {
  const defaults = useMemo(() => flattenContentFields().map((field) => ({ ...field, id: null })), []);
  const [fields, setFields] = useState(defaults);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [uploadingKey, setUploadingKey] = useState(null);
  const [activeTab, setActiveTab] = useState('home');

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
    return () => { mounted = false; };
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
        const defaultValue = DEFAULT_SITE_CONTENT[field.key] ?? '';
        if (!field.id && (field.value || '') === defaultValue) continue;
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
          onChange={(e) => updateField(field.key, e.target.value)}
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
              onChange={(e) => updateField(field.key, e.target.value)}
              placeholder="https://..."
              className="min-w-0 flex-1 rounded-lg border border-border px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-primary"
            />
            <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-secondary/90">
              {uploadingKey === field.key ? (
                <><Upload className="h-4 w-4 animate-pulse" /> Uploaden</>
              ) : (
                <><ImagePlus className="h-4 w-4" /> Upload</>
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => uploadImage(field, e.target.files?.[0])}
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
        onChange={(e) => updateField(field.key, e.target.value)}
        className="w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-primary"
      />
    );
  };

  const activePageTab = PAGE_TABS.find((t) => t.id === activeTab);
  const activeSections = CONTENT_FIELDS.filter((s) => activePageTab?.groups.includes(s.group));
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const selectTab = (id) => {
    setActiveTab(id);
    setOpenDropdown(null);
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
      {/* Header */}
      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-secondary">Website content beheren</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Kies een pagina en bewerk de teksten, afbeeldingen en SEO.
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

      {/* Topbar nav */}
      <nav ref={navRef} className="mb-6 flex flex-wrap items-center gap-1 rounded-xl border border-border bg-white px-3 py-2">
        {NAV_STRUCTURE.map((item) => {
          if (item.children) {
            const isOpen = openDropdown === item.id;
            const childActive = item.children.some((c) => c.id === activeTab);
            return (
              <div key={item.id} className="relative">
                <button
                  onClick={() => setOpenDropdown(isOpen ? null : item.id)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition ${
                    childActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-secondary hover:bg-muted/60'
                  }`}
                >
                  {item.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-xl border border-border bg-white py-1.5 shadow-lg">
                    {item.children.map((child) => (
                      <button
                        key={child.id}
                        onClick={() => selectTab(child.id)}
                        className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm font-medium transition ${
                          activeTab === child.id
                            ? 'bg-primary/10 text-primary'
                            : 'text-secondary hover:bg-muted/40'
                        }`}
                      >
                        <span>{child.label}</span>
                        {child.path && (
                          <a
                            href={child.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="shrink-0 opacity-40 hover:opacity-100"
                            title="Bekijk pagina"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => selectTab(item.id)}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition ${
                activeTab === item.id
                  ? 'bg-primary/10 text-primary'
                  : 'text-secondary hover:bg-muted/60'
              }`}
            >
              {item.label}
              {item.path && (
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="opacity-40 hover:opacity-100"
                  title="Bekijk pagina"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </button>
          );
        })}
      </nav>

      {/* Page URL banner */}
      {activePageTab?.path && (
        <div className="mb-5 flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-muted-foreground">
          <ExternalLink className="h-4 w-4 shrink-0 text-primary" />
          <span>Pagina:</span>
          <a href={activePageTab.path} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
            {activePageTab.path}
          </a>
        </div>
      )}

      {/* Content sections */}
      <div className="space-y-6">
        {activeSections.map((section) => {
          const sectionFields = fields.filter((f) => f.group === section.group);
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