import { Card } from '@/components/ui/card';
import { User, Brain, Code, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: User,
      title: "Personal",
      description: "Final-year B.Tech CSE graduate with a passion for technology"
    },
    {
      icon: Brain,
      title: "AI/ML Focus",
      description: "Strong foundation in artificial intelligence and machine learning"
    },
    {
      icon: Code,
      title: "Full Stack",
      description: "Proficient in modern web technologies and MERN stack"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Constantly learning and experimenting with new technologies"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Profile Photo */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative group">
              <div className="w-64 h-64 rounded-2xl bg-gradient-primary/10 border-2 border-neon-cyan/30 overflow-hidden hover-lift group-hover:border-neon-cyan/50 transition-all duration-300">
                <img 
                  src="/lovable-uploads/dde676c1-0d17-4fba-9eb8-6b931d2d2b52.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-semibold text-neon-cyan mb-4">
              Passionate Technology Enthusiast
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a final-year B.Tech graduate in Computer Science and Engineering from 
              Ideal Institute of Technology, deeply passionate about technology and its 
              transformative impact. With a strong foundation in AI/ML and modern web 
              technologies, I strive to blend creativity with logic to develop impactful, 
              user-centric solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I enjoy solving real-world problems, experimenting with new tools, and 
              continuously learning to stay ahead in this dynamic field. My goal is to 
              contribute to innovative projects that make a meaningful difference in 
              people's lives.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-cyan">8.16</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple">2026</div>
                <div className="text-sm text-muted-foreground">Graduation</div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="card-gradient neon-border p-6 hover-lift group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary/10 flex items-center justify-center group-hover:bg-gradient-primary/20 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;