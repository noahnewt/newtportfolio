import resume from '@/assets/NoahNewtonResume.pdf'
import { Code, Lock, User } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Embedded Engineer and Tech Enthusist
            </h3>

            <p className="text-muted-foreground">
              With over 3 years in embedded development and 8 years in the
              government IT space, I specialize in C/C++ development in RTOS 
              Linux environments, System Administration, Secure Communications and
              modern Web Development in my free time.
            </p>

            <p className="text-muted-foreground">
              I am passionate about creating real time solutions for device security,
              low-level USB technologies, and automating daily tasks. Also, I enjoy learning
              and trying out new AI technologies to stay at the forefront of software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a href={resume} 
                 download="NoahNewtonResume.pdf" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="px-6 py-2 rounded-full border border-primary text-primary hover:bh-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card=hover"> 
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code  className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Embedded Software Development
                  </h4>
                    <p className="text-muted-foreground">
                      Designed and maintained C/C++ firmware for print and scan devices
                      across ARM and x86 platforms.
                    </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card=hover"> 
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Lock  className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Secure System Integration
                  </h4>
                    <p className="text-muted-foreground">
                      Integrated OpenSSL, PAM, and libfido2 into Yocto-based embedded Linux builds to strengthen security 
                      and keep systems up to date with modern standards.
                    </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card=hover"> 
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User  className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Technical Leadership & Operations
                  </h4>
                    <p className="text-muted-foreground">
                      Led Navy IT teams managing secure networks, communications, and cybersecurity 
                      operations during multinational exercises and missions.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
