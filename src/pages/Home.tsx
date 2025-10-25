import { Mail, Instagram, Linkedin, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

const Home = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/917439115647', '_blank', 'noopener,noreferrer');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/_snehasish.das_/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src={heroImage}
          alt="Snehasish Das Portfolio"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Social Media Links Overlay */}
        <div className="absolute bottom-8 right-8 flex flex-col space-y-4 animate-fade-in z-10">
          <a
            href="mailto:snehasishxofficial@gmail.com"
            className="p-3 bg-card/80 backdrop-blur-sm rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 group shadow-glow-blue"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-foreground group-hover:text-primary-foreground" />
          </a>
          <button
            onClick={handleWhatsApp}
            className="p-3 bg-card/80 backdrop-blur-sm rounded-full hover:bg-green-500 hover:scale-110 transition-all duration-300 group shadow-glow-blue"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-6 h-6 text-foreground group-hover:text-white" />
          </button>
          <button
            onClick={handleInstagram}
            className="p-3 bg-card/80 backdrop-blur-sm rounded-full hover:bg-pink-500 hover:scale-110 transition-all duration-300 group shadow-glow-blue"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 text-foreground group-hover:text-white" />
          </button>
          <a
            href="https://www.linkedin.com/in/snehasishxofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card/80 backdrop-blur-sm rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300 group shadow-glow-blue"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-foreground group-hover:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
