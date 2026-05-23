import { Link } from 'react-router-dom';

export default function Logo({ to = '/', className = '', compact = false, onClick = undefined, tone = 'light' }) {
  const titleClass = tone === 'dark' ? 'text-white' : 'text-secondary';
  const subtitleClass = tone === 'dark' ? 'text-white/50' : 'text-muted-foreground';

  return (
    <Link to={to} onClick={onClick} className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary ring-1 ring-primary/20">
        <svg viewBox="0 0 40 40" aria-hidden="true" className="h-7 w-7">
          <path
            d="M25.8 7.5c-5.2.8-8.5 4.4-9.2 9.8l-.7 5.8c-.4 3.3-1.9 5.2-4.9 6.1"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.1"
            strokeLinecap="round"
          />
          <path
            d="M15.1 17.5h12.6c3.2 0 5.4 2 5.4 5s-2.2 5.1-5.6 5.1h-4.9"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.1"
            strokeLinecap="round"
          />
          <path
            d="M7.4 29.6h8.1M24.5 7.5h8.1"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.1"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {!compact && (
        <span className="leading-none">
          <span className={`block font-display text-xl font-extrabold tracking-tight ${titleClass}`}>
            JitanSports
          </span>
          <span className={`mt-1 block text-[0.66rem] font-semibold uppercase tracking-[0.18em] ${subtitleClass}`}>
            Training & Massage
          </span>
        </span>
      )}
    </Link>
  );
}
