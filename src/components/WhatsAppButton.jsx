import { MessageCircle } from 'lucide-react';
import { useSiteContent } from '@/hooks/useSiteContent';
import { createWhatsAppUrl } from '@/lib/siteContent';

export default function WhatsAppButton() {
  const { content } = useSiteContent();

  return (
    <a
      href={createWhatsAppUrl(content)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 p-4 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-green-600 group"
      aria-label="WhatsApp Contact"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-foreground text-sm font-medium px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        WhatsApp ons!
      </span>
    </a>
  );
}
