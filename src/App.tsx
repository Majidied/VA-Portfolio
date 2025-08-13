import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import ProcessSection from './components/sections/ProcessSection';
import CaseStudiesSection from './components/sections/CaseStudiesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import PackagesSection from './components/sections/PackagesSection';
import FAQSection from './components/sections/FAQSection';
import ContactSection from './components/sections/ContactSection';
import Meta from './seo/Meta';
import { baseStructuredData } from './seo/config';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Meta structuredData={baseStructuredData} />
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <PackagesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
