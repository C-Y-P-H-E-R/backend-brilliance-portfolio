import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {

  const [social, setSocial] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      let response = await fetch(
        "https://portfolio-backend-b3xe.onrender.com/go/api/v1/socials"
      );
      const data = await response.json()
      setSocial(data.data)
    }

    fetchdata();
  }, [])

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-primary" /> using React & Tailwind
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/C-Y-P-H-E-R/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/kushagrasharmaofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:sde.kushagra@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Right side */}
          <p className="text-sm text-muted-foreground font-mono">
            © 2026 — Software Engineer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
