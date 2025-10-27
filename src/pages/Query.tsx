import { MessageSquare, ExternalLink, CheckCircle, Sparkles } from "lucide-react";
import queryBanner from "@/assets/query-banner.jpg";

const Query = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Premium Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img src={queryBanner} alt="Query Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20 mb-4 w-fit">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-heading text-primary">Ask Me Anything</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-heading font-bold text-foreground animate-fade-in mb-4">
            Send a <span className="text-transparent bg-clip-text bg-premium-gradient">Query</span>
          </h1>
          <p className="text-xl text-muted-foreground font-sans max-w-2xl">I'm here to help with your questions, whether it's about tutoring, collaborations, or tech inquiries</p>
        </div>
      </div>

      <div className="container mx-auto px-8 py-16 -mt-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Query Card */}
          <div className="bg-card/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-border/50 shadow-elevated hover:shadow-glow-premium transition-all duration-500 animate-fade-in mb-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl shadow-glow-premium">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-heading font-bold">Get in Touch</h2>
                <p className="text-muted-foreground font-sans">Fill out the form to reach me instantly</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-background/80 to-background/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-border/30">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                  <p className="text-lg font-heading font-semibold text-foreground">
                    Quick & Easy Communication
                  </p>
                  <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
                </div>
                <p className="text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
                  Use the form below to send your queries, requests for tutoring sessions, collaboration opportunities, or any other questions you might have.
                </p>
              </div>

              <a
                href="https://forms.gle/zB8fGjzLAQotoPkx6"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 w-full px-8 py-6 bg-gradient-to-r from-primary via-accent to-secondary text-white rounded-2xl hover:scale-105 transition-all duration-300 shadow-glow-premium overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-xl font-heading font-bold">Open Query Form</span>
                <ExternalLink className="relative w-6 h-6 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>

          {/* Query Categories */}
          <div className="bg-card/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-border/50 shadow-elevated hover:shadow-glow-blue transition-all duration-500 animate-fade-in mb-8">
            <h3 className="text-3xl font-heading font-bold mb-8 text-center">
              What You Can <span className="text-transparent bg-clip-text bg-premium-gradient">Ask About</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group p-6 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-2xl border-2 border-primary/30 hover:border-primary hover:shadow-glow-blue hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📚</div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-primary mb-2">Tutoring Inquiries</h4>
                    <p className="text-muted-foreground text-sm font-sans">Questions about subjects, class schedules, teaching methodology, and fees</p>
                  </div>
                </div>
              </div>
              <div className="group p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-sm rounded-2xl border-2 border-secondary/30 hover:border-secondary hover:shadow-glow-gold hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🤝</div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-secondary mb-2">Collaborations</h4>
                    <p className="text-muted-foreground text-sm font-sans">Project partnerships, tech collaborations, and joint ventures</p>
                  </div>
                </div>
              </div>
              <div className="group p-6 bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm rounded-2xl border-2 border-accent/30 hover:border-accent hover:shadow-glow-blue hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">💼</div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-accent mb-2">Professional</h4>
                    <p className="text-muted-foreground text-sm font-sans">Career opportunities, networking, and professional consultation</p>
                  </div>
                </div>
              </div>
              <div className="group p-6 bg-gradient-to-br from-primary/10 to-accent/5 backdrop-blur-sm rounded-2xl border-2 border-primary/30 hover:border-accent hover:shadow-glow-premium hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">💡</div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-primary mb-2">General Inquiries</h4>
                    <p className="text-muted-foreground text-sm font-sans">Any other questions, suggestions, or feedback you'd like to share</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Response Time Info */}
          <div className="bg-gradient-to-r from-primary via-accent to-secondary p-8 rounded-3xl shadow-glow-premium">
            <div className="flex items-center justify-center gap-4 text-center">
              <CheckCircle className="w-8 h-8 text-white flex-shrink-0" />
              <div>
                <p className="text-white text-lg font-heading font-bold mb-1">
                  Quick Response Guaranteed
                </p>
                <p className="text-white/90 text-sm font-sans">
                  I typically respond within 24-48 hours. For urgent matters, please use the contact information on the Contact page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Query;
