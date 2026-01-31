import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "sde.kushagra@gmail.com",
      href: "mailto:sde.kushagra@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/c-y-p-h-e-r",
      href: "https://github.com/C-Y-P-H-E-R",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com",
      href: "https://linkedin.com/in/kushagrasharmaofficial",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Noida, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 relative bg-gradient-subtle">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Section Header */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-primary font-mono text-sm">06.</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Get In Touch</h2>
          </div>

          <p className="text-muted-foreground mb-8">
            I'm always interested in hearing about new opportunities, challenging backend 
            problems, or just connecting with fellow engineers. Feel free to reach out!
          </p>

          {/* Contact Links */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {contactLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg glass card-hover group"
                  >
                    <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {link.label}
                      </p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 rounded-lg glass">
                    <div className="p-2 rounded-md bg-primary/10">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {link.label}
                      </p>
                      <p className="font-medium">{link.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-gradient-primary text-primary-foreground font-semibold px-8 glow-primary hover:opacity-90 transition-opacity"
            onClick={() => window.open("mailto:engineer@example.com")}
          >
            <Send className="w-4 h-4 mr-2" />
            Say Hello
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
