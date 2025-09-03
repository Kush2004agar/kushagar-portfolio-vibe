import React from "react";
import HeroPortrait from "@/components/HeroPortrait";
import Navigation from "@/components/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
import SkillsSection from "@/components/SkillsSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, Github, Linkedin, Mail, Phone, MapPin, Calendar, Award } from "lucide-react";

const Index = () => {
  const person = {
    name: "Kushagar Singh Ahuja",
    title: "Aspiring AI/ML Engineer | Entrepreneur | CSE Student",
    email: "ahujakushagar5@gmail.com",
    phone: "+91 9816124878",
    github: "https://github.com/Kush2004agar",
    linkedin: "https://www.linkedin.com/in/kushagar-singh-ahuja-4aa007251/?trk=public-profile-join-page",
    location: "Chennai, Tamil Nadu",
    birthDate: "August 22, 2004",
    birthPlace: "Mandi, Himachal Pradesh",
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

  const achievements = [
    {
      title: "95% Accuracy",
      description: "Fraud Detection ML Model",
      icon: <Award className="w-5 h-5" />,
      color: "text-green-600"
    },
    {
      title: "500+ Users",
      description: "Blockchain Voting System",
      icon: <Award className="w-5 h-5" />,
      color: "text-blue-600"
    },
    {
      title: "4+ Projects",
      description: "Successfully Completed",
      icon: <Award className="w-5 h-5" />,
      color: "text-purple-600"
    }
  ];

  return (
    <>
      <Navigation />
      <ThemeToggle />
      
      <header id="home" className="border-b bg-paper pt-16">
        <div className="container py-10 md:py-16">
          <div className="flex items-start justify-between gap-10">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm tracking-widest text-muted-foreground uppercase">Portfolio</p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
                AI/ML <span className="text-gradient-brand">ENGINEER</span>
              </h1>
              <div className="heading-outline text-5xl md:text-7xl font-extrabold leading-none">PORTFOLIO</div>
              <p className="text-muted-foreground text-lg">{person.title}</p>
              
              {/* Achievements */}
              <div className="flex flex-wrap gap-4 pt-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className={achievement.color}>{achievement.icon}</div>
                    <div>
                      <div className="font-semibold">{achievement.title}</div>
                      <div className="text-muted-foreground">{achievement.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <a href="/KUSHAGAR_SINGH_AHUJA.pdf" download="Kushagar_Singh_Ahuja_Resume.pdf">
                  <Button variant="hero">
                    <Download className="w-4 h-4 mr-2" /> Download Resume
                  </Button>
                </a>
                <a href={person.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Github className="w-4 h-4 mr-2" /> GitHub
                  </Button>
                </a>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                  </Button>
                </a>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${person.email}`} className="hover:text-primary transition-colors">
                    {person.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                    {person.phone}
                  </a>
                </div>
              </div>
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
        <ProjectShowcase />

        <SkillsSection />

        <section id="process" className="container py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">My Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to building AI/ML solutions and software projects.
            </p>
          </div>
          
          <Card className="transition-shadow hover:shadow-elevated">
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="divide-y">
                <AccordionItem value="briefing">
                  <AccordionTrigger className="px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">1</div>
                      <span>Briefing & Planning</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-sm text-muted-foreground">
                    <div className="space-y-2">
                      <p>Understand goals, constraints, and success metrics. Define scope, timeline, and dataset availability.</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Requirements gathering and stakeholder alignment</li>
                        <li>Technical feasibility assessment</li>
                        <li>Resource planning and timeline estimation</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="analytics">
                  <AccordionTrigger className="px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">2</div>
                      <span>Data Analytics & Exploration</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-sm text-muted-foreground">
                    <div className="space-y-2">
                      <p>Data exploration, cleaning, and feature engineering with clear documentation and dashboards.</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Data quality assessment and cleaning</li>
                        <li>Exploratory data analysis (EDA)</li>
                        <li>Feature engineering and selection</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="prototype">
                  <AccordionTrigger className="px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold">3</div>
                      <span>Prototyping & Experimentation</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-sm text-muted-foreground">
                    <div className="space-y-2">
                      <p>Baseline models, experiments tracking, and quick iterations to select promising approaches.</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Baseline model development</li>
                        <li>Hyperparameter tuning and optimization</li>
                        <li>Model comparison and selection</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="design">
                  <AccordionTrigger className="px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">4</div>
                      <span>System Design & Architecture</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-sm text-muted-foreground">
                    <div className="space-y-2">
                      <p>Model selection, evaluation strategy, and deployment plan with monitoring criteria.</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>System architecture design</li>
                        <li>Scalability and performance planning</li>
                        <li>Security and compliance considerations</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="final">
                  <AccordionTrigger className="px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">5</div>
                      <span>Deployment & Monitoring</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-sm text-muted-foreground">
                    <div className="space-y-2">
                      <p>Ship the model, document results, and present insights with reproducible artifacts.</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Production deployment and testing</li>
                        <li>Performance monitoring and alerting</li>
                        <li>Documentation and knowledge transfer</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <section id="about" className="container py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my background, aspirations, and what drives me in the world of technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="transition-shadow hover:shadow-elevated">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Background</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Born</div>
                      <div className="text-sm text-muted-foreground">{person.birthDate} in {person.birthPlace}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Currently Based</div>
                      <div className="text-sm text-muted-foreground">{person.location}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-elevated">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Vision & Goals</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    I aim to build a billion-dollar business and have been working on AI/ML projects, 
                    including fraud detection and blockchain-based voting systems.
                  </p>
                  <p>
                    My passion lies in leveraging artificial intelligence to solve real-world problems 
                    and create innovative solutions that make a difference.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 transition-shadow hover:shadow-elevated">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Business Ventures</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">PG Facility Management</h4>
                  <p className="text-sm text-muted-foreground">
                    I manage a PG facility for girls in Mandi with my father, gaining valuable 
                    experience in operations and customer service.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Traditional Jewelry Business</h4>
                  <p className="text-sm text-muted-foreground">
                    I oversee a traditional jewelry and suit shop, learning about business 
                    management and traditional commerce practices.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="container py-12">
          <div className="text-center mb-8">
            <h2 className="sr-only">Contact</h2>
            <div aria-hidden className="heading-outline text-[18vw] leading-none font-extrabold mb-6 select-none">
              CONTACT <span className="text-gradient-brand">ME</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="transition-shadow hover:shadow-elevated">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Get In Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <a href={`mailto:${person.email}`} className="text-primary underline-offset-4 hover:underline">
                      {person.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                    <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="text-primary underline-offset-4 hover:underline">
                      {person.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <span>{person.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-elevated">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Connect Online</h3>
                <div className="space-y-3">
                  <a href={person.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary underline-offset-4 hover:underline">
                    <Github className="w-5 h-5" />
                    <span>GitHub Profile</span>
                  </a>
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary underline-offset-4 hover:underline">
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
                <div className="pt-4">
                  <a href="/KUSHAGAR_SINGH_AHUJA.pdf" download="Kushagar_Singh_Ahuja_Resume.pdf">
                    <Button variant="hero" className="w-full">
                      <Download className="w-4 h-4 mr-2" /> Download Resume
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
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
