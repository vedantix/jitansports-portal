import { Link } from 'react-router-dom';

function JSMonogram({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 110 95" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="jtan-gold" x1="28" y1="72" x2="102" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#8B6000"/>
          <stop offset="0.3" stopColor="#D4A017"/>
          <stop offset="0.62" stopColor="#FFD740"/>
          <stop offset="0.85" stopColor="#F5A623"/>
          <stop offset="1" stopColor="#C47A00"/>
        </linearGradient>
        <linearGradient id="jtan-gold-hi" x1="55" y1="30" x2="100" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFF0A0" stopOpacity="0.7"/>
          <stop offset="1" stopColor="#FFD740" stopOpacity="0"/>
        </linearGradient>
      </defs>

      {/* ── J ── */}
      {/* Top cap (wide) */}
      <rect x="4" y="3" width="40" height="11" rx="2" fill="#111111"/>
      {/* Vertical stroke */}
      <rect x="13" y="3" width="13" height="63" rx="2" fill="#111111"/>
      {/* Bottom hook */}
      <path
        d="M26,58 C26,70 23,77 15,79 C8,81 2,77 1,70"
        stroke="#111111" strokeWidth="13" strokeLinecap="round" fill="none"
      />

      {/* ── S ── */}
      {/* Upper arc of S */}
      <path
        d="M84,6 C74,2 58,2 50,9 C44,13 42,20 46,27 C49,32 55,35 63,38"
        stroke="#111111" strokeWidth="12" strokeLinecap="round" fill="none"
      />
      {/* Lower arc of S */}
      <path
        d="M63,38 C71,41 78,45 80,52 C83,59 80,68 71,74 C63,80 50,80 42,75"
        stroke="#111111" strokeWidth="12" strokeLinecap="round" fill="none"
      />

      {/* ── Navy accent swoosh lines ── */}
      <path
        d="M20,66 C34,55 48,52 59,55"
        stroke="#1A2D60" strokeWidth="4.5" strokeLinecap="round" fill="none"
      />
      <path
        d="M17,75 C35,62 53,59 68,65"
        stroke="#0D1A3A" strokeWidth="3" strokeLinecap="round" fill="none"
      />

      {/* ── Gold swoosh / teardrop ── */}
      <path
        d="M30,64 C43,42 75,28 104,40 C110,43 112,52 108,61 C104,70 93,75 79,77 C60,81 38,76 30,64 Z"
        fill="url(#jtan-gold)"
      />
      {/* Highlight sheen */}
      <path
        d="M52,42 C68,34 90,36 104,44 C90,32 66,28 52,42 Z"
        fill="url(#jtan-gold-hi)"
      />
    </svg>
  );
}

export default function Logo({ to = '/', className = '', compact = false, onClick = undefined, tone = 'light' }) {
  const titleColor = tone === 'dark' ? 'text-white' : 'text-gray-900';
  const subColor   = tone === 'dark' ? 'text-amber-400' : 'text-amber-600';

  return (
    <Link to={to} onClick={onClick} className={`inline-flex items-center gap-2.5 ${className}`}>
      <JSMonogram size={compact ? 34 : 44} />
      {!compact && (
        <span className="leading-none select-none">
          <span className={`block font-display text-xl font-extrabold tracking-tight ${titleColor}`}>
            JitanSports
          </span>
          <span className={`block text-[0.58rem] font-bold uppercase tracking-[0.14em] mt-0.5 ${subColor}`}>
            Training &amp; Massage
          </span>
        </span>
      )}
    </Link>
  );
}