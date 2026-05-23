import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Layout from './components/Layout';
import Home from './pages/Home';
import PersonalTraining from './pages/PersonalTraining';
import Massage from './pages/Massage';
import GetFit from './pages/GetFit';
import About from './pages/About';
import Tarieven from './pages/Tarieven';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import PersonalTrainerDenHaag from './pages/PersonalTrainerDenHaag';
import PersonalTrainerWassenaar from './pages/PersonalTrainerWassenaar';
import PersonalTrainerVoorburg from './pages/PersonalTrainerVoorburg';
import PersonalTrainerLeidschendam from './pages/PersonalTrainerLeidschendam';
import MassageDenHaag from './pages/MassageDenHaag';
import DeepTissueMassageDenHaag from './pages/DeepTissueMassageDenHaag';
import AdminLayout from './components/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import ManageAppointments from './pages/admin/ManageAppointments';
import ManageAvailability from './pages/admin/ManageAvailability';
import ManageReviews from './pages/admin/ManageReviews';
import ManageBlog from './pages/admin/ManageBlog';
import ManagePricing from './pages/admin/ManagePricing';
import ManageFAQ from './pages/admin/ManageFAQ';
import ManageGallery from './pages/admin/ManageGallery';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/personal-trainer-den-haag" element={<PersonalTrainerDenHaag />} />
        <Route path="/personal-trainer-wassenaar" element={<PersonalTrainerWassenaar />} />
        <Route path="/personal-trainer-voorburg" element={<PersonalTrainerVoorburg />} />
        <Route path="/personal-trainer-leidschendam" element={<PersonalTrainerLeidschendam />} />
        <Route path="/massage-den-haag" element={<MassageDenHaag />} />
        <Route path="/deep-tissue-massage-den-haag" element={<DeepTissueMassageDenHaag />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="appointments" element={<ManageAppointments />} />
        <Route path="availability" element={<ManageAvailability />} />
        <Route path="reviews" element={<ManageReviews />} />
        <Route path="blog" element={<ManageBlog />} />
        <Route path="pricing" element={<ManagePricing />} />
        <Route path="faq" element={<ManageFAQ />} />
        <Route path="gallery" element={<ManageGallery />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App