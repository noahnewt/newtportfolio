import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // --- Programming Languages ---
  {name: "C", level: 95, category: "programming"},
  {name: "C++", level: 90, category: "programming"},
  {name: "Python", level: 80, category: "programming"},
  {name: "Bash", level: 90, category: "programming"},
  {name: "Go", level: 70, category: "programming"},
  {name: "C#", level: 70, category: "programming"},

  // --- Web Development ---
  {name: "HTML/CSS", level: 90, category: "web development"},
  {name: "Javascript", level: 80, category: "web development"},
  {name: "TailwindCSS", level: 75, category: "web development"},
  {name: "React", level: 80, category: "web development"},

  // --- Embedded & Systems ---
  {name: "RTOS", level: 85, category: "embedded"},
  {name: "Yocto Project", level: 80, category: "embedded"},
  {name: "LibUSB", level: 80, category: "embedded"},
  {name: "OpenSSL", level: 85, category: "embedded"},
  {name: "PAM", level: 75, category: "embedded"},
  {name: "libfido2", level: 75, category: "embedded"},
  {name: "Linux Firmware Development", level: 90, category: "embedded"},

  // --- Tools & DevOps ---
  {name: "Git/Bitbucket", level: 90, category: "tools"},
  {name: "JIRA", level: 90, category: "tools"},
  {name: "Jenkins", level: 85, category: "tools"},
  {name: "Vim", level: 90, category: "tools"},
  {name: "GDB", level: 80, category: "tools"},
  {name: "Wireshark", level: 80, category: "tools"},
  {name: "ChatGPT/Microsoft Copilot", level: 95, category: "tools"},
  
  // --- Networking & Security ---
  {name: "Network Security", level: 85, category: "networking"},
  {name: "Active Directory", level: 80, category: "networking"},
  {name: "Windows Server", level: 80, category: "networking"},
  {name: "Certificates", level: 75, category: "networking"},
  {name: "Secure Communications", level: 85, category: "networking"},
 ];
  
  const categories = ["all", "programming", "web development", "embedded", "tools", "networking"];

export const SkillsSections = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory);

  return (
    <section 
      id="skills" 
      className="py-24 px-4 realtive bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>
       
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
          <button 
            key={key}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
              activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
          >
            {category}
          </button>
          ))} 
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div 
              key={key} 
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out]"
                  style={{width: skill.level + "%"}}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> 
  );
};
