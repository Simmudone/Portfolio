import { Card } from '@/components/ui/card';
import { Code2, Database, Brain, Users, Clock, Target } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: "HTML/CSS", level: 90, color: "text-orange-400" },
    { name: "JavaScript", level: 85, color: "text-yellow-400" },
    { name: "React.js", level: 88, color: "text-blue-400" },
    { name: "Node.js", level: 82, color: "text-green-400" },
    { name: "MongoDB", level: 80, color: "text-green-500" },
    { name: "Python", level: 85, color: "text-yellow-300" },
    { name: "Java", level: 88, color: "text-red-400" },
    { name: "Data Structures", level: 85, color: "text-purple-400" },
    { name: "Machine Learning", level: 80, color: "text-pink-400" }
  ];

  const softSkills = [
    { name: "Punctuality", icon: Clock },
    { name: "Analytical Thinking", icon: Brain },
    { name: "Teamwork", icon: Users },
    { name: "Time Management", icon: Target },
    { name: "Communication", icon: Users },
    { name: "Adaptability", icon: Target },
    { name: "Problem Solving", icon: Brain },
    { name: "Leadership", icon: Users },
    { name: "Collaboration", icon: Users }
  ];

  const categories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["HTML", "CSS", "JavaScript", "React.js"],
      color: "neon-cyan"
    },
    {
      title: "Backend Development", 
      icon: Database,
      skills: ["Node.js", "Express.js", "MongoDB"],
      color: "neon-purple"
    },
    {
      title: "Programming Languages",
      icon: Brain,
      skills: ["JavaScript", "Python", "Java", "C++"],
      color: "neon-green"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="card-gradient neon-border p-6 hover-lift group">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-${category.color}/10 flex items-center justify-center group-hover:bg-${category.color}/20 transition-all duration-300`}>
                    <category.icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-primary" />
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Technical Proficiency */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills with Progress */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-neon-cyan">
              Technical Proficiency
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className={`text-sm ${skill.color}`}>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-darker-surface rounded-full overflow-hidden skill-bar">
                    <div 
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-neon-purple">
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <Card key={index} className="card-gradient border border-border/50 p-4 hover-lift group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-primary/10 flex items-center justify-center group-hover:bg-gradient-primary/20 transition-all duration-300">
                      <skill.icon className="w-4 h-4 text-neon-purple" />
                    </div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;