import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Zap, Plane } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Spam Detection Using AI",
      description: "A machine learning-based spam classification system that improves communication efficiency using advanced NLP techniques and data preprocessing.",
      technologies: ["Python", "Machine Learning", "NLP", "Scikit-learn", "TensorFlow"],
      features: [
        "Advanced text preprocessing and feature extraction",
        "Multiple ML algorithms comparison (SVM, Naive Bayes, Random Forest)",
        "Real-time spam detection with high accuracy",
        "User-friendly interface for testing"
      ],
      github: "https://github.com/Simmudone/Spam-Detection-Using-AI",
      demo: "https://drive.google.com/file/d/1pSXCIg2jyarvc01XKmufPiZNukrP_HTf/view?usp=drive_link",
      icon: Zap,
      gradient: "from-neon-cyan to-neon-purple"
    },
    {
      title: "Full Stack Flight Finder",
      description: "A comprehensive MERN stack application for flight search, comparison, and booking with real-time data and secure payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      features: [
        "Real-time flight search and filtering",
        "Secure user authentication and booking system",
        "Payment gateway integration",
        "Responsive design for all devices"
      ],
      github: "https://github.com/Simmudone/Flight-Finder",
      demo: "https://drive.google.com/file/d/1LWb70moPd83_4bXbd0INU9Juwiix--12/view?usp=drive_link",
      icon: Plane,
      gradient: "from-neon-purple to-neon-green"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-darker-surface/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions combining cutting-edge technology with real-world applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-gradient neon-border overflow-hidden hover-lift group">
              {/* Project Header */}
              <div className={`h-32 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-neon-cyan mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-primary/10 text-neon-cyan text-xs rounded-full border border-neon-cyan/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-neon-purple mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-primary mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button
                    size="sm"
                    className="flex-1 neon-border bg-transparent hover:bg-neon-cyan/10 text-neon-cyan"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-neon-purple/30 text-neon-purple hover:bg-neon-purple/10"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Projects CTA */}
        <div className="text-center mt-16">
          <div className="p-8 card-gradient neon-border rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">More Projects Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new projects and exploring innovative technologies. 
              Check back regularly for updates!
            </p>
            <Button
              size="lg"
              className="neon-border bg-transparent hover:bg-primary/10 text-primary"
              onClick={() => window.open('https://github.com/Simmudone', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View All on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;