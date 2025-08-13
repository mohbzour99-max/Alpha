import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { LineChart, TrendingUp, BarChart3, Calculator } from 'lucide-react';

const RegressionModels = () => {
  const features = [
    {
      icon: LineChart,
      title: "Linear Regression",
      description: "Predict continuous outcomes and understand relationships between variables with linear regression models."
    },
    {
      icon: TrendingUp,
      title: "Sales Forecasting",
      description: "Forecast sales performance and revenue trends to optimize business planning and resource allocation."
    },
    {
      icon: BarChart3,
      title: "Performance Metrics",
      description: "Analyze and predict key performance indicators to drive data-driven decision making."
    },
    {
      icon: Calculator,
      title: "Cost Optimization",
      description: "Optimize operational costs and resource utilization through predictive regression analysis."
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
                Regression Models
              </h1>
              <p className="text-lg md:text-xl text-alpha-neutral-800 max-w-3xl mx-auto">
                Boost operational efficiency with forecasting solutions tailored to your business. 
                Our regression models help predict outcomes and optimize performance across various metrics.
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
                  Ready to Optimize with Regression Models?
                </h2>
                <p className="text-lg text-alpha-neutral-800 mb-8">
                  Our regression models help businesses predict outcomes, optimize operations, 
                  and make data-driven decisions that improve efficiency and profitability.
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

export default RegressionModels;