import { Code, Languages, Shield, Palette, Users } from "lucide-react";
import skillsBanner from "@/assets/skills-banner.jpg";

const Skills = () => {
  const technicalSkills = [
    "Python Programming",
    "MySQL",
    "Computer Science",
    "Information Technology",
    "Cyber Security (Google Certified)",
    "Cyber Security (IBM Certified)",
    "Generative AI (Google AI Essentials)",
  ];

  const languages = [
    { name: "English", level: "Proficient" },
    { name: "Bengali", level: "Mother Tongue" },
    { name: "Hindi", level: "Proficient" },
  ];

  const softSkills = [
    "Team Work",
    "Leadership",
    "Time Management",
    "Communication",
    "Problem Solving",
  ];

  const designSkills = [
    "Graphic Design",
    "Poster Creation",
    "Instagram Posts",
    "Event Graphics",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background pt-16">
      <div className="relative h-64 overflow-hidden">
        <img src={skillsBanner} alt="Skills Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent flex items-center">
          <div className="container mx-auto px-8">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary animate-fade-in">My Skills</h1>
            <p className="text-xl text-muted-foreground mt-2 font-sans">Technical & creative expertise</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="max-w-6xl mx-auto grid gap-8">
          {/* Technical Skills */}
          <div className="bg-card-gradient p-8 rounded-2xl border border-border shadow-glow-blue animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-orbitron font-bold">Technical Skills</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 bg-background/50 rounded-lg border border-primary/20 hover:border-primary hover:shadow-glow-blue transition-all duration-300"
                >
                  <p className="text-foreground font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-card-gradient p-8 rounded-2xl border border-border shadow-glow-blue animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Languages className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-3xl font-orbitron font-bold">Languages</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {languages.map((lang, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold text-primary mb-2">{lang.name}</h3>
                  <p className="text-muted-foreground">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Soft Skills */}
            <div className="bg-card-gradient p-8 rounded-2xl border border-border shadow-glow-blue animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-2xl font-orbitron font-bold">Soft Skills</h2>
              </div>
              <div className="space-y-3">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-accent/20 hover:border-accent hover:shadow-glow-blue transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <p className="text-foreground font-medium">{skill}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Skills */}
            <div className="bg-card-gradient p-8 rounded-2xl border border-border shadow-glow-blue animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Palette className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-2xl font-orbitron font-bold">Design Skills</h2>
              </div>
              <div className="space-y-3">
                {designSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-secondary/20 hover:border-secondary hover:shadow-glow-gold transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <p className="text-foreground font-medium">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-card-gradient p-8 rounded-2xl border border-border shadow-glow-blue animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-orbitron font-bold">Certifications</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-background/50 rounded-lg border-l-4 border-primary">
                <h3 className="text-lg font-semibold text-primary mb-2">Google</h3>
                <p className="text-muted-foreground">Cyber Security Certification</p>
              </div>
              <div className="p-6 bg-background/50 rounded-lg border-l-4 border-accent">
                <h3 className="text-lg font-semibold text-accent mb-2">IBM</h3>
                <p className="text-muted-foreground">Cyber Security Certification</p>
              </div>
              <div className="p-6 bg-background/50 rounded-lg border-l-4 border-secondary">
                <h3 className="text-lg font-semibold text-secondary mb-2">Google AI</h3>
                <p className="text-muted-foreground">Generative AI Essentials</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
