import { Link } from 'react-router-dom';

const MENU_LOGO_SRC = 'https://media.base44.com/images/public/6a115e447a3ac96774309014/e13bc7230_jitanlogo.png';

const LOGO_SIZES = {
  default: { height: '80px', maxWidth: '300px' },
  nav: { height: 'clamp(84px, 7vw, 104px)', maxWidth: 'clamp(300px, 28vw, 420px)' },
  compact: { height: '64px', maxWidth: '250px' },
};

export default function Logo({ to = '/', className = '', compact = false, onClick = undefined, tone = 'light', size = 'default' }) {
  const wrapClass = tone === 'dark' ? 'bg-white rounded-lg px-2 py-1' : '';
  const logoSize = compact ? LOGO_SIZES.compact : LOGO_SIZES[size] || LOGO_SIZES.default;

  return (
    <Link to={to} onClick={onClick} className={`inline-flex shrink-0 items-center ${className}`}>
      <span className={wrapClass}>
        <img
          src={MENU_LOGO_SRC}
          alt="JitanSports Training & Massage"
          width="560"
          height="121"
          style={{ height: logoSize.height, width: 'auto', maxWidth: logoSize.maxWidth, objectFit: 'contain' }}
          decoding="async"
        />
      </span>
    </Link>
  );
}
