import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from 'react-helmet-async';
import SEO from "./components/SEO";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutClinic from "./components/AboutClinic";
import ServicesSection from "./components/FeaturesSection";
import DoctorProfile from "./components/DoctorProfile";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <div className="min-h-screen">
            <SEO />
            <Toaster />
            <Sonner />
            <Navbar />
            <HeroSection />
            <AboutClinic />
            <ServicesSection />
            <DoctorProfile />
            <TestimonialsSection />
            <FAQSection />
            <ContactSection />
            <Footer />
          </div>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
