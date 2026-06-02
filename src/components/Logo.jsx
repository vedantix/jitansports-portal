import { Link } from 'react-router-dom';

const LOGO_URL = "https://media.base44.com/images/public/6a115e447a3ac96774309014/6212df634_Logo3.png";

export default function Logo({ to = '/', className = '', compact = false, onClick = undefined, tone = 'light' }) {
  const isDark = tone === 'dark';

  return (
    <Link to={to} onClick={onClick} className={`inline-flex items-center ${className}`}>
      <img
        src={LOGO_URL}
        alt="JitanSports"
        height={compact ? 44 : 64}
        className={compact ? 'h-11 w-auto' : 'h-16 w-auto'}
        style={isDark ? { filter: 'brightness(0) invert(1)' } : {}}
      />
    </Link>
  );
}