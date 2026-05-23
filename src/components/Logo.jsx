import { Link } from 'react-router-dom';

export default function Logo({ to = '/', className = '', compact = false, onClick = undefined, tone = 'light' }) {
  const titleClass = tone === 'dark' ? 'text-white' : 'text-secondary';
  const subtitleClass = tone === 'dark' ? 'text-white/50' : 'text-muted-foreground';

  return (
    <Link to={to} onClick={onClick} className={`inline-flex items-center ${className}`}>
      <span className="leading-none">
        <span className={`block font-display ${compact ? 'text-lg' : 'text-xl'} font-extrabold ${titleClass}`}>
          JitanSports
        </span>
        {!compact && (
          <span className={`mt-1 block text-[0.68rem] font-semibold uppercase ${subtitleClass}`}>
            Training & Massage
          </span>
        )}
      </span>
    </Link>
  );
}
