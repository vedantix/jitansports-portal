import { Link } from 'react-router-dom';

export default function Logo({ to = '/', className = '', compact = false, onClick = undefined, tone = 'light' }) {
  const titleClass = tone === 'dark' ? 'text-white' : 'text-secondary';
  const subtitleClass = tone === 'dark' ? 'text-white/50' : 'text-muted-foreground';

  return (
    <Link to={to} onClick={onClick} className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff9ef] ring-1 ring-primary/25 shadow-sm">
        <svg viewBox="0 0 64 64" aria-hidden="true" className="h-11 w-11">
          <rect width="64" height="64" rx="15" fill="#FFF9EF" />
          <path
            d="M8.5 44C7.8 25.5 22.8 9.5 40.3 9.5C52.1 9.5 58 17.8 58 31"
            fill="none"
            stroke="#F4BA52"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="41.5" cy="18.5" r="5.8" fill="none" stroke="#F4BA52" strokeWidth="3" />
          <path
            d="M37 25C30.5 29 28.2 35 25.2 44"
            fill="none"
            stroke="#F4BA52"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32.8 34C36 38.2 41 40.5 47.2 40"
            fill="none"
            stroke="#F4BA52"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.5 47C17 46.5 25.7 41.4 36 42.3C45.6 43.2 51.5 48.5 59 39.8"
            fill="none"
            stroke="#557A4C"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 53C18 54 27 49.4 36 49.8C46.2 50.2 50.5 57 59.2 52.8"
            fill="none"
            stroke="#557A4C"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 57C27.5 58.1 43.2 57.7 54 52"
            fill="none"
            stroke="#557A4C"
            strokeWidth="2.7"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {!compact && (
        <span className="leading-none">
          <span className={`block font-display text-xl font-extrabold ${titleClass}`}>
            JitanSports
          </span>
          <span className={`mt-1 block text-[0.68rem] font-semibold uppercase ${subtitleClass}`}>
            Training & Massage
          </span>
        </span>
      )}
    </Link>
  );
}
