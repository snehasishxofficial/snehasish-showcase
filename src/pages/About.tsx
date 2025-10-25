import { User, GraduationCap, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-tech-gradient pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-orbitron font-bold text-center mb-4 animate-fade-in">
            About <span className="text-primary">Me</span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

          <div className="grid gap-8 md:gap-12">
            {/* Personal Info Card */}
            <div className="bg-card-gradient p-8 rounded-2xl border border-border shadow-glow-blue animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-orbitron font-bold">Personal Information</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <p className="mb-2"><span className="text-foreground font-semibold">Name:</span> Snehasish Das</p>
                  <p className="mb-2"><span className="text-foreground font-semibold">Date of Birth:</span> April 27, 2005</p>
                  <p className="mb-2"><span className="text-foreground font-semibold">Blood Group:</span> B-</p>
                </div>
                <div>
                  <p className="mb-2"><span className="text-foreground font-semibold">Father's Name:</span> Sukhen Das</p>
                  <p className="mb-2"><span className="text-foreground font-semibold">Mother's Name:</span> Chaitali Das</p>
                  <p className="mb-2"><span className="text-foreground font-semibold">Location:</span> Kolkata, India</p>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-card-gradient p-8 rounded-2xl border border-border shadow-glow-blue animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-3xl font-orbitron font-bold">Education</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl font-semibold text-primary mb-2">B.Tech in CSE (Cyber Security)</h3>
                  <p className="text-foreground">University of Engineering & Management, Kolkata</p>
                  <p className="text-muted-foreground">Currently Pursuing</p>
                </div>
                <div className="border-l-4 border-secondary pl-6 py-2">
                  <h3 className="text-xl font-semibold text-secondary mb-2">Class 12 - CBSE</h3>
                  <p className="text-foreground">Passed in 2023</p>
                  <p className="text-muted-foreground">Percentage: 75%</p>
                </div>
                <div className="border-l-4 border-accent pl-6 py-2">
                  <h3 className="text-xl font-semibold text-accent mb-2">Class 10 - CBSE</h3>
                  <p className="text-foreground">Passed in 2021</p>
                  <p className="text-muted-foreground">Percentage: 82%</p>
                </div>
              </div>
            </div>

            {/* Personality Card */}
            <div className="bg-card-gradient p-8 rounded-2xl border border-border shadow-glow-blue animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-3xl font-orbitron font-bold">Personality</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Strengths</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Leadership Skills
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Time Management
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Team Collaboration
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">Areas of Growth</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      Stress Management
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      Overthinking
                    </li>
                  </ul>
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
