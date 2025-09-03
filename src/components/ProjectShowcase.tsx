import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  ExternalLink, 
  Github, 
  Eye, 
  Calendar, 
  Users, 
  TrendingUp,
  Code,
  Database,
  Shield,
  Globe,
  Brain
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  duration: string;
  teamSize: string;
  impact: string;
  challenges: string[];
  solutions: string[];
  metrics?: {
    accuracy?: string;
    performance?: string;
    users?: string;
  };
}

const ProjectShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "fraud-detection",
      title: "Fraud Detection System",
      subtitle: "Machine Learning-based Financial Fraud Detection",
      description: "Developed a sophisticated machine learning system to detect fraudulent transactions in real-time using advanced algorithms and data analysis techniques.",
      image: "/placeholder.svg",
      technologies: ["Python", "Scikit-learn", "SMOTE", "Pandas", "NumPy", "Matplotlib"],
      category: "AI/ML",
      githubUrl: "https://github.com/Kush2004agar/fraud-detection",
      duration: "3 months",
      teamSize: "Solo",
      impact: "Achieved 95% accuracy in fraud detection with 2% false positive rate",
      challenges: [
        "Handling imbalanced dataset (fraud cases were only 0.1% of total transactions)",
        "Real-time processing requirements",
        "Minimizing false positives while maintaining high detection rate"
      ],
      solutions: [
        "Implemented SMOTE technique for data balancing",
        "Used ensemble methods (Random Forest + XGBoost) for better performance",
        "Applied feature engineering and hyperparameter tuning"
      ],
      metrics: {
        accuracy: "95%",
        performance: "Real-time processing < 100ms",
        users: "10,000+ transactions/day"
      }
    },
    {
      id: "blockchain-voting",
      title: "Blockchain Voting System",
      subtitle: "Decentralized E-Voting Platform",
      description: "Built a secure and transparent voting system using blockchain technology to ensure vote integrity and prevent tampering.",
      image: "/placeholder.svg",
      technologies: ["Solidity", "Web3.js", "React", "Node.js", "Ethereum", "IPFS"],
      category: "Blockchain",
      githubUrl: "https://github.com/Kush2004agar/blockchain-voting",
      liveUrl: "https://blockchain-voting-demo.vercel.app",
      duration: "4 months",
      teamSize: "3 members",
      impact: "Successfully deployed for university elections with 500+ voters",
      challenges: [
        "Ensuring voter privacy while maintaining transparency",
        "Handling gas fees and transaction costs",
        "User-friendly interface for non-technical users"
      ],
      solutions: [
        "Implemented zero-knowledge proofs for privacy",
        "Used Layer 2 solutions to reduce costs",
        "Created intuitive UI with step-by-step guidance"
      ],
      metrics: {
        users: "500+ voters",
        performance: "100% uptime during elections"
      }
    },
    {
      id: "snake-ladder",
      title: "Snake & Ladder Game",
      subtitle: "Interactive Web-Based Board Game",
      description: "Developed a complete Snake & Ladder game with modern web technologies, featuring multiplayer support, interactive UI, and real-time game mechanics.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "CSS", "Vercel", "Web Development"],
      category: "Programming",
      githubUrl: "https://github.com/Kush2004agar/snake-ladder",
      liveUrl: "https://snake-ladder-tawny.vercel.app/",
      duration: "3 weeks",
      teamSize: "Solo",
      impact: "Live web game with multiplayer functionality and modern UI",
      challenges: [
        "Creating responsive game board layout",
        "Implementing real-time dice mechanics",
        "Managing game state and player turns",
        "Designing intuitive user interface"
      ],
      solutions: [
        "Used React hooks for state management",
        "Implemented CSS Grid for responsive board layout",
        "Created smooth animations and transitions",
        "Deployed on Vercel for global accessibility"
      ],
      metrics: {
        users: "Live Demo Available",
        performance: "Real-time gameplay"
      }
    },
    {
      id: "location-finder",
      title: "Location Finder",
      subtitle: "Ethical Hacking Simulation",
      description: "Created a location tracking system for educational purposes, demonstrating cybersecurity concepts and ethical hacking techniques.",
      image: "/placeholder.svg",
      technologies: ["Python", "Network Analysis", "Geolocation", "API Integration"],
      category: "Security",
      githubUrl: "https://github.com/Kush2004agar/location-finder",
      duration: "1 month",
      teamSize: "Solo",
      impact: "Educational tool for cybersecurity awareness",
      challenges: [
        "Ensuring ethical use and privacy compliance",
        "Handling rate limits and API restrictions",
        "Accurate geolocation without violating privacy"
      ],
      solutions: [
        "Implemented strict privacy controls",
        "Used multiple data sources for accuracy",
        "Added educational warnings and disclaimers"
      ]
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI/ML": return <Brain className="w-4 h-4" />;
      case "Blockchain": return <Shield className="w-4 h-4" />;
      case "Programming": return <Code className="w-4 h-4" />;
      case "Security": return <Shield className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML": return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "Blockchain": return "bg-gradient-to-r from-yellow-500 to-orange-500";
      case "Programming": return "bg-gradient-to-r from-blue-500 to-cyan-500";
      case "Security": return "bg-gradient-to-r from-red-500 to-orange-500";
      default: return "bg-gradient-to-r from-gray-500 to-gray-600";
    }
  };

  return (
    <section id="projects" className="container py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A showcase of my most impactful projects spanning AI/ML, blockchain, and software development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} variant="interactive" className="overflow-hidden">
            <div className="relative">
              <img
                src={project.image}
                alt={`${project.title} project screenshot`}
                className="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className={`absolute top-4 left-4 ${getCategoryColor(project.category)} text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1`}>
                {getCategoryIcon(project.category)}
                {project.category}
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{project.subtitle}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.technologies.length - 4} more
                  </Badge>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground line-clamp-3">
                {project.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {project.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {project.teamSize}
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {project.impact.split(' ').slice(0, 3).join(' ')}...
                </div>
              </div>

              <div className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View Details
                    </Button>
                  </DialogTrigger>
                </Dialog>
                
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                )}
                
                {project.liveUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  {getCategoryIcon(selectedProject.category)}
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Challenges</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Solutions</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {selectedProject.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {selectedProject.metrics && (
                  <div>
                    <h3 className="font-semibold mb-2">Key Metrics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedProject.metrics.accuracy && (
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">{selectedProject.metrics.accuracy}</div>
                          <div className="text-sm text-muted-foreground">Accuracy</div>
                        </div>
                      )}
                      {selectedProject.metrics.performance && (
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{selectedProject.metrics.performance}</div>
                          <div className="text-sm text-muted-foreground">Performance</div>
                        </div>
                      )}
                      {selectedProject.metrics.users && (
                        <div className="text-center p-3 bg-purple-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">{selectedProject.metrics.users}</div>
                          <div className="text-sm text-muted-foreground">Users</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex gap-2 pt-4">
                  {selectedProject.githubUrl && (
                    <Button asChild>
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                      </a>
                    </Button>
                  )}
                  {selectedProject.liveUrl && (
                    <Button variant="outline" asChild>
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectShowcase;
