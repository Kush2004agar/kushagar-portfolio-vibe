import React from "react";
// removed unused hero image import
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";

const Index = () => {
  const person = {
    name: "Kushagar Singh Ahuja",
    title: "Aspiring AI/ML Engineer | Entrepreneur | CSE Student",
    email: "ka5683@srmist.edu.in",
    phone: "+91 9816124878",
    github: "https://github.com/Kush2004agar",
    linkedin: "https://linkedin.com/in/your-linkedin",
  };
  
  const profileImage = "/lovable-uploads/5bbfc40e-978f-4aa8-aaf7-5b0b522d0148.png";

  const jsonLd = {
    "@type": "Person",
    name: person.name,
    email: `mailto:${person.email}`,
    telephone: person.phone,
    sameAs: [person.github, person.linkedin],
    jobTitle: "CSE Student, Aspiring AI/ML Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  };

  return (
    <>
      <header className="border-b">
        <div className="container py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                <span className="text-gradient-brand">Kushagar Singh Ahuja</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Aspiring AI/ML Engineer | Entrepreneur | CSE Student
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Email: {person.email} · Phone: {person.phone}
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/KUSHAGAR_SINGH_AHUJA.pdf" download>
                  <Button variant="hero">
                    <Download /> Download Resume
                  </Button>
                </a>
                <a href={person.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Github /> GitHub
                  </Button>
                </a>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Linkedin /> LinkedIn
                  </Button>
                </a>
              </div>
            </div>
            <div>
              <img
                src={profileImage}
                alt="Portrait photo of Kushagar Singh Ahuja, aspiring AI/ML engineer"
                className="w-full max-w-sm rounded-lg shadow-elevated mx-auto object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="container py-10">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <Card className="transition-shadow hover:shadow-elevated">
            <CardContent className="p-6 space-y-2">
              <p>
                Hi, I'm Kushagar Singh Ahuja, a CSE student interested in AI, ML, and data security.
              </p>
              <p>
                I was born on 22 August 2004 at 10:20 PM in Mandi, Himachal Pradesh. I'm currently based in Chennai, Tamil Nadu.
              </p>
              <p>
                I aim to build a billion-dollar business and have been working on AI/ML projects, including fraud detection and blockchain-based voting systems.
              </p>
              <p>
                I manage a PG facility for girls in Mandi with my father and also oversee a traditional jewelry and suit shop.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="container py-10">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <Card className="transition-shadow hover:shadow-elevated">
            <CardContent className="p-6 space-y-2">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Fraud Detection using Machine Learning – Developed using Python, Scikit-learn, and SMOTE. Focused on maximizing recall and minimizing false positives. Visualized with ROC curves and confusion matrices.
                </li>
                <li>Blockchain-based Voting System</li>
                <li>Snake and Ladder Game – Java-based console simulation using OOP principles, dice simulation, and class structures.</li>
                <li>Location Finder using Kali Linux – Tracked device location using phishing pages and HTML5 Geolocation API; simulated ethical hacking scenarios.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section id="interests" className="container py-10">
          <h2 className="text-2xl font-bold mb-4">Interests</h2>
          <Card className="transition-shadow hover:shadow-elevated">
            <CardContent className="p-6">
              <p>
                I am passionate about AI/ML, cybersecurity, business development, personal growth, and data privacy. I also explore areas like ethical hacking, Vastu-based home planning, and creative video/photo editing.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="resume" className="container py-10">
          <h2 className="text-2xl font-bold mb-4">Resume</h2>
          <Card className="transition-shadow hover:shadow-elevated">
            <CardContent className="p-6">
              <p className="mb-4">Download my resume below:</p>
              <a href="/KUSHAGAR_SINGH_AHUJA.pdf" download>
                <Button variant="hero">
                  <Download /> Download Resume
                </Button>
              </a>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="container py-10">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <Card className="transition-shadow hover:shadow-elevated">
            <CardContent className="p-6 space-y-2">
              <p>
                Email: <a href={`mailto:${person.email}`} className="text-primary underline-offset-4 hover:underline">{person.email}</a>
              </p>
              <p>
                Phone: <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="text-primary underline-offset-4 hover:underline">{person.phone}</a>
              </p>
              <div className="flex gap-4 pt-2">
                <a href={person.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary underline-offset-4 hover:underline">
                  <Github className="w-4 h-4" /> <span>GitHub</span>
                </a>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary underline-offset-4 hover:underline">
                  <Linkedin className="w-4 h-4" /> <span>LinkedIn</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {person.name}. All rights reserved.
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default Index;
