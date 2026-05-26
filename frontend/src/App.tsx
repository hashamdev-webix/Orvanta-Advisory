import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";
import ScrollToHash from "./components/ScrollToHash";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Payment";
import ProtectedRoute from "./components/ProtectedRoute";

// Immigration Services
import VisaServices from "./pages/services/immigration/VisaServices";
import PRServices from "./pages/services/immigration/PRServices";
import WorkPermits from "./pages/services/immigration/WorkPermits";
import StudyAbroad from "./pages/services/immigration/StudyAbroad";

// Investment Services
import RealEstate from "./pages/services/investments/RealEstate";
import Stocks from "./pages/services/investments/Stocks";

// Consultation Services
import GlobalMarket from "./pages/services/consultation/GlobalMarket";

// Locations
import UK from "./pages/locations/UK";
import India from "./pages/locations/India";
import HongKong from "./pages/locations/HongKong";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTopOnRouteChange />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        
        {/* Immigration Services */}
        <Route path="/services/immigration/visa" element={<VisaServices />} />
        <Route path="/services/immigration/pr" element={<PRServices />} />
        <Route path="/services/immigration/work-permits" element={<WorkPermits />} />
        <Route path="/services/immigration/study-abroad" element={<StudyAbroad />} />
        
        {/* Investment Services */}
        <Route path="/services/investments/real-estate" element={<RealEstate />} />
        <Route path="/services/investments/stocks" element={<Stocks />} />
        <Route path="/services/investments/tax-planning" element={<Services />} />
        <Route path="/services/investments/nri" element={<Services />} />
        <Route path="/services/investments/business" element={<Services />} />
        
        {/* Consultation Services */}
        <Route path="/services/consultation/global-market" element={<GlobalMarket />} />
        <Route path="/services/consultation/expansion" element={<Services />} />
        <Route path="/services/consultation/strategic-growth" element={<Services />} />
        
        {/* Legal Services */}
        <Route path="/services/legal/documentation" element={<Services />} />
        <Route path="/services/legal/risk-management" element={<Services />} />
        <Route path="/services/legal/dispute-prevention" element={<Services />} />
        
        {/* Locations */}
        <Route path="/locations/uk" element={<UK />} />
        <Route path="/locations/india" element={<India />} />
        <Route path="/locations/hong-kong" element={<HongKong />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-in/*" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-up/*" element={<SignUpPage />} />
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
