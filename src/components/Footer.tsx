import { Button } from '@/components/ui/button';
import { Github, Mail, Phone, ExternalLink, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Simmudone",
      label: "GitHub"
    },
    {
      icon: Mail,
      href: "mailto:simmudone@gmail.com",
      label: "Email"
    },
    {
      icon: ExternalLink,
      href: "https://www.hackerrank.com/profile/226K1A0508",
      label: "HackerRank"
    },
    {
      icon: Phone,
      href: "tel:+919392496375",
      label: "Phone"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker-surface/50 border-t border-border/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">
              Simhadri Done
            </h3>
            <p className="text-muted-foreground">
              Web Developer & Technology Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                onClick={() => window.open(link.href, '_blank')}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </Button>
            ))}
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
            >
              <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Simhadri Done. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with React,JavaScript & CSS
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mt-8 pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground italic">
            "Blending creativity with logic to develop impactful, user-centric solutions"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;