import { Award, Users, Trophy, Star } from "lucide-react";
import achievementsBanner from "@/assets/achievements-banner.jpg";

const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: "Successful Coordinator - SMF",
      description: "Led PR team, logistics, and hospitality operations with excellence",
      category: "Leadership",
    },
    {
      icon: Trophy,
      title: "Best Working Member",
      description: "Recognized at IEM Management Building for outstanding contribution",
      category: "Recognition",
    },
    {
      icon: Users,
      title: "Volunteer - Ecstatia 2026",
      description: "Active volunteer at University of Engineering & Management, Kolkata",
      category: "Community",
    },
    {
      icon: Star,
      title: "Highest Referral - IEEE Event",
      description: "Achieved highest referral count in 'Wired of Words' event",
      category: "Achievement",
    },
  ];

  const memberships = [
    {
      title: "IEEE MTTS",
      description: "Member of IEEE Microwave Theory and Techniques Society",
      color: "primary",
    },
    {
      title: "IEEE CS",
      description: "Member of IEEE Computer Society",
      color: "secondary",
    },
    {
      title: "Google Developer Groups",
      description: "Member at both UEM Campus and IEM Campus",
      color: "accent",
    },
  ];

  return (
    <div className="min-h-screen bg-tech-gradient pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-orbitron font-bold text-center mb-4 animate-fade-in">
          My <span className="text-primary">Achievements</span>
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-card-gradient p-8 rounded-2xl border border-border shadow-glow-blue hover:scale-105 transition-all duration-300 animate-fade-in"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-secondary font-semibold">{achievement.category}</span>
                      <h3 className="text-xl font-orbitron font-bold mb-2 text-foreground">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Professional Memberships */}
          <div className="bg-card-gradient p-8 rounded-2xl border border-border shadow-glow-blue animate-fade-in">
            <h2 className="text-3xl font-orbitron font-bold mb-8 text-center">
              Professional <span className="text-primary">Memberships</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {memberships.map((membership, index) => (
                <div
                  key={index}
                  className={`p-6 bg-background/50 rounded-xl border-2 border-${membership.color}/30 hover:border-${membership.color} hover:shadow-glow-blue transition-all duration-300`}
                >
                  <h3 className={`text-xl font-orbitron font-bold mb-3 text-${membership.color}`}>
                    {membership.title}
                  </h3>
                  <p className="text-muted-foreground">{membership.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="bg-card-gradient p-8 rounded-2xl border border-border shadow-glow-blue animate-fade-in">
            <h2 className="text-3xl font-orbitron font-bold mb-8 text-center">
              <span className="text-primary">Certifications</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-background/50 rounded-xl border-l-4 border-primary hover:shadow-glow-blue transition-all duration-300">
                <h3 className="text-lg font-semibold text-primary mb-2">Google</h3>
                <p className="text-muted-foreground">Cyber Security Professional Certificate</p>
              </div>
              <div className="p-6 bg-background/50 rounded-xl border-l-4 border-accent hover:shadow-glow-blue transition-all duration-300">
                <h3 className="text-lg font-semibold text-accent mb-2">IBM</h3>
                <p className="text-muted-foreground">Cyber Security Analyst Certificate</p>
              </div>
              <div className="p-6 bg-background/50 rounded-xl border-l-4 border-secondary hover:shadow-glow-blue transition-all duration-300">
                <h3 className="text-lg font-semibold text-secondary mb-2">Google AI</h3>
                <p className="text-muted-foreground">Generative AI Essentials</p>
              </div>
            </div>
          </div>

          {/* Additional Note */}
          <div className="bg-primary/10 p-6 rounded-xl border border-primary/30 text-center">
            <p className="text-foreground text-lg">
              <span className="text-primary font-semibold">And many more achievements</span> to come as I continue my journey in technology and education!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
