import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ShoppingBag, Target, Zap } from 'lucide-react';

const RecommendationModels = () => {
  const features = [
    {
      icon: Star,
      title: "Personalized Recommendations",
      description: "Deliver tailored product and content recommendations based on individual user preferences and behavior patterns."
    },
    {
      icon: ShoppingBag,
      title: "Smart Shopping Experience",
      description: "Enhance e-commerce platforms with intelligent product suggestions that increase conversion rates and customer satisfaction."
    },
    {
      icon: Target,
      title: "Targeted Marketing",
      description: "Create highly targeted marketing campaigns with recommendations that resonate with specific customer segments."
    },
    {
      icon: Zap,
      title: "Real-time Adaptation",
      description: "Continuously learn and adapt recommendations based on real-time user interactions and feedback."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <section className="alpha-section-padding">
          <div className="alpha-container">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-alpha-primary mb-6">
                Recommendation Models
              </h1>
              <p className="text-lg md:text-xl text-alpha-neutral-800 max-w-3xl mx-auto">
                Deliver smart, personalized shopping experiences with our advanced recommendation systems. 
                Reduce search time and increase customer satisfaction with intelligent product suggestions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <Card key={index} className="alpha-card border-0 p-6">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-alpha-primary/10 rounded-2xl flex items-center justify-center mb-6">
                      <feature.icon className="h-8 w-8 text-alpha-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-alpha-secondary mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-alpha-neutral-800 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-alpha-neutral-50 rounded-3xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-alpha-secondary mb-6">
                  Ready to Personalize Your Customer Experience?
                </h2>
                <p className="text-lg text-alpha-neutral-800 mb-8">
                  Our recommendation models help businesses deliver personalized experiences that drive engagement, 
                  increase sales, and build lasting customer relationships.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-alpha-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-alpha-primary/90 transition-colors">
                    Get Started
                  </button>
                  <button className="border-2 border-alpha-primary text-alpha-primary px-8 py-3 rounded-lg font-semibold hover:bg-alpha-primary/10 transition-colors">
                    Learn More
                  </button>
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

export default RecommendationModels;