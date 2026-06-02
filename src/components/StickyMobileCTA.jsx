import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function StickyMobileCTA() {
  const location = useLocation();
  // Hide on booking page itself
  if (location.pathname === '/booking' || location.pathname.startsWith('/admin')) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden pb-safe">
      <div className="bg-white/95 backdrop-blur-sm border-t border-border px-4 py-3 flex gap-3">
        <Link
          to="/booking"
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-3 rounded-xl text-sm hover:bg-primary/90 transition-colors"
        >
          <Calendar className="w-4 h-4" />
          Plan Gratis Intake
        </Link>
      </div>
    </div>
  );
}
