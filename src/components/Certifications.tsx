import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, ExternalLink, Building } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "IBM SkillsBuild Full Stack Application Development",
      provider: "IBM",
      type: "Professional Certificate",
      date: "2024",
      status: "Completed",
      description: "Comprehensive full-stack development training covering modern web technologies and industry best practices.",
      skills: ["React", "Node.js", "Database Management", "DevOps"],
      color: "neon-cyan",
      link: "https://drive.google.com/file/d/1ElttIqb5ms5WHo4zANHqrKgqTb2VyRs4/view?usp=drive_link"
    },
    {
      title: "AI Associate Certification",
      provider: "Salesforce",
      type: "Professional Certification",
      date: "2024",
      status: "Completed",
      description: "Advanced certification in artificial intelligence applications and Salesforce AI platform integration.",
      skills: ["AI/ML", "Salesforce Platform", "Data Analysis", "Automation"],
      color: "neon-purple",
      link: "https://drive.google.com/file/d/1ErMYU0DG4FuNeMb0JcX8OSJtheQCP7z6/view?usp=drive_link"
    },
    {
      title: "Java Programming Fundamentals",
      provider: "GalileoX",
      type: "Course Certificate",
      date: "2024",
      status: "Completed",
      description: "Comprehensive Java programming course covering OOP principles, data structures, and software design patterns.",
      skills: ["Java", "OOP", "Data Structures", "Algorithm Design"],
      color: "neon-green",
      link: "https://drive.google.com/file/d/1vwbzPkHH3h6gsxzcIVqxf8YNhb31-Fif/view?usp=drive_link"
    },
    {
      title: "Python Basics for Data Science",
      provider: "IBM",
      type: "Professional Certificate",
      date: "2024",
      status: "Completed",
      description: "Foundation course in Python programming with focus on data science applications and libraries.",
      skills: ["Python", "Data Science", "Pandas", "NumPy"],
      color: "neon-cyan",
      link: "https://drive.google.com/file/d/1Cu4XXUannga7uOTHjAN0rYOhuawx1Hfw/view?usp=drive_link"
    }
  ];

  const internships = [
    {
      title: "Google AI/ML Internship",
      company: "Google",
      period: "Apr - Jun 2024",
      type: "Virtual Internship",
      description: "Intensive program focusing on machine learning fundamentals, TensorFlow, and AI project development.",
      achievements: [
        "Completed 5 ML projects with real-world applications",
        "Gained expertise in TensorFlow and neural networks",
        "Collaborated on AI ethics and responsible development"
      ],
      certificateLink: "https://drive.google.com/file/d/1ybycWvI2FNbMyxc3YY-j5epU0Kz9WJ2w/view?usp=drive_link"
    },
    {
      title: "AWS Academy Cloud Virtual Internship",
      company: "Amazon Web Services",
      period: "Jan - Mar 2024",
      type: "Virtual Internship",
      description: "Cloud computing internship covering AWS services, architecture design, and deployment strategies.",
      achievements: [
        "Hands-on experience with AWS core services",
        "Designed and deployed scalable cloud solutions",
        "Earned AWS Cloud Practitioner knowledge"
      ],
      certificateLink: "https://drive.google.com/file/d/1HT7oGqJzFbO1gLEHQB7hD-bGxbhTkBYr/view?usp=drive_link"
    },
    {
      title: "Software Development Internship",
      company: "Turtil",
      period: "6 Weeks - 2025",
      type: "Stipend-based Internship",
      description: "Practical software development experience at an AI & ML focused company, working on intelligent applications and modern development practices.",
      achievements: [
        "Developed AI-powered web applications using modern frameworks",
        "Worked on machine learning integration projects",
        "Collaborated with development team on AI/ML client solutions",
        "Gained hands-on experience with AI development methodologies",
        "Received performance-based stipend for contributions"
      ]
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Certifications & <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications and hands-on experience
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-neon-cyan">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-gradient neon-border p-6 hover-lift group">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg bg-${cert.color}/10 flex items-center justify-center group-hover:bg-${cert.color}/20 transition-all duration-300`}>
                        <Award className={`w-6 h-6 text-${cert.color}`} />
                      </div>
                      <div>
                        <Badge variant="outline" className={`border-${cert.color}/30 text-${cert.color} mb-2`}>
                          {cert.status}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg font-semibold leading-tight hover:text-neon-cyan transition-colors duration-200 flex items-center gap-2 group"
                      >
                        {cert.title}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </a>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{cert.provider}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-2">Key Skills</div>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className={`px-2 py-1 bg-${cert.color}/10 text-${cert.color} text-xs rounded border border-${cert.color}/20`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Internships */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-neon-purple">Professional Experience</h3>
          <div className="space-y-6">
            {internships.map((internship, index) => (
              <Card key={index} className="card-gradient neon-border p-8 hover-lift group">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Main Info */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-primary/20 transition-all duration-300">
                        <Building className="w-8 h-8 text-neon-purple" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-semibold">{internship.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="text-neon-purple font-medium">{internship.company}</span>
                          <span>•</span>
                          <span>{internship.period}</span>
                          <span>•</span>
                          <Badge variant="outline" className="border-neon-purple/30 text-neon-purple">
                            {internship.type}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {internship.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h5 className="text-sm font-semibold text-neon-green mb-3">Key Achievements</h5>
                    <ul className="space-y-2">
                      {internship.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-neon-green mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    {internship.certificateLink && (
                      <div className="mt-4">
                        <a
                          href={internship.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-neon-cyan hover:text-neon-cyan/80 transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Certificate
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-cyan mb-2">6+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-purple mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Internships</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-green mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Hours Learning</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">2024</div>
            <div className="text-sm text-muted-foreground">Active Year</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;