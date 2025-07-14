import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Github, ExternalLink, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "simmudone@gmail.com",
      href: "mailto:simmudone@gmail.com",
      color: "neon-cyan"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9392496375",
      href: "tel:+919392496375",
      color: "neon-purple"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Simmudone",
      href: "https://github.com/Simmudone",
      color: "neon-green"
    },
    {
      icon: ExternalLink,
      label: "HackerRank",
      value: "226K1A0508",
      href: "https://www.hackerrank.com/profile/226K1A0508",
      color: "neon-cyan"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xvgqpalq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "Failed to send message",
          description: "Please try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please check your network and try again.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-6 bg-darker-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-neon-cyan">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, innovative projects,
                or just having a chat about technology. Feel free to reach out through
                any of the channels below.
              </p>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="card-gradient neon-border p-4 hover-lift group cursor-pointer">
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-${contact.color}/10 flex items-center justify-center group-hover:bg-${contact.color}/20 transition-all duration-300`}>
                      <contact.icon className={`w-6 h-6 text-${contact.color}`} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{contact.label}</div>
                      <div className={`font-medium text-${contact.color}`}>{contact.value}</div>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            <Card className="card-gradient neon-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-neon-purple/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-neon-purple" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Location</h4>
                  <p className="text-muted-foreground">
                    Kakinada, Andhra Pradesh, India
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Open to remote opportunities worldwide
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="card-gradient neon-border p-8">
            <h3 className="text-2xl font-semibold mb-6 text-neon-purple">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="bg-darker-surface border-border/50 focus:border-neon-cyan focus:ring-neon-cyan/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="bg-darker-surface border-border/50 focus:border-neon-cyan focus:ring-neon-cyan/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or idea..."
                  rows={6}
                  className="bg-darker-surface border-border/50 focus:border-neon-cyan focus:ring-neon-cyan/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full neon-border bg-transparent hover:bg-neon-cyan/10 text-neon-cyan font-semibold"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border/30">
              <p className="text-sm text-muted-foreground text-center">
                Typically responds within 24 hours
              </p>
            </div>
          </Card>
        </div>

        <div className="text-center mt-16">
          <Card className="card-gradient neon-border p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start a Project?</h3>
            <p className="text-muted-foreground mb-6">
              Whether you have a specific project in mind or just want to explore possibilities,
              I'm here to help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="neon-border bg-transparent hover:bg-primary/10 text-primary"
                onClick={() => window.open('mailto:simmudone@gmail.com', '_blank')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-neon-purple/30 text-neon-purple hover:bg-neon-purple/10"
                onClick={() => window.open('https://github.com/Simmudone', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
