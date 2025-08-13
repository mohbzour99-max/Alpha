import Navigation from '@/components/Navigation';
import CareersSection from '@/components/CareersSection';
import Footer from '@/components/Footer';

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <CareersSection />
      </div>
      <Footer />
    </div>
  );
};

export default Careers;