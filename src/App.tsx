import { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import ProcessSection from "./components/sections/ProcessSection";
import CaseStudiesSection from "./components/sections/CaseStudiesSection";
import PackagesSection from "./components/sections/PackagesSection";
import FAQSection from "./components/sections/FAQSection";
import ContactSection from "./components/sections/ContactSection";
import Loading from "./components/common/Loading";
import Meta from "./seo/Meta";
import { baseStructuredData } from "./seo/config";
import SpaceBackground from "./components/common/SpaceBackground";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };

  if (!showContent) {
    return <Loading isLoading={isLoading} onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Meta structuredData={baseStructuredData} />
      <Header />
      <main id="main-content">
        <SpaceBackground>
          <HeroSection />
        </SpaceBackground>
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <CaseStudiesSection />
        {/* <TestimonialsSection /> */}
        <PackagesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
