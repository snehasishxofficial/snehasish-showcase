import { BookOpen, GraduationCap, Award, Users } from "lucide-react";
import tutoringBanner from "@/assets/tutoring-banner.jpg";

const Tutoring = () => {
  const subjects = [
    { name: "Mathematics", icon: "📐" },
    { name: "Science", icon: "🔬" },
    { name: "Physics", icon: "⚛️" },
    { name: "Chemistry", icon: "🧪" },
    { name: "Computer Science", icon: "💻" },
    { name: "Information Technology", icon: "🖥️" },
    { name: "Python Programming", icon: "🐍" },
    { name: "MySQL Database", icon: "🗄️" },
  ];

  const boards = ["CBSE", "ICSE", "ISC"];
  const classes = ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"];

  return (
    <div className="min-h-screen bg-tech-gradient pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-orbitron font-bold text-center mb-4 animate-fade-in">
          Tutoring <span className="text-primary">Experience</span>
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Experience Overview */}
          <div className="bg-card-gradient p-8 rounded-2xl border border-border shadow-glow-blue animate-fade-in text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <GraduationCap className="w-16 h-16 text-primary" />
              </div>
            </div>
            <h2 className="text-4xl font-orbitron font-bold mb-4">
              <span className="text-primary">3 Years</span> of Teaching Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate educator dedicated to helping students excel in their academic journey through personalized attention and innovative teaching methods.
            </p>
          </div>

          {/* Subjects Taught */}
          <div className="bg-card-gradient p-8 rounded-2xl border border-border shadow-glow-blue animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <BookOpen className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-3xl font-orbitron font-bold">Subjects Taught</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className="p-6 bg-background/50 rounded-xl border border-primary/20 hover:border-primary hover:shadow-glow-blue transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-3">{subject.icon}</div>
                  <p className="text-foreground font-semibold">{subject.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Boards */}
            <div className="bg-card-gradient p-8 rounded-2xl border border-border shadow-glow-blue animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-2xl font-orbitron font-bold">Boards</h2>
              </div>
              <div className="space-y-3">
                {boards.map((board, index) => (
                  <div
                    key={index}
                    className="p-4 bg-background/50 rounded-lg border-l-4 border-accent hover:shadow-glow-blue transition-all duration-300"
                  >
                    <p className="text-foreground font-semibold text-lg">{board}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Classes */}
            <div className="bg-card-gradient p-8 rounded-2xl border border-border shadow-glow-blue animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-orbitron font-bold">Classes</h2>
              </div>
              <div className="space-y-3">
                {classes.map((classLevel, index) => (
                  <div
                    key={index}
                    className="p-4 bg-background/50 rounded-lg border-l-4 border-primary hover:shadow-glow-blue transition-all duration-300"
                  >
                    <p className="text-foreground font-semibold text-lg">{classLevel}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Teaching Approach */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/30">
            <h2 className="text-3xl font-orbitron font-bold mb-6 text-center">
              My <span className="text-primary">Teaching Approach</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-xl font-semibold text-primary mb-2">Personalized Learning</h3>
                <p className="text-muted-foreground">Tailored lessons to match each student's pace and learning style</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💡</div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Conceptual Clarity</h3>
                <p className="text-muted-foreground">Focus on building strong fundamentals and understanding</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="text-xl font-semibold text-accent mb-2">Regular Assessment</h3>
                <p className="text-muted-foreground">Continuous evaluation to track progress and improvement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutoring;
