import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, TrendingUp, Database, PieChart } from 'lucide-react';

const DataAnalytics = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Transform raw data into actionable insights with our sophisticated analytics platform."
    },
    {
      icon: TrendingUp,
      title: "Predictive Insights",
      description: "Forecast trends and make data-driven decisions with our predictive analytics capabilities."
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamlessly integrate data from multiple sources for comprehensive analysis."
    },
    {
      icon: PieChart,
      title: "Visual Reporting",
      description: "Create compelling visualizations and reports that tell your data's story."
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
                Data Analytics
              </h1>
              <p className="text-lg md:text-xl text-alpha-neutral-800 max-w-3xl mx-auto">
                Unlock the full potential of your data with our comprehensive analytics solutions. 
                Transform complex datasets into clear, actionable insights that drive business growth.
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
                  Ready to Transform Your Data?
                </h2>
                <p className="text-lg text-alpha-neutral-800 mb-8">
                  Our data analytics solutions help businesses of all sizes make sense of their data 
                  and turn insights into competitive advantages.
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

export default DataAnalytics;