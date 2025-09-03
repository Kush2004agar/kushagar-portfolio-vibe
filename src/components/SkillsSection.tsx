import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Database, 
  Code, 
  Shield, 
  Globe, 
  Zap,
  TrendingUp,
  Layers
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
  color: string;
}

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    // AI/ML Skills
    { name: "Machine Learning", level: 85, category: "AI/ML", icon: <Brain className="w-4 h-4" />, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { name: "Deep Learning", level: 80, category: "AI/ML", icon: <Brain className="w-4 h-4" />, color: "bg-gradient-to-r from-blue-500 to-purple-500" },
    { name: "Computer Vision", level: 75, category: "AI/ML", icon: <Brain className="w-4 h-4" />, color: "bg-gradient-to-r from-green-500 to-blue-500" },
    { name: "NLP", level: 70, category: "AI/ML", icon: <Brain className="w-4 h-4" />, color: "bg-gradient-to-r from-orange-500 to-red-500" },
    
    // Programming Languages
    { name: "Python", level: 90, category: "Programming", icon: <Code className="w-4 h-4" />, color: "bg-gradient-to-r from-blue-600 to-blue-800" },
    { name: "Java", level: 85, category: "Programming", icon: <Code className="w-4 h-4" />, color: "bg-gradient-to-r from-orange-500 to-red-600" },
    { name: "JavaScript", level: 80, category: "Programming", icon: <Code className="w-4 h-4" />, color: "bg-gradient-to-r from-yellow-400 to-orange-500" },
    { name: "C++", level: 75, category: "Programming", icon: <Code className="w-4 h-4" />, color: "bg-gradient-to-r from-blue-800 to-purple-800" },
    
    // Data & Analytics
    { name: "Data Analysis", level: 85, category: "Data", icon: <Database className="w-4 h-4" />, color: "bg-gradient-to-r from-green-500 to-emerald-600" },
    { name: "SQL", level: 80, category: "Data", icon: <Database className="w-4 h-4" />, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
    { name: "Big Data", level: 70, category: "Data", icon: <Database className="w-4 h-4" />, color: "bg-gradient-to-r from-red-500 to-pink-500" },
    
    // Security
    { name: "Cybersecurity", level: 75, category: "Security", icon: <Shield className="w-4 h-4" />, color: "bg-gradient-to-r from-red-600 to-orange-600" },
    
    // Tools & Frameworks
    { name: "TensorFlow", level: 80, category: "Tools", icon: <Zap className="w-4 h-4" />, color: "bg-gradient-to-r from-orange-500 to-red-500" },
    { name: "PyTorch", level: 75, category: "Tools", icon: <Zap className="w-4 h-4" />, color: "bg-gradient-to-r from-red-500 to-orange-500" },
    { name: "Scikit-learn", level: 85, category: "Tools", icon: <TrendingUp className="w-4 h-4" />, color: "bg-gradient-to-r from-orange-600 to-red-600" },
    { name: "React", level: 75, category: "Tools", icon: <Layers className="w-4 h-4" />, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
  ];

  const categories = ["AI/ML", "Programming", "Data", "Security", "Tools"];

  return (
    <section id="skills" className="container py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My expertise spans across AI/ML, programming, data analysis, and emerging technologies. 
          Here's a comprehensive overview of my technical capabilities.
        </p>
      </div>

      <div className="grid gap-6">
        {categories.map((category) => (
          <Card key={category} variant="interactive">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {category === "AI/ML" && <Brain className="w-5 h-5 text-purple-500" />}
                {category === "Programming" && <Code className="w-5 h-5 text-blue-500" />}
                {category === "Data" && <Database className="w-5 h-5 text-green-500" />}
                {category === "Security" && <Shield className="w-5 h-5 text-red-500" />}
                {category === "Tools" && <Zap className="w-5 h-5 text-orange-500" />}
                {category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`p-1 rounded ${skill.color}`}>
                            {skill.icon}
                          </div>
                          <span className="font-medium text-sm">{skill.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Git", "Docker", "AWS", "Google Cloud", "Azure", "Kubernetes",
                "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "VS Code",
                "PostgreSQL", "MongoDB", "Redis", "Kafka", "Spark", "Hadoop",
                "Django", "Flask", "FastAPI", "Node.js", "Express", "GraphQL"
              ].map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;
