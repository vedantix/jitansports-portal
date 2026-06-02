import { Link } from 'react-router-dom';

const LOGO_URL = "https://media.base44.com/images/public/6a115e447a3ac96774309014/ba3ee1a0d_Logo5.png";

export default function Logo({ to = '/', className = '', compact = false, onClick = undefined, tone = 'light' }) {
  const isDark = tone === 'dark';

  return (
    <Link to={to} onClick={onClick} className={`inline-flex items-center ${className}`}>
      <img
        src={LOGO_URL}
        alt="JitanSports"
        height={compact ? 44 : 192}
        className={compact ? 'h-11 w-auto' : 'h-48 w-auto'}
        style={isDark ? { filter: 'brightness(0) invert(1)' } : {}}
      />
    </Link>
  );
}