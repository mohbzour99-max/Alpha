import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const VisionMission = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <section className="alpha-section-padding">
          <div className="alpha-container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-alpha-primary mb-8">
                Vision & Mission
              </h1>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-alpha-secondary mb-4">Our Vision</h2>
                  <p className="text-lg text-alpha-neutral-800 leading-relaxed">
                    To be the leading force in creating a smarter world through ethical AI innovation, 
                    where technology amplifies human potential and creates meaningful opportunities for all.
                  </p>
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-alpha-secondary mb-4">Our Mission</h2>
                  <p className="text-lg text-alpha-neutral-800 leading-relaxed">
                    We build AI solutions that prioritize human-centered design, transparency, and ethical practices. 
                    Our mission is to transform industries while creating meaningful jobs and fostering inclusive innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default VisionMission;