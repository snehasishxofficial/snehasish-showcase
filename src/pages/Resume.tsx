import { Download, Mail, Phone, MapPin, Calendar, User, GraduationCap, Award, Briefcase, FileText } from "lucide-react";
import resumeBanner from "@/assets/resume-banner.jpg";

const Resume = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Premium Header */}
      <div className="relative h-80 overflow-hidden">
        <div className="absolute inset-0">
          <img src={resumeBanner} alt="Resume Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="relative container mx-auto px-8 h-full flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20 mb-4">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm font-heading text-primary">Professional CV</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-foreground animate-fade-in mb-2">
              <span className="text-transparent bg-clip-text bg-premium-gradient">Resume</span>
            </h1>
            <p className="text-xl text-muted-foreground font-sans">Professional profile and qualifications</p>
          </div>
          <button
            onClick={() => window.print()}
            className="hidden md:flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl hover:scale-105 transition-all duration-300 shadow-glow-blue font-heading font-semibold"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </button>
        </div>
      </div>

      <div className="container mx-auto px-8 py-16 -mt-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Resume Card */}
          <div className="bg-card/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-border/50 shadow-elevated animate-fade-in">
            {/* Header Section */}
            <div className="text-center mb-12 pb-8 border-b border-border/50">
              <h2 className="text-5xl font-heading font-bold mb-3 text-foreground">SNEHASISH DAS</h2>
              <p className="text-2xl font-heading text-transparent bg-clip-text bg-premium-gradient mb-6">B.Tech CSE (Cyber Security)</p>
              <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2 px-4 py-2 bg-background/50 rounded-full">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="font-sans">snehasishxofficial@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-background/50 rounded-full">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span className="font-sans">+91 7439115647</span>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl font-heading font-bold">Personal Information</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-background/50 backdrop-blur-sm rounded-xl border border-border/30">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-heading font-semibold text-foreground mb-1">Date of Birth</p>
                      <p className="text-muted-foreground font-sans">April 27, 2005</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-background/50 backdrop-blur-sm rounded-xl border border-border/30">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <p className="font-heading font-semibold text-foreground mb-1">Address</p>
                      <p className="text-muted-foreground font-sans text-sm">A26 Vidyasagar Park, Nabanagar, Birati, Kolkata - 700051</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-background/50 backdrop-blur-sm rounded-xl border border-border/30">
                  <p className="font-heading font-semibold text-foreground mb-1">Father's Name</p>
                  <p className="text-muted-foreground font-sans">Sukhen Das</p>
                </div>
                <div className="p-5 bg-background/50 backdrop-blur-sm rounded-xl border border-border/30">
                  <p className="font-heading font-semibold text-foreground mb-1">Mother's Name</p>
                  <p className="text-muted-foreground font-sans">Chaitali Das</p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-secondary/10 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-3xl font-heading font-bold">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-2xl border-l-4 border-primary hover:shadow-glow-blue transition-all">
                  <h4 className="text-xl font-heading font-bold text-primary mb-2">B.Tech in Computer Science & Engineering</h4>
                  <p className="font-sans text-foreground mb-1">Cyber Security Specialization</p>
                  <p className="text-muted-foreground font-sans mb-2">University of Engineering & Management, Kolkata</p>
                  <span className="inline-flex px-3 py-1 bg-primary/20 rounded-full text-sm font-heading font-semibold text-primary">Currently Pursuing</span>
                </div>
                <div className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-sm rounded-2xl border-l-4 border-secondary hover:shadow-glow-gold transition-all">
                  <h4 className="text-xl font-heading font-bold text-secondary mb-2">Class 12 - CBSE</h4>
                  <p className="text-foreground font-sans mb-1">Passed in 2023</p>
                  <span className="inline-flex px-3 py-1 bg-secondary/20 rounded-full text-sm font-heading font-semibold text-secondary">Percentage: 75%</span>
                </div>
                <div className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm rounded-2xl border-l-4 border-accent hover:shadow-glow-blue transition-all">
                  <h4 className="text-xl font-heading font-bold text-accent mb-2">Class 10 - CBSE</h4>
                  <p className="text-foreground font-sans mb-1">Passed in 2021</p>
                  <span className="inline-flex px-3 py-1 bg-accent/20 rounded-full text-sm font-heading font-semibold text-accent">Percentage: 82%</span>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-3xl font-heading font-bold">Skills</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/30">
                  <p className="font-heading font-bold text-lg text-primary mb-4">Technical Skills</p>
                  <ul className="space-y-2 text-muted-foreground font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span> Python Programming
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span> MySQL Database
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span> Computer Science
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span> Information Technology
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span> Cyber Security
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span> Generative AI
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/30">
                  <p className="font-heading font-bold text-lg text-secondary mb-4">Soft Skills</p>
                  <ul className="space-y-2 text-muted-foreground font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span> Leadership
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span> Team Work
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span> Time Management
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span> Communication
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span> Graphic Design
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl font-heading font-bold">Experience</h3>
              </div>
              <div className="space-y-4">
                <div className="p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/30 hover:border-primary/50 transition-all">
                  <h4 className="text-xl font-heading font-bold text-primary mb-2">Private Tutor</h4>
                  <p className="text-muted-foreground font-sans mb-3">3 Years Experience | Classes 8-12 | CBSE, ICSE, ISC Boards</p>
                  <p className="text-foreground font-sans">Subjects: Mathematics, Science, Physics, Chemistry, Computer Science, Python, MySQL</p>
                </div>
                <div className="p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/30 hover:border-secondary/50 transition-all">
                  <h4 className="text-xl font-heading font-bold text-secondary mb-2">Coordinator - SMF</h4>
                  <p className="text-foreground font-sans mb-2">PR Team, Logistics & Hospitality</p>
                  <p className="text-muted-foreground font-sans">Awarded Best Working Member at IEM Management Building</p>
                </div>
              </div>
            </section>

            {/* Strengths & Weaknesses */}
            <section>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-2xl border-l-4 border-primary">
                  <h3 className="text-2xl font-heading font-bold mb-4 text-primary">Strengths</h3>
                  <ul className="space-y-2 text-muted-foreground font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span> Leadership Skills
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span> Time Management
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span> Problem Solving
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-sm rounded-2xl border-l-4 border-secondary">
                  <h3 className="text-2xl font-heading font-bold mb-4 text-secondary">Areas of Growth</h3>
                  <ul className="space-y-2 text-muted-foreground font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">○</span> Stress Management
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">○</span> Overthinking
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Mobile Download Button */}
          <div className="mt-8 md:hidden">
            <button
              onClick={() => window.print()}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl hover:scale-105 transition-all duration-300 shadow-glow-blue font-heading font-semibold"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
