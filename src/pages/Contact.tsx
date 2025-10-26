import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import contactBanner from "@/assets/contact-banner.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-tech-gradient pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-orbitron font-bold text-center mb-4 animate-fade-in">
          Get in <span className="text-primary">Touch</span>
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-card-gradient p-8 rounded-2xl border border-border shadow-glow-blue animate-fade-in">
              <h2 className="text-3xl font-orbitron font-bold mb-6">
                Contact <span className="text-primary">Information</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:snehasishxofficial@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      snehasishxofficial@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a
                      href="tel:+917439115647"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      +91 7439115647
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      <a
                        href="https://wa.me/917439115647"
                        className="hover:text-secondary transition-colors"
                      >
                        WhatsApp Available
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      A26 Vidyasagar Park, Nabanagar<br />
                      Birati, Kolkata - 700051<br />
                      West Bengal, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Connect on Social Media</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/_snehasish.das_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 rounded-lg hover:bg-primary hover:scale-110 transition-all duration-300 group"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/snehasishxofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-accent/10 rounded-lg hover:bg-accent hover:scale-110 transition-all duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-accent group-hover:text-primary-foreground" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-card-gradient p-8 rounded-2xl border border-border shadow-glow-blue animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-orbitron font-bold">Location</h2>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden border border-border">
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
            <div className="mt-6 p-4 bg-background/50 rounded-lg">
              <p className="text-muted-foreground text-sm">
                <strong className="text-foreground">Note:</strong> Feel free to reach out via email or phone. I'm always happy to connect and discuss opportunities!
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-6xl mx-auto mt-8">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/30 text-center">
            <p className="text-foreground text-lg">
              <span className="text-primary font-semibold">Available for:</span> Tutoring, Collaborations, Projects, and Tech Discussions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
