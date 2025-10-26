import { MessageSquare, ExternalLink } from "lucide-react";
import queryBanner from "@/assets/query-banner.jpg";

const Query = () => {
  return (
    <div className="min-h-screen bg-tech-gradient pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-orbitron font-bold text-center mb-4 animate-fade-in">
          Send a <span className="text-primary">Query</span>
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card-gradient p-8 rounded-2xl border border-border shadow-glow-blue animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-orbitron font-bold">Get in Touch</h2>
                <p className="text-muted-foreground">Fill out the form to reach me</p>
              </div>
            </div>

            <div className="bg-background/50 p-8 rounded-xl border border-border">
              <p className="text-foreground text-lg mb-6 text-center">
                Please use the form below to send your queries, requests for tutoring, collaboration opportunities, or any other questions.
              </p>

              <a
                href="https://forms.gle/zB8fGjzLAQotoPkx6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-glow-blue text-lg font-semibold"
              >
                <span>Open Query Form</span>
                <ExternalLink className="w-5 h-5" />
              </a>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-xl font-orbitron font-bold mb-4 text-center">What You Can Ask</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-card/50 rounded-lg border border-primary/20">
                    <h4 className="text-primary font-semibold mb-2">📚 Tutoring Inquiries</h4>
                    <p className="text-muted-foreground text-sm">Questions about subjects, schedules, and fees</p>
                  </div>
                  <div className="p-4 bg-card/50 rounded-lg border border-secondary/20">
                    <h4 className="text-secondary font-semibold mb-2">🤝 Collaborations</h4>
                    <p className="text-muted-foreground text-sm">Project partnerships and tech collaborations</p>
                  </div>
                  <div className="p-4 bg-card/50 rounded-lg border border-accent/20">
                    <h4 className="text-accent font-semibold mb-2">💼 Professional</h4>
                    <p className="text-muted-foreground text-sm">Career opportunities and networking</p>
                  </div>
                  <div className="p-4 bg-card/50 rounded-lg border border-primary/20">
                    <h4 className="text-primary font-semibold mb-2">💡 General</h4>
                    <p className="text-muted-foreground text-sm">Any other questions or suggestions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-6 bg-primary/10 rounded-xl border border-primary/30">
              <p className="text-center text-foreground">
                <span className="text-primary font-semibold">Response Time:</span> I typically respond within 24-48 hours. For urgent matters, please use the contact information on the Contact page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Query;
