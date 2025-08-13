import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Ahmed",
      role: "Chief Executive Officer",
      description: "Leading AI innovation with 15+ years in technology leadership",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Mohammed Al-Rashid",
      role: "Chief Technology Officer",
      description: "Expert in machine learning and AI system architecture",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Dr. Fatima Hassan",
      role: "Head of AI Research",
      description: "PhD in Computer Science, specializing in ethical AI development",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Omar Khalil",
      role: "Lead Data Scientist",
      description: "Transforming data into actionable business insights",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
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
                Our Team
              </h1>
              <p className="text-lg md:text-xl text-alpha-neutral-800 max-w-3xl mx-auto">
                Meet the brilliant minds behind Alpha AI's innovative solutions. Our diverse team of experts is dedicated to building ethical AI that transforms industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="alpha-card border-0 text-center p-6">
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-alpha-secondary mb-2">
                      {member.name}
                    </h3>
                    <p className="text-alpha-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-alpha-neutral-800 text-sm">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold text-alpha-secondary mb-6">
                Join Our Team
              </h2>
              <p className="text-lg text-alpha-neutral-800 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for ethical AI innovation. 
                Explore our career opportunities and help us build the future of artificial intelligence.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Team;