import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ShoppingCart, 
  Building2, 
  HeartHandshake, 
  GraduationCap, 
  Plane, 
  Truck, 
  Home, 
  Briefcase, 
  Radio 
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "Transform customer experiences with AI-powered recommendations, inventory optimization, and personalized shopping journeys."
    },
    {
      icon: Building2,
      title: "Banking & Financial Services",
      description: "Enhance security, automate processes, and provide intelligent financial insights with our AI solutions."
    },
    {
      icon: HeartHandshake,
      title: "Healthcare",
      description: "Improve patient outcomes through predictive analytics, diagnostic assistance, and operational efficiency."
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Personalize learning experiences and streamline administrative processes with intelligent educational tools."
    },
    {
      icon: Plane,
      title: "Hospitality & Tourism",
      description: "Optimize guest experiences, manage resources efficiently, and predict travel trends with AI insights."
    },
    {
      icon: Truck,
      title: "Transportation & Logistics",
      description: "Streamline supply chains, optimize routes, and enhance delivery efficiency through intelligent automation."
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Revolutionize property valuation, market analysis, and customer matching with advanced AI algorithms."
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Automate routine tasks, enhance decision-making, and improve client services in law, consulting, and accounting."
    },
    {
      icon: Radio,
      title: "Telecommunications",
      description: "Optimize network performance, enhance customer service, and predict maintenance needs with AI solutions."
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
                Industries We Serve
              </h1>
              <p className="text-lg md:text-xl text-alpha-neutral-800 max-w-3xl mx-auto">
                Delivering AI excellence across diverse industries, transforming businesses with intelligent solutions tailored to each sector's unique challenges and opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="alpha-card border-0 p-6 h-full">
                  <CardContent className="pt-6 h-full flex flex-col">
                    <div className="w-16 h-16 bg-alpha-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <industry.icon className="h-8 w-8 text-alpha-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-alpha-secondary mb-4 text-center">
                      {industry.title}
                    </h3>
                    <p className="text-alpha-neutral-800 leading-relaxed text-center flex-1">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold text-alpha-secondary mb-6">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-lg text-alpha-neutral-800 max-w-2xl mx-auto">
                Every industry has unique challenges and opportunities. Our AI experts work closely with you to understand your specific needs and deliver solutions that drive real results.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Industries;