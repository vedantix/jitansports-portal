import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import Layout from './components/Layout';
import { RouteSEO } from '@/components/SEO';
import AdminLayout from './components/AdminLayout';

const Home = lazy(() => import('./pages/Home'));
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
const MassageDenBosch = lazy(() => import('./pages/MassageDenBosch'));
const DeepTissueMassageDenBosch = lazy(() => import('./pages/DeepTissueMassageDenBosch'));
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
  return (
    <>
      <RouteSEO />
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
            <Route path="/personal-trainer-den-bosch" element={<PersonalTrainerDenBosch />} />
            <Route path="/massage-den-bosch" element={<MassageDenBosch />} />
            <Route path="/deep-tissue-massage-den-bosch" element={<DeepTissueMassageDenBosch />} />
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
    </>
  );
};


function App() {

  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <AppRoutes />
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
