import { BookOpen, GraduationCap, Award, Users, Target, Lightbulb, TrendingUp } from "lucide-react";
import tutoringBanner from "@/assets/tutoring-banner.jpg";

const Tutoring = () => {
  const subjects = [
    { name: "Mathematics", icon: "📐", color: "primary" },
    { name: "Science", icon: "🔬", color: "secondary" },
    { name: "Physics", icon: "⚛️", color: "accent" },
    { name: "Chemistry", icon: "🧪", color: "primary" },
    { name: "Computer Science", icon: "💻", color: "secondary" },
    { name: "Information Technology", icon: "🖥️", color: "accent" },
    { name: "Python Programming", icon: "🐍", color: "primary" },
    { name: "MySQL Database", icon: "🗄️", color: "secondary" },
  ];

  const boards = [
    { name: "CBSE", description: "Central Board of Secondary Education", icon: "📚" },
    { name: "ICSE", description: "Indian Certificate of Secondary Education", icon: "📖" },
    { name: "ISC", description: "Indian School Certificate", icon: "📝" }
  ];

  const classes = [
    { level: "Class 8", students: "15+", icon: "8️⃣" },
    { level: "Class 9", students: "20+", icon: "9️⃣" },
    { level: "Class 10", students: "25+", icon: "🔟" },
    { level: "Class 11", students: "18+", icon: "1️⃣1️⃣" },
    { level: "Class 12", students: "22+", icon: "1️⃣2️⃣" },
  ];

  const teachingApproach = [
    {
      icon: Target,
      title: "Personalized Learning",
      description: "Tailored lessons to match each student's pace and learning style",
      color: "primary",
    },
    {
      icon: Lightbulb,
      title: "Conceptual Clarity",
      description: "Focus on building strong fundamentals and understanding",
      color: "secondary",
    },
    {
      icon: TrendingUp,
      title: "Regular Assessment",
      description: "Continuous evaluation to track progress and improvement",
      color: "accent",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Premium Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img src={tutoringBanner} alt="Tutoring Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20 mb-4 w-fit">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-sm font-heading text-primary">Education & Mentorship</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-heading font-bold text-foreground animate-fade-in mb-4">
            Tutoring <span className="text-transparent bg-clip-text bg-premium-gradient">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground font-sans max-w-2xl">Empowering students to achieve academic excellence through personalized guidance</p>
        </div>
      </div>

      <div className="container mx-auto px-8 py-16 -mt-20 relative z-10">
        {/* Experience Overview */}
        <div className="bg-card/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-border/50 shadow-elevated hover:shadow-glow-premium transition-all duration-500 animate-fade-in mb-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center p-6 bg-gradient-to-br from-primary via-accent to-secondary rounded-3xl shadow-glow-premium mb-6">
              <GraduationCap className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-5xl font-heading font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-premium-gradient">3 Years</span> of Teaching Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed">
              Passionate educator dedicated to helping students excel in their academic journey through personalized attention and innovative teaching methods.
            </p>
            <div className="flex justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-muted-foreground font-sans">Students Taught</div>
              </div>
              <div className="h-16 w-px bg-border" />
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-secondary mb-1">8</div>
                <div className="text-sm text-muted-foreground font-sans">Subjects</div>
              </div>
              <div className="h-16 w-px bg-border" />
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-accent mb-1">3</div>
                <div className="text-sm text-muted-foreground font-sans">Boards</div>
              </div>
            </div>
          </div>
        </div>

        {/* Subjects Taught */}
        <div className="bg-card/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-border/50 shadow-elevated hover:shadow-glow-blue transition-all duration-500 animate-fade-in mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-gradient-to-br from-secondary to-accent rounded-2xl shadow-glow-gold">
              <BookOpen className="w-8 h-8 text-secondary-foreground" />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-bold">Subjects Taught</h2>
              <p className="text-muted-foreground font-sans">Comprehensive academic coverage</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className={`group p-6 bg-gradient-to-br from-${subject.color}/10 to-${subject.color}/5 backdrop-blur-sm rounded-2xl border-2 border-${subject.color}/30 hover:border-${subject.color} hover:shadow-glow-blue hover:scale-105 transition-all duration-300 text-center`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{subject.icon}</div>
                <p className={`text-lg font-heading font-semibold text-foreground`}>{subject.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Boards */}
          <div className="bg-card/50 backdrop-blur-xl p-8 rounded-3xl border border-border/50 shadow-elevated hover:shadow-glow-gold transition-all duration-500 animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-accent to-primary rounded-2xl shadow-glow-premium">
                <Award className="w-8 h-8 text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-3xl font-heading font-bold">Supported Boards</h2>
                <p className="text-sm text-muted-foreground font-sans">Curriculum expertise</p>
              </div>
            </div>
            <div className="space-y-4">
              {boards.map((board, index) => (
                <div
                  key={index}
                  className="group p-6 bg-background/50 backdrop-blur-sm rounded-2xl border-l-4 border-accent hover:border-primary hover:shadow-glow-blue transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{board.icon}</span>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-1">{board.name}</h3>
                      <p className="text-sm text-muted-foreground font-sans">{board.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Classes */}
          <div className="bg-card/50 backdrop-blur-xl p-8 rounded-3xl border border-border/50 shadow-elevated hover:shadow-glow-blue transition-all duration-500 animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-glow-blue">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-3xl font-heading font-bold">Classes Covered</h2>
                <p className="text-sm text-muted-foreground font-sans">All grade levels</p>
              </div>
            </div>
            <div className="space-y-4">
              {classes.map((classLevel, index) => (
                <div
                  key={index}
                  className="group p-6 bg-background/50 backdrop-blur-sm rounded-2xl border-l-4 border-primary hover:border-secondary hover:shadow-glow-blue transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{classLevel.icon}</span>
                      <h3 className="text-xl font-heading font-bold text-foreground">{classLevel.level}</h3>
                    </div>
                    <div className="px-4 py-2 bg-primary/10 rounded-full">
                      <span className="text-sm font-heading font-semibold text-primary">{classLevel.students} Students</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Teaching Approach */}
        <div className="bg-card/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-border/50 shadow-elevated hover:shadow-glow-premium transition-all duration-500 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">
              My <span className="text-transparent bg-clip-text bg-premium-gradient">Teaching Approach</span>
            </h2>
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
              A student-centered methodology focused on understanding, growth, and achievement
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teachingApproach.map((approach, index) => {
              const Icon = approach.icon;
              return (
                <div
                  key={index}
                  className={`group p-8 bg-gradient-to-br from-${approach.color}/10 to-${approach.color}/5 backdrop-blur-sm rounded-2xl border-2 border-${approach.color}/30 hover:border-${approach.color} hover:shadow-glow-premium hover:scale-105 transition-all duration-300`}
                >
                  <div className={`inline-flex p-4 bg-gradient-to-br from-${approach.color} to-accent rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 text-${approach.color}-foreground`} />
                  </div>
                  <h3 className={`text-2xl font-heading font-bold mb-3 text-${approach.color}`}>
                    {approach.title}
                  </h3>
                  <p className="text-muted-foreground font-sans leading-relaxed">{approach.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutoring;
