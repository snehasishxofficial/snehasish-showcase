import { Code, Languages, Shield, Palette, Users, Zap, Award } from "lucide-react";
import skillsBanner from "@/assets/skills-banner.jpg";

const Skills = () => {
  const technicalSkills = [
    { name: "Python Programming", level: 90, icon: "🐍" },
    { name: "MySQL", level: 85, icon: "🗄️" },
    { name: "Computer Science", level: 88, icon: "💻" },
    { name: "Information Technology", level: 82, icon: "🖥️" },
    { name: "Cyber Security (Google)", level: 87, icon: "🔒" },
    { name: "Cyber Security (IBM)", level: 85, icon: "🛡️" },
    { name: "Generative AI", level: 80, icon: "🤖" },
  ];

  const languages = [
    { name: "English", level: "Proficient", proficiency: 90 },
    { name: "Bengali", level: "Mother Tongue", proficiency: 100 },
    { name: "Hindi", level: "Proficient", proficiency: 85 },
  ];

  const softSkills = [
    { name: "Team Work", icon: "🤝", rating: 5 },
    { name: "Leadership", icon: "👑", rating: 5 },
    { name: "Time Management", icon: "⏰", rating: 4 },
    { name: "Communication", icon: "💬", rating: 5 },
    { name: "Problem Solving", icon: "🧩", rating: 5 },
  ];

  const designSkills = [
    { name: "Graphic Design", icon: "🎨", level: 85 },
    { name: "Poster Creation", icon: "📊", level: 90 },
    { name: "Instagram Posts", icon: "📱", level: 88 },
    { name: "Event Graphics", icon: "🎭", level: 82 },
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Premium Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img src={skillsBanner} alt="Skills Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20 mb-4 w-fit">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-heading text-primary">Expertise & Proficiency</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-heading font-bold text-foreground animate-fade-in mb-4">
            My <span className="text-transparent bg-clip-text bg-premium-gradient">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground font-sans max-w-2xl">A comprehensive showcase of technical expertise and creative abilities</p>
        </div>
      </div>

      <div className="container mx-auto px-8 py-16 -mt-20 relative z-10">
        {/* Technical Skills with Progress Bars */}
        <div className="bg-card/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-border/50 shadow-elevated hover:shadow-glow-blue transition-all duration-500 animate-fade-in mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-glow-blue">
              <Code className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-bold">Technical Skills</h2>
              <p className="text-muted-foreground font-sans">Proficiency in programming and technologies</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="group p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/30 hover:border-primary/50 hover:shadow-glow-blue transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="font-heading font-semibold text-foreground">{skill.name}</h3>
                  </div>
                  <span className="text-primary font-heading font-bold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Languages */}
          <div className="bg-card/50 backdrop-blur-xl p-8 rounded-3xl border border-border/50 shadow-elevated hover:shadow-glow-gold transition-all duration-500 animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-secondary to-accent rounded-2xl shadow-glow-gold">
                <Languages className="w-8 h-8 text-secondary-foreground" />
              </div>
              <div>
                <h2 className="text-3xl font-heading font-bold">Languages</h2>
                <p className="text-muted-foreground font-sans text-sm">Communication proficiency</p>
              </div>
            </div>
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={index} className="group p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/30 hover:border-secondary/50 hover:shadow-glow-gold transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-foreground">{lang.name}</h3>
                      <p className="text-sm text-muted-foreground">{lang.level}</p>
                    </div>
                    <span className="text-secondary font-heading font-bold">{lang.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-secondary to-accent transition-all duration-1000 ease-out rounded-full"
                      style={{ width: `${lang.proficiency}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-card/50 backdrop-blur-xl p-8 rounded-3xl border border-border/50 shadow-elevated hover:shadow-glow-premium transition-all duration-500 animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-accent to-primary rounded-2xl shadow-glow-premium">
                <Users className="w-8 h-8 text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-3xl font-heading font-bold">Soft Skills</h2>
                <p className="text-muted-foreground font-sans text-sm">Interpersonal abilities</p>
              </div>
            </div>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="group p-5 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/30 hover:border-accent/50 hover:shadow-glow-blue transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-heading font-semibold text-foreground">{skill.name}</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < skill.rating ? 'bg-accent' : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Design Skills & Certifications */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-card/50 backdrop-blur-xl p-8 rounded-3xl border border-border/50 shadow-elevated hover:shadow-glow-blue transition-all duration-500 animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-secondary via-accent to-primary rounded-2xl shadow-glow-premium">
                <Palette className="w-8 h-8 text-secondary-foreground" />
              </div>
              <div>
                <h2 className="text-3xl font-heading font-bold">Design Skills</h2>
                <p className="text-muted-foreground font-sans">Creative expertise</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {designSkills.map((skill, index) => (
                <div key={index} className="group p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/30 hover:border-secondary/50 hover:shadow-glow-gold transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <h3 className="font-heading font-semibold text-foreground">{skill.name}</h3>
                    </div>
                    <span className="text-secondary font-heading font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-secondary via-accent to-primary transition-all duration-1000 ease-out rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-xl p-8 rounded-3xl border border-border/50 shadow-elevated hover:shadow-glow-gold transition-all duration-500 animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-glow-blue">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold">Certifications</h2>
              </div>
            </div>
            <div className="space-y-4">
              <div className="group p-5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border-l-4 border-primary hover:shadow-glow-blue transition-all">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-primary mb-1">Google</h3>
                    <p className="text-sm text-muted-foreground font-sans">Cyber Security Professional</p>
                  </div>
                </div>
              </div>
              <div className="group p-5 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border-l-4 border-accent hover:shadow-glow-blue transition-all">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-accent mb-1">IBM</h3>
                    <p className="text-sm text-muted-foreground font-sans">Cyber Security Analyst</p>
                  </div>
                </div>
              </div>
              <div className="group p-5 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl border-l-4 border-secondary hover:shadow-glow-gold transition-all">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-secondary mb-1">Google AI</h3>
                    <p className="text-sm text-muted-foreground font-sans">Generative AI Essentials</p>
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

export default Skills;
