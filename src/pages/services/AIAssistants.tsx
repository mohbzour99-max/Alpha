import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Bot, MessageSquare, Zap, Users } from 'lucide-react';

const AIAssistants = () => {
  const features = [
    {
      icon: Bot,
      title: "Intelligent Automation",
      description: "Deploy AI assistants that handle repetitive tasks, freeing your team to focus on high-value work."
    },
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description: "Create conversational AI that understands context and provides human-like interactions."
    },
    {
      icon: Zap,
      title: "24/7 Availability",
      description: "AI assistants work around the clock, providing instant responses and support to your customers."
    },
    {
      icon: Users,
      title: "Team Integration",
      description: "Seamlessly integrate AI assistants into your existing workflows and team processes."
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
                AI Assistants & AI Agents
              </h1>
              <p className="text-lg md:text-xl text-alpha-neutral-800 max-w-3xl mx-auto">
                Unlock the full potential of your workforce with intelligent AI assistants that take over 
                repetitive, time-consuming tasks and enhance productivity across your organization.
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
                  Ready to Deploy AI Assistants?
                </h2>
                <p className="text-lg text-alpha-neutral-800 mb-8">
                  Transform your business operations with intelligent AI assistants that work alongside 
                  your team to boost productivity and enhance customer experiences.
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

export default AIAssistants;