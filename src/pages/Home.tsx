import { Mail, Instagram, Linkedin, MessageCircle, ArrowDown, Sparkles } from "lucide-react";
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
      {/* Animated Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 animate-pulse pointer-events-none z-10" />
      
      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src={heroImage}
          alt="Snehasish Das Portfolio"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4 space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-heading text-primary">Welcome to My Portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-foreground drop-shadow-2xl">
              Snehasish <span className="text-transparent bg-clip-text bg-premium-gradient">Das</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-sans max-w-2xl mx-auto">
              B.Tech CSE (Cyber Security) • Educator • Tech Enthusiast
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <a
                href="#contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-heading font-semibold shadow-glow-blue hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </a>
              <a
                href="#about"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-foreground rounded-full font-heading font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        
        {/* Floating Social Media Links */}
        <div className="absolute bottom-8 right-8 flex flex-col space-y-4 animate-fade-in z-30">
          <a
            href="mailto:snehasishxofficial@gmail.com"
            className="p-4 bg-card/80 backdrop-blur-xl rounded-2xl hover:bg-primary hover:scale-110 transition-all duration-300 group shadow-elevated border border-border/50"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-foreground group-hover:text-primary-foreground" />
          </a>
          <button
            onClick={handleWhatsApp}
            className="p-4 bg-card/80 backdrop-blur-xl rounded-2xl hover:bg-green-500 hover:scale-110 transition-all duration-300 group shadow-elevated border border-border/50"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-6 h-6 text-foreground group-hover:text-white" />
          </button>
          <button
            onClick={handleInstagram}
            className="p-4 bg-card/80 backdrop-blur-xl rounded-2xl hover:bg-pink-500 hover:scale-110 transition-all duration-300 group shadow-elevated border border-border/50"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 text-foreground group-hover:text-white" />
          </button>
          <a
            href="https://www.linkedin.com/in/snehasishxofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-card/80 backdrop-blur-xl rounded-2xl hover:bg-blue-600 hover:scale-110 transition-all duration-300 group shadow-elevated border border-border/50"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-foreground group-hover:text-white" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ArrowDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default Home;
