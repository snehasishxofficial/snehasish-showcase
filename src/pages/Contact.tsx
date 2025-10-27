import { Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle, Send } from "lucide-react";
import contactBanner from "@/assets/contact-banner.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Premium Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img src={contactBanner} alt="Contact Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20 mb-4 w-fit">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-heading text-primary">Let's Connect</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-heading font-bold text-foreground animate-fade-in mb-4">
            Get in <span className="text-transparent bg-clip-text bg-premium-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground font-sans max-w-2xl">Ready to collaborate or have a question? I'd love to hear from you!</p>
        </div>
      </div>

      <div className="container mx-auto px-8 py-16 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card/50 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-border/50 shadow-elevated hover:shadow-glow-blue transition-all duration-500 animate-fade-in">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-4 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-glow-blue">
                  <Mail className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-3xl font-heading font-bold">Contact Information</h2>
                  <p className="text-muted-foreground font-sans text-sm">Reach out through any channel</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="group p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/30 hover:border-primary/50 hover:shadow-glow-blue transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-foreground mb-2">Email</h3>
                      <a
                        href="mailto:snehasishxofficial@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors font-sans break-all"
                      >
                        snehasishxofficial@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/30 hover:border-secondary/50 hover:shadow-glow-gold transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-xl group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-foreground mb-2">Phone</h3>
                      <a
                        href="tel:+917439115647"
                        className="text-muted-foreground hover:text-secondary transition-colors font-sans block mb-2"
                      >
                        +91 7439115647
                      </a>
                      <a
                        href="https://wa.me/917439115647"
                        className="inline-flex items-center gap-2 text-sm text-green-500 hover:text-green-400 transition-colors font-sans"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp Available
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/30 hover:border-accent/50 hover:shadow-glow-blue transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-foreground mb-2">Address</h3>
                      <p className="text-muted-foreground font-sans">
                        A26 Vidyasagar Park, Nabanagar<br />
                        Birati, Kolkata - 700051<br />
                        West Bengal, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border/50">
                <h3 className="font-heading font-semibold text-foreground mb-4">Connect on Social Media</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/_snehasish.das_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl hover:from-pink-500 hover:to-purple-500 hover:scale-110 transition-all duration-300 border border-primary/20 hover:border-transparent"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/snehasishxofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl hover:from-blue-600 hover:to-blue-500 hover:scale-110 transition-all duration-300 border border-accent/20 hover:border-transparent"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Services Available */}
            <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 p-8 rounded-3xl border border-primary/30 shadow-elevated">
              <div className="flex items-center gap-3 mb-4">
                <Send className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-heading font-bold text-foreground">Available For</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="px-4 py-3 bg-background/50 backdrop-blur-sm rounded-xl border border-border/30">
                  <p className="text-sm font-sans text-foreground">💼 Tutoring Sessions</p>
                </div>
                <div className="px-4 py-3 bg-background/50 backdrop-blur-sm rounded-xl border border-border/30">
                  <p className="text-sm font-sans text-foreground">🤝 Collaborations</p>
                </div>
                <div className="px-4 py-3 bg-background/50 backdrop-blur-sm rounded-xl border border-border/30">
                  <p className="text-sm font-sans text-foreground">💡 Project Discussions</p>
                </div>
                <div className="px-4 py-3 bg-background/50 backdrop-blur-sm rounded-xl border border-border/30">
                  <p className="text-sm font-sans text-foreground">🔒 Tech Consulting</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-card/50 backdrop-blur-xl p-8 rounded-3xl border border-border/50 shadow-elevated hover:shadow-glow-gold transition-all duration-500 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-4 bg-gradient-to-br from-secondary to-accent rounded-2xl shadow-glow-gold">
                <MapPin className="w-7 h-7 text-secondary-foreground" />
              </div>
              <div>
                <h2 className="text-3xl font-heading font-bold">Location</h2>
                <p className="text-muted-foreground font-sans text-sm">Find me here</p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-border/50 shadow-elevated">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5826890982395!2d88.43266!3d22.7242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e6f5e1c5d5d%3A0x1c1c1c1c1c1c1c1c!2sVidyasagar%20Park%2C%20Nabanagar%2C%20Birati%2C%20Kolkata%2C%20West%20Bengal%20700051!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
            <div className="mt-6 p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/30">
              <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                <strong className="text-foreground font-heading">Response Time:</strong> I typically respond within 24-48 hours. Feel free to reach out via email, phone, or social media for quick communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
