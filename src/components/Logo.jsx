import { Link } from 'react-router-dom';

const MENU_LOGO_SRC = '/images/jitansports-logo-menu.png';

export default function Logo({ to = '/', className = '', compact = false, onClick = undefined, tone = 'light' }) {
  const titleClass = tone === 'dark' ? 'text-white' : 'text-secondary';
  const subtitleClass = tone === 'dark' ? 'text-white/50' : 'text-muted-foreground';

  if (tone !== 'dark') {
    return (
      <Link to={to} onClick={onClick} className={`inline-flex shrink-0 items-center ${className}`}>
        <img
          src={MENU_LOGO_SRC}
          alt="JitanSports Training & Massage"
          width="560"
          height="121"
          className={compact ? 'h-10 w-auto max-w-[190px] object-contain' : 'h-12 w-auto max-w-[240px] object-contain md:h-16 md:max-w-[300px]'}
          decoding="async"
        />
      </Link>
    );
  }

  return (
    <Link to={to} onClick={onClick} className={`inline-flex shrink-0 items-center ${className}`}>
      <span className="leading-none">
        <span className={`block font-display ${compact ? 'text-2xl' : 'text-3xl md:text-4xl'} font-extrabold ${titleClass}`}>
          JitanSports
        </span>
        {!compact && (
          <span className={`mt-1.5 block text-[0.72rem] font-semibold uppercase ${subtitleClass}`}>
            Training & Massage
          </span>
        )}
      </span>
    </Link>
  );
}
