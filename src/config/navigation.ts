export const serviceItems = [
  { label: 'Personal Training', path: '/personal-training' },
  { label: 'Deep Tissue Massage', path: '/massage' },
  { label: 'Voedingsbegeleiding', path: '/voeding' },
  { label: 'VIP Treatment', path: '/vip-treatment' },
  { label: 'Get Fit Programma', path: '/get-fit' },
  { label: 'Stoelmassage & Bedrijven', path: '/bedrijven' },
] as const;

export const aboutItems = [
  { label: 'Over Ons', path: '/over-ons' },
  { label: 'Resultaten & Referenties', path: '/referenties' },
  { label: 'Blog', path: '/blog' },
] as const;

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Tarieven', path: '/tarieven' },
  { label: 'Contact', path: '/contact' },
] as const;

export const homeItem = navItems.find((item) => item.path === '/');
export const secondaryNavItems = navItems.filter((item) => item.path !== '/');
