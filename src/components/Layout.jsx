import { Outlet } from 'react-router-dom';
import StickyMobileCTA from './StickyMobileCTA';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyMobileCTA />
    </div>
  );
}