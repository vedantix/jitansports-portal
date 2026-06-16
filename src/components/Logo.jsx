import { Link } from 'react-router-dom';

const MENU_LOGO_SRC = 'https://media.base44.com/images/public/6a115e447a3ac96774309014/e13bc7230_jitanlogo.png';

export default function Logo({ to = '/', className = '', compact = false, onClick = undefined, tone = 'light' }) {
  const imgClass = compact ? 'h-12 w-auto max-w-[240px] object-contain' : 'h-16 w-auto max-w-[320px] object-contain md:h-20 md:max-w-[420px]';
  const wrapClass = tone === 'dark' ? 'bg-white rounded-lg px-2 py-1' : '';

  return (
    <Link to={to} onClick={onClick} className={`inline-flex shrink-0 items-center ${className}`}>
      <span className={wrapClass}>
        <img
          src={MENU_LOGO_SRC}
          alt="JitanSports Training & Massage"
          width="560"
          height="121"
          className={imgClass}
          decoding="async"
        />
      </span>
    </Link>
  );
}