import { Link } from 'react-router-dom';
import { LockKeyhole, ArrowRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { base44 } from '@/api/base44Client';
import Logo from '@/components/Logo';
import SEO from '@/components/SEO';

export default function AdminLogin() {
  const login = () => {
    base44.auth.redirectToLogin(`${window.location.origin}/admin`);
  };

  return (
    <div className="min-h-screen bg-muted/40 px-4 py-10">
      <SEO
        title="Admin Login | JitanSports"
        description="Beheerpaneel voor JitanSports."
        path="/admin/login"
        noindex
      />
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md flex-col justify-center">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <LockKeyhole className="h-6 w-6" />
          </div>
          <h1 className="mb-2 text-2xl font-bold text-secondary">Admin login</h1>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            Log in met het Base44 adminaccount van JitanSports om content, afspraken,
            blogs, FAQ's, tarieven en afbeeldingen te beheren.
          </p>
          <Button onClick={login} className="w-full gap-2 bg-secondary text-white hover:bg-secondary/90">
            Inloggen als admin <ArrowRight className="h-4 w-4" />
          </Button>
          <Link
            to="/"
            className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <Home className="h-4 w-4" />
            Terug naar website
          </Link>
        </div>
      </div>
    </div>
  );
}
