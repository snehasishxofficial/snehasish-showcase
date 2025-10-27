import { User, GraduationCap, Heart, MapPin, Calendar, Users, Award, Target } from "lucide-react";
import aboutBanner from "@/assets/about-banner.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Banner with Parallax Effect */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutBanner} alt="About Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20 mb-4 w-fit">
            <User className="w-4 h-4 text-primary" />
            <span className="text-sm font-heading text-primary">Get to Know Me</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-heading font-bold text-foreground animate-fade-in mb-4">
            About <span className="text-transparent bg-clip-text bg-premium-gradient">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground font-sans max-w-2xl">Discover my journey through technology, education, and personal growth</p>
        </div>
      </div>

      <div className="container mx-auto px-8 py-16 -mt-20 relative z-10">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Personal Information - Spans 2 columns */}
          <div className="lg:col-span-2 bg-card/50 backdrop-blur-xl p-8 rounded-3xl border border-border/50 shadow-elevated hover:shadow-glow-premium transition-all duration-500 animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-4 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-glow-blue">
                <User className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground">Personal Information</h2>
                <p className="text-muted-foreground font-sans">Building my future, one step at a time</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/30 hover:border-primary/50 hover:shadow-glow-blue transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-heading font-semibold text-primary mb-1">Full Name</p>
                    <p className="text-lg font-sans text-foreground">Snehasish Das</p>
                  </div>
                </div>
              </div>
              <div className="group p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/30 hover:border-secondary/50 hover:shadow-glow-gold transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-xl group-hover:scale-110 transition-transform">
                    <Calendar className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-heading font-semibold text-secondary mb-1">Date of Birth</p>
                    <p className="text-lg font-sans text-foreground">July 19, 2005</p>
                  </div>
                </div>
              </div>
              <div className="group p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/30 hover:border-accent/50 hover:shadow-glow-blue transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-heading font-semibold text-accent mb-1">Parents</p>
                    <p className="text-lg font-sans text-foreground">Hari Mohan Das & Barnali Das</p>
                  </div>
                </div>
              </div>
              <div className="group p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/30 hover:border-primary/50 hover:shadow-glow-blue transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-heading font-semibold text-primary mb-1">Location</p>
                    <p className="text-lg font-sans text-foreground">Rourkela, Odisha</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education - 1 column */}
          <div className="bg-card/50 backdrop-blur-xl p-8 rounded-3xl border border-border/50 shadow-elevated hover:shadow-glow-gold transition-all duration-500 animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-4 bg-gradient-to-br from-secondary to-accent rounded-2xl shadow-glow-gold">
                <GraduationCap className="w-8 h-8 text-secondary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground">Education</h2>
                <p className="text-sm text-muted-foreground font-sans">Academic Journey</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-4 border-primary hover:border-secondary transition-colors group">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background group-hover:scale-125 transition-transform" />
                <div className="bg-background/50 p-5 rounded-xl border border-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-primary" />
                    <h3 className="font-heading font-bold text-lg text-primary">B.Tech CSE</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Cyber Security Specialization</p>
                  <p className="font-sans text-foreground mb-2">Silicon University</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                    <span className="text-sm font-heading font-semibold text-primary">CGPA: 9.07/10</span>
                  </div>
                </div>
              </div>
              <div className="relative pl-6 border-l-4 border-secondary hover:border-primary transition-colors group">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-secondary rounded-full border-4 border-background group-hover:scale-125 transition-transform" />
                <div className="bg-background/50 p-5 rounded-xl border border-border/30">
                  <h3 className="font-heading font-bold text-lg text-secondary mb-1">Class 12 (CBSE)</h3>
                  <p className="font-sans text-foreground mb-2">KV No.1, Rourkela</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full">
                    <span className="text-sm font-heading font-semibold text-secondary">95.6%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personality Section */}
        <div className="bg-card/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-border/50 shadow-elevated animate-fade-in">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-4 bg-gradient-to-br from-accent to-primary rounded-2xl shadow-glow-premium">
              <Heart className="w-8 h-8 text-accent-foreground" />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground">Personality Traits</h2>
              <p className="text-muted-foreground font-sans">What defines me</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-heading font-semibold text-primary">Strengths</h3>
              </div>
              <div className="group p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 hover:border-primary/50 hover:shadow-glow-blue transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 group-hover:scale-150 transition-transform" />
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-1">Leadership & Team Management</h4>
                    <p className="text-muted-foreground text-sm font-sans">Natural ability to guide and inspire teams towards common goals</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-secondary" />
                <h3 className="text-2xl font-heading font-semibold text-secondary">Growth Areas</h3>
              </div>
              <div className="group p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl border border-secondary/20 hover:border-secondary/50 hover:shadow-glow-gold transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-secondary rounded-full mt-2 group-hover:scale-150 transition-transform" />
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-1">Stress Management</h4>
                    <p className="text-muted-foreground text-sm font-sans">Continuously working on maintaining balance in high-pressure situations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
