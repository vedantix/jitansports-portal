import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/31682272680?text=Hallo%20JitanSports%2C%20ik%20wil%20graag%20een%20gratis%20proefles%20aanvragen.";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="WhatsApp Contact"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-foreground text-sm font-medium px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        WhatsApp ons!
      </span>
    </a>
  );
}