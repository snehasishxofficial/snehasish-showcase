import { Download, Mail, Phone, MapPin, Calendar, User, GraduationCap, Award, Briefcase } from "lucide-react";
import resumeBanner from "@/assets/resume-banner.jpg";

const Resume = () => {
  return (
    <div className="min-h-screen bg-tech-gradient pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-5xl font-orbitron font-bold animate-fade-in">
              <span className="text-primary">Resume</span>
            </h1>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-glow-blue"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </button>
          </div>

          <div className="bg-card-gradient p-8 md:p-12 rounded-2xl border border-border shadow-glow-blue animate-fade-in">
            {/* Header */}
            <div className="text-center mb-8 pb-8 border-b border-border">
              <h2 className="text-4xl font-orbitron font-bold mb-2">SNEHASISH DAS</h2>
              <p className="text-xl text-primary mb-4">B.Tech CSE (Cyber Security)</p>
              <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>snehasishxofficial@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 7439115647</span>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-orbitron font-bold">Personal Information</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Calendar className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-foreground font-semibold">Date of Birth</p>
                    <p>April 27, 2005</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-foreground font-semibold">Address</p>
                    <p>A26 Vidyasagar Park, Nabanagar</p>
                    <p>Birati, Kolkata - 700051</p>
                  </div>
                </div>
                <div>
                  <p className="text-foreground font-semibold">Father's Name</p>
                  <p>Sukhen Das</p>
                </div>
                <div>
                  <p className="text-foreground font-semibold">Mother's Name</p>
                  <p>Chaitali Das</p>
                </div>
                <div>
                  <p className="text-foreground font-semibold">Blood Group</p>
                  <p>B-</p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-secondary" />
                <h3 className="text-2xl font-orbitron font-bold">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-background/50 rounded-lg border-l-4 border-primary">
                  <h4 className="text-lg font-semibold text-primary">B.Tech in Computer Science & Engineering (Cyber Security)</h4>
                  <p className="text-foreground">University of Engineering & Management, Kolkata</p>
                  <p className="text-muted-foreground">Currently Pursuing</p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg border-l-4 border-secondary">
                  <h4 className="text-lg font-semibold text-secondary">Class 12 - CBSE</h4>
                  <p className="text-foreground">Passed in 2023</p>
                  <p className="text-muted-foreground">Percentage: 75%</p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg border-l-4 border-accent">
                  <h4 className="text-lg font-semibold text-accent">Class 10 - CBSE</h4>
                  <p className="text-foreground">Passed in 2021</p>
                  <p className="text-muted-foreground">Percentage: 82%</p>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-orbitron font-bold">Skills</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-foreground font-semibold mb-2">Technical Skills</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Python Programming</li>
                    <li>• MySQL Database</li>
                    <li>• Computer Science</li>
                    <li>• Information Technology</li>
                    <li>• Cyber Security</li>
                    <li>• Generative AI</li>
                  </ul>
                </div>
                <div>
                  <p className="text-foreground font-semibold mb-2">Soft Skills</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Leadership</li>
                    <li>• Team Work</li>
                    <li>• Time Management</li>
                    <li>• Communication</li>
                    <li>• Graphic Design</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-secondary" />
                <h3 className="text-2xl font-orbitron font-bold">Experience</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-background/50 rounded-lg">
                  <h4 className="text-lg font-semibold text-primary">Private Tutor</h4>
                  <p className="text-muted-foreground">3 Years Experience</p>
                  <p className="text-foreground mt-2">Classes 8-12 | CBSE, ICSE, ISC Boards</p>
                  <p className="text-muted-foreground">Subjects: Mathematics, Science, Physics, Chemistry, Computer Science, Python, MySQL</p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg">
                  <h4 className="text-lg font-semibold text-secondary">Coordinator - SMF</h4>
                  <p className="text-foreground">PR Team, Logistics & Hospitality</p>
                  <p className="text-muted-foreground">Awarded Best Working Member at IEM Management Building</p>
                </div>
              </div>
            </section>

            {/* Strengths & Weaknesses */}
            <section>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-3 text-primary">Strengths</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Leadership Skills</li>
                    <li>• Time Management</li>
                    <li>• Problem Solving</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-3 text-secondary">Areas of Growth</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Stress Management</li>
                    <li>• Overthinking</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
