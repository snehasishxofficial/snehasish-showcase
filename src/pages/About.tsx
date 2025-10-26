import { User, GraduationCap, Heart, MapPin, Calendar, Users } from "lucide-react";
import aboutBanner from "@/assets/about-banner.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-tech-gradient pt-16">
      <div className="relative h-64 overflow-hidden">
        <img src={aboutBanner} alt="About Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50 flex items-center">
          <div className="container mx-auto px-8">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary animate-fade-in">About Me</h1>
            <p className="text-xl text-muted-foreground mt-2 font-sans">Discover my journey</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card-gradient p-8 rounded-2xl border border-border shadow-glow-blue hover:shadow-glow-gold transition-all duration-500 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/20 rounded-lg"><User className="w-6 h-6 text-primary" /></div>
              <h2 className="text-2xl font-heading font-bold text-foreground">Personal Information</h2>
            </div>
            <div className="space-y-4 text-foreground/90 font-sans">
              <div className="flex items-start gap-3 p-3 bg-background/30 rounded-lg hover:bg-background/50 transition-colors">
                <User className="w-5 h-5 text-primary mt-1" />
                <div><p className="font-semibold text-primary">Name</p><p>Snehasish Das</p></div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-background/30 rounded-lg hover:bg-background/50 transition-colors">
                <Calendar className="w-5 h-5 text-primary mt-1" />
                <div><p className="font-semibold text-primary">DOB</p><p>July 19, 2005</p></div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-background/30 rounded-lg hover:bg-background/50 transition-colors">
                <Users className="w-5 h-5 text-primary mt-1" />
                <div><p className="font-semibold text-primary">Parents</p><p>Hari Mohan Das & Barnali Das</p></div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-background/30 rounded-lg hover:bg-background/50 transition-colors">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div><p className="font-semibold text-primary">Location</p><p>Rourkela, Odisha</p></div>
              </div>
            </div>
          </div>

          <div className="bg-card-gradient p-8 rounded-2xl border border-border shadow-glow-blue hover:shadow-glow-gold transition-all duration-500 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-secondary/20 rounded-lg"><GraduationCap className="w-6 h-6 text-secondary" /></div>
              <h2 className="text-2xl font-heading font-bold text-foreground">Education</h2>
            </div>
            <div className="space-y-6 text-foreground/90 font-sans">
              <div className="border-l-4 border-primary pl-4 hover:border-secondary transition-colors">
                <h3 className="font-bold text-lg text-primary">B.Tech CSE (Cyber Security)</h3>
                <p className="text-sm text-muted-foreground">Currently Pursuing</p>
                <p className="mt-2">Silicon University</p>
                <p className="text-sm text-secondary font-semibold">CGPA: 9.07/10</p>
              </div>
              <div className="border-l-4 border-primary pl-4 hover:border-secondary transition-colors">
                <h3 className="font-bold text-lg text-primary">Class 12 (CBSE)</h3>
                <p className="mt-2">KV No.1, Rourkela</p>
                <p className="text-sm text-secondary font-semibold">95.6%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-card-gradient p-8 rounded-2xl border border-border shadow-glow-blue animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-accent/20 rounded-lg"><Heart className="w-6 h-6 text-accent" /></div>
            <h2 className="text-2xl font-heading font-bold text-foreground">Personality</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4 font-heading">Strengths</h3>
              <ul className="space-y-3 font-sans">
                <li className="flex items-start gap-2 p-3 bg-primary/10 rounded-lg"><span className="text-primary font-bold">•</span><span>Leadership & Team Management</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-4 font-heading">Growth Areas</h3>
              <ul className="space-y-3 font-sans">
                <li className="flex items-start gap-2 p-3 bg-secondary/10 rounded-lg"><span className="text-secondary font-bold">•</span><span>Stress Management</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;