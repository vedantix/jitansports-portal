import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Layout from './components/Layout';
import Home from './pages/Home';

const Toaster = lazy(() => import('@/components/ui/toaster').then((module) => ({ default: module.Toaster })));
const PersonalTraining = lazy(() => import('./pages/PersonalTraining'));
const Massage = lazy(() => import('./pages/Massage'));
const GetFit = lazy(() => import('./pages/GetFit'));
const About = lazy(() => import('./pages/About'));
const Tarieven = lazy(() => import('./pages/Tarieven'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const Booking = lazy(() => import('./pages/Booking'));
const PersonalTrainerDenBosch = lazy(() => import('./pages/PersonalTrainerDenBosch'));
const PersonalTrainerRosmalen = lazy(() => import('./pages/PersonalTrainerRosmalen'));
const PersonalTrainerVught = lazy(() => import('./pages/PersonalTrainerVught'));
const PersonalTrainerOss = lazy(() => import('./pages/PersonalTrainerOss'));
const MassageDenBosch = lazy(() => import('./pages/MassageDenBosch'));
const DeepTissueMassageDenBosch = lazy(() => import('./pages/DeepTissueMassageDenBosch'));
const SportmassageDenBosch = lazy(() => import('./pages/SportmassageDenBosch'));
const MassageAanHuisDenBosch = lazy(() => import('./pages/MassageAanHuisDenBosch'));
const VoedingscoachDenBosch = lazy(() => import('./pages/VoedingscoachDenBosch'));
const Voeding = lazy(() => import('./pages/Voeding'));
const VipTreatment = lazy(() => import('./pages/VipTreatment'));
const Bedrijven = lazy(() => import('./pages/Bedrijven'));
const Referenties = lazy(() => import('./pages/Referenties'));
const PageNotFound = lazy(() => import('./lib/PageNotFound'));
const AdminLayout = lazy(() => import('./components/AdminLayout'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'));
const ManageAppointments = lazy(() => import('./pages/admin/ManageAppointments'));
const ManageAvailability = lazy(() => import('./pages/admin/ManageAvailability'));
const ManageReviews = lazy(() => import('./pages/admin/ManageReviews'));
const ManageBlog = lazy(() => import('./pages/admin/ManageBlog'));
const ManagePricing = lazy(() => import('./pages/admin/ManagePricing'));
const ManageFAQ = lazy(() => import('./pages/admin/ManageFAQ'));
const ManageGallery = lazy(() => import('./pages/admin/ManageGallery'));
const ManageContent = lazy(() => import('./pages/admin/ManageContent'));

function RouteFallback() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
      <div className="h-9 w-9 animate-spin rounded-full border-4 border-slate-200 border-t-primary" />
    </div>
  );
}

const AppRoutes = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  if (isAdminRoute && (isLoadingPublicSettings || isLoadingAuth)) {
    return <RouteFallback />;
  }

  if (isAdminRoute && authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/personal-training" element={<PersonalTraining />} />
          <Route path="/massage" element={<Massage />} />
          <Route path="/get-fit" element={<GetFit />} />
          <Route path="/over-ons" element={<About />} />
          <Route path="/tarieven" element={<Tarieven />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/voeding" element={<Voeding />} />
          <Route path="/vip-treatment" element={<VipTreatment />} />
          <Route path="/bedrijven" element={<Bedrijven />} />
          <Route path="/referenties" element={<Referenties />} />
          <Route path="/personal-trainer-den-bosch" element={<PersonalTrainerDenBosch />} />
          <Route path="/personal-trainer-rosmalen" element={<PersonalTrainerRosmalen />} />
          <Route path="/personal-trainer-vught" element={<PersonalTrainerVught />} />
          <Route path="/personal-trainer-oss" element={<PersonalTrainerOss />} />
          <Route path="/massage-den-bosch" element={<MassageDenBosch />} />
          <Route path="/deep-tissue-massage-den-bosch" element={<DeepTissueMassageDenBosch />} />
          <Route path="/sportmassage-den-bosch" element={<SportmassageDenBosch />} />
          <Route path="/massage-aan-huis-den-bosch" element={<MassageAanHuisDenBosch />} />
          <Route path="/voedingscoach-den-bosch" element={<VoedingscoachDenBosch />} />
        </Route>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="appointments" element={<ManageAppointments />} />
          <Route path="availability" element={<ManageAvailability />} />
          <Route path="reviews" element={<ManageReviews />} />
          <Route path="blog" element={<ManageBlog />} />
          <Route path="pricing" element={<ManagePricing />} />
          <Route path="faq" element={<ManageFAQ />} />
          <Route path="gallery" element={<ManageGallery />} />
          <Route path="content" element={<ManageContent />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

function DeferredToaster() {
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(() => setShouldMount(true), { timeout: 2000 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(() => setShouldMount(true), 1200);
    return () => window.clearTimeout(timeoutId);
  }, []);

  if (!shouldMount) return null;

  return (
    <Suspense fallback={null}>
      <Toaster />
    </Suspense>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AppRoutes />
      </Router>
      <DeferredToaster />
    </AuthProvider>
  );
}

export default App
