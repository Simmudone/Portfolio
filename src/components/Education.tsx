import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech Computer Science and Engineering",
      institution: "Ideal Institute of Technology, Kakinada",
      period: "2022 - 2026",
      grade: "CGPA: 8.16",
      status: "Current"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "V V S Reddy Junior College",
      period: "2020 - 2022",
      grade: "74.3%",
      status: "Completed"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "ZP High School Konapapeta",
      period: "2020",
      grade: "97%",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-darker-surface/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Educational <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A consistent track record of academic excellence and continuous learning
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {education.map((item, index) => (
            <Card 
              key={index}
              className="card-gradient neon-border p-8 hover-lift group relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full -translate-y-16 translate-x-16" />
              
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-primary/20 transition-all duration-300">
                    <GraduationCap className="w-8 h-8 text-neon-cyan" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {item.degree}
                    </h3>
                    <p className="text-neon-cyan font-medium">
                      {item.institution}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        <span className="text-neon-green font-medium">{item.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:text-right">
                  <span className={`px-4 py-2 rounded-full text-xs font-medium ${
                    item.status === 'Current' 
                      ? 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30' 
                      : 'bg-neon-green/10 text-neon-green border border-neon-green/30'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-cyan mb-2">8.16</div>
            <div className="text-muted-foreground">Current CGPA</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-purple mb-2">97%</div>
            <div className="text-muted-foreground">SSC Percentage</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-green mb-2">2026</div>
            <div className="text-muted-foreground">Expected Graduation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;