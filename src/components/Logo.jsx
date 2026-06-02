import { Link } from 'react-router-dom';

export default function Logo({ to = '/', className = '', compact = false, onClick = undefined }) {
  return (
    <Link to={to} onClick={onClick} className={`inline-flex items-center ${className}`}>
      <img 
        src="https://media.base44.com/images/public/6a115e447a3ac96774309014/f4d0860f3_Logo2.png"
        alt="JitanSports" 
        className={compact ? 'h-10' : 'h-14'}
        style={{ objectFit: 'contain' }}
      />
    </Link>
  );
}