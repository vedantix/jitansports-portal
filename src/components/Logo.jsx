import { Link } from 'react-router-dom';

export default function Logo({ to = '/', className = '', compact = false, onClick = undefined, tone = 'light' }) {
  const height = compact ? 'h-10' : 'h-12';

  return (
    <Link to={to} onClick={onClick} className={`inline-flex items-center ${className}`}>
      <img 
        src="https://media.base44.com/images/public/6a115e447a3ac96774309014/18c549b66_Logo.png" 
        alt="JitanSports" 
        className={`${height} w-auto object-contain`}
      />
    </Link>
  );
}