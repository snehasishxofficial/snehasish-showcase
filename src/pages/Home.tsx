import { Mail, Phone, Instagram, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src={heroImage}
          alt="Snehasish Das Portfolio"
          className="w-full h-full object-cover"
        />
        
        {/* Social Media Links Overlay */}
        <div className="absolute bottom-8 right-8 flex flex-col space-y-4 animate-fade-in">
          <a
            href="mailto:snehasishxofficial@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card/80 backdrop-blur-sm rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 group shadow-glow-blue"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-foreground group-hover:text-primary-foreground" />
          </a>
          <a
            href="https://wa.me/917439115647"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card/80 backdrop-blur-sm rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 group shadow-glow-blue"
            aria-label="WhatsApp"
          >
            <Phone className="w-6 h-6 text-foreground group-hover:text-primary-foreground" />
          </a>
          <a
            href="https://www.instagram.com/_snehasish.das_"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card/80 backdrop-blur-sm rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 group shadow-glow-blue"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 text-foreground group-hover:text-primary-foreground" />
          </a>
          <a
            href="https://www.linkedin.com/in/snehasishxofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card/80 backdrop-blur-sm rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 group shadow-glow-blue"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary-foreground" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
