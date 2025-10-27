import { Award, Users, Trophy, Star, Sparkles, Target } from "lucide-react";
import achievementsBanner from "@/assets/achievements-banner.jpg";

const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: "Successful Coordinator - SMF",
      description: "Led PR team, logistics, and hospitality operations with excellence",
      category: "Leadership",
      color: "primary",
      year: "2024",
    },
    {
      icon: Trophy,
      title: "Best Working Member",
      description: "Recognized at IEM Management Building for outstanding contribution",
      category: "Recognition",
      color: "secondary",
      year: "2024",
    },
    {
      icon: Users,
      title: "Volunteer - Ecstatia 2026",
      description: "Active volunteer at University of Engineering & Management, Kolkata",
      category: "Community",
      color: "accent",
      year: "2024",
    },
    {
      icon: Star,
      title: "Highest Referral - IEEE Event",
      description: "Achieved highest referral count in 'Wired of Words' event",
      category: "Achievement",
      color: "primary",
      year: "2024",
    },
  ];

  const memberships = [
    {
      title: "IEEE MTTS",
      description: "Member of IEEE Microwave Theory and Techniques Society",
      icon: "🔬",
      color: "primary",
    },
    {
      title: "IEEE CS",
      description: "Member of IEEE Computer Society",
      icon: "💻",
      color: "secondary",
    },
    {
      title: "Google Developer Groups",
      description: "Member at both UEM Campus and IEM Campus",
      icon: "🌐",
      color: "accent",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Premium Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img src={achievementsBanner} alt="Achievements Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20 mb-4 w-fit">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-heading text-primary">Milestones & Recognition</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-heading font-bold text-foreground animate-fade-in mb-4">
            My <span className="text-transparent bg-clip-text bg-premium-gradient">Achievements</span>
          </h1>
          <p className="text-xl text-muted-foreground font-sans max-w-2xl">A journey of dedication, growth, and recognition</p>
        </div>
      </div>

      <div className="container mx-auto px-8 py-16 -mt-20 relative z-10">
        {/* Achievements Timeline */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-card/50 backdrop-blur-xl p-8 rounded-3xl border border-border/50 shadow-elevated hover:shadow-glow-premium transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Year Badge */}
                  <div className="absolute top-6 right-6 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full border border-border/30">
                    <span className="text-xs font-heading font-semibold text-muted-foreground">{achievement.year}</span>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className={`p-4 bg-gradient-to-br from-${achievement.color} to-accent rounded-2xl shadow-glow-blue group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <Icon className={`w-8 h-8 text-${achievement.color}-foreground`} />
                    </div>
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-background/50 rounded-full mb-3">
                        <Sparkles className={`w-3 h-3 text-${achievement.color}`} />
                        <span className={`text-xs font-heading font-semibold text-${achievement.color}`}>{achievement.category}</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground font-sans leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Professional Memberships */}
        <div className="bg-card/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-border/50 shadow-elevated hover:shadow-glow-blue transition-all duration-500 animate-fade-in mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-gradient-to-br from-accent to-primary rounded-2xl shadow-glow-premium">
              <Target className="w-8 h-8 text-accent-foreground" />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-bold">
                Professional <span className="text-transparent bg-clip-text bg-premium-gradient">Memberships</span>
              </h2>
              <p className="text-muted-foreground font-sans">Part of prestigious technical communities</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {memberships.map((membership, index) => (
              <div
                key={index}
                className={`group p-8 bg-gradient-to-br from-${membership.color}/10 to-${membership.color}/5 backdrop-blur-sm rounded-2xl border-2 border-${membership.color}/30 hover:border-${membership.color} hover:shadow-glow-blue transition-all duration-300`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{membership.icon}</div>
                <h3 className={`text-2xl font-heading font-bold mb-3 text-${membership.color}`}>
                  {membership.title}
                </h3>
                <p className="text-muted-foreground font-sans">{membership.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="bg-card/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-border/50 shadow-elevated hover:shadow-glow-gold transition-all duration-500 animate-fade-in mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-gradient-to-br from-secondary to-primary rounded-2xl shadow-glow-gold">
              <Award className="w-8 h-8 text-secondary-foreground" />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-bold">
                <span className="text-transparent bg-clip-text bg-premium-gradient">Certifications</span>
              </h2>
              <p className="text-muted-foreground font-sans">Industry-recognized credentials</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border-l-4 border-primary hover:shadow-glow-blue hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/20 rounded-xl group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary">Google</h3>
              </div>
              <p className="text-muted-foreground font-sans">Cyber Security Professional Certificate</p>
            </div>
            <div className="group p-8 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border-l-4 border-accent hover:shadow-glow-blue hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent/20 rounded-xl group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-accent">IBM</h3>
              </div>
              <p className="text-muted-foreground font-sans">Cyber Security Analyst Certificate</p>
            </div>
            <div className="group p-8 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl border-l-4 border-secondary hover:shadow-glow-gold hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-secondary/20 rounded-xl group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-secondary">Google AI</h3>
              </div>
              <p className="text-muted-foreground font-sans">Generative AI Essentials</p>
            </div>
          </div>
        </div>

        {/* Motivational Banner */}
        <div className="bg-gradient-to-r from-primary via-accent to-secondary p-8 rounded-3xl shadow-glow-premium text-center">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-12 h-12 text-white animate-pulse" />
          </div>
          <p className="text-white text-2xl font-heading font-bold">
            The journey continues with many more achievements on the horizon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
