import React from "react";
import HeroPortrait from "@/components/HeroPortrait";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    email: `mailto:${person.email}`,
    telephone: person.phone,
    sameAs: [person.github, person.linkedin],
    jobTitle: "CSE Student, Aspiring AI/ML Engineer",
    image: profileImage,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  };

  const projects = [
    { title: "Fraud Detection (ML)", subtitle: "Python, Scikit-learn, SMOTE", image: "/placeholder.svg" },
    { title: "Blockchain Voting", subtitle: "Web3 concept", image: "/placeholder.svg" },
    { title: "Snake & Ladder (Java)", subtitle: "Console OOP", image: "/placeholder.svg" },
    { title: "Location Finder", subtitle: "Ethical hacking simulation", image: "/placeholder.svg" },
  ];

  return (
    <>
      <header className="border-b bg-paper">
        <div className="container py-10 md:py-16">
          <div className="flex items-start justify-between gap-10">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm tracking-widest text-muted-foreground uppercase">Portfolio</p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
                AI/ML <span className="text-gradient-brand">ENGINEER</span>
              </h1>
              <div className="heading-outline text-5xl md:text-7xl font-extrabold leading-none">PORTFOLIO</div>
              <p className="text-muted-foreground">{person.title}</p>
              <div className="flex flex-wrap gap-3 pt-2">
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
              <p className="text-sm text-muted-foreground">
                Email: {person.email} · Phone: {person.phone}
              </p>
            </div>

            <div className="hidden md:block">
              <HeroPortrait
                src={profileImage}
                alt="Portrait photo of Kushagar Singh Ahuja with background removed"
                className="w-[280px] h-[340px] rounded-lg shadow-elevated object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="projects" className="container py-12">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <Card key={p.title} className="transition-shadow hover:shadow-elevated">
                <CardContent className="p-0">
                  <img
                    src={p.image}
                    alt={`${p.title} project screenshot`}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.subtitle}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="process" className="container py-12">
          <h2 className="text-2xl font-bold mb-4">Stages of Project Development</h2>
          <Card className="transition-shadow hover:shadow-elevated">
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="divide-y">
                <AccordionItem value="briefing">
                  <AccordionTrigger className="px-6">Briefing</AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-sm text-muted-foreground">
                    Understand goals, constraints, and success metrics. Define scope, timeline, and dataset availability.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="analytics">
                  <AccordionTrigger className="px-6">Analytics</AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-sm text-muted-foreground">
                    Data exploration, cleaning, and feature engineering with clear documentation and dashboards.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="prototype">
                  <AccordionTrigger className="px-6">Prototyping</AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-sm text-muted-foreground">
                    Baseline models, experiments tracking, and quick iterations to select promising approaches.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="design">
                  <AccordionTrigger className="px-6">Design</AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-sm text-muted-foreground">
                    Model selection, evaluation strategy, and deployment plan with monitoring criteria.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="final">
                  <AccordionTrigger className="px-6">The Final</AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-sm text-muted-foreground">
                    Ship the model, document results, and present insights with reproducible artifacts.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <section id="about" className="container py-12">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <Card className="transition-shadow hover:shadow-elevated">
            <CardContent className="p-6 space-y-2">
              <p>
                Hi, I'm Kushagar Singh Ahuja, a CSE student interested in AI, ML, and data security.
              </p>
              <p>
                I was born on 22 August 2004 in Mandi, Himachal Pradesh. I'm currently based in Chennai, Tamil Nadu.
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

        <section id="resume" className="container py-12">
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

        <section id="contact" className="container py-12">
          <h2 className="sr-only">Contact</h2>
          <div aria-hidden className="heading-outline text-[18vw] leading-none font-extrabold mb-6 select-none">
            CONTACT <span className="text-gradient-brand">ME</span>
          </div>
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
