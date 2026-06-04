export default function SeoSummary({ children }) {
  return (
    <section className="bg-white px-4 py-12">
      <div className="mx-auto max-w-4xl rounded-xl border border-primary/20 bg-primary/10 p-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-700">Kort antwoord</p>
        <h2 className="mb-3 text-2xl font-display font-bold text-secondary">Samenvatting</h2>
        <div className="space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {children}
        </div>
      </div>
    </section>
  );
}
