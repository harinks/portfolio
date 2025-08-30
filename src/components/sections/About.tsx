'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code, MapPin, Mail, Calendar, Download } from 'lucide-react';
import { Personal } from '@/types';

interface AboutProps {
  personal: Personal;
  skills: string[];
}

export default function About({ personal, skills }: AboutProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 section-bg-experience opacity-20" />
      <div className="relative z-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gradient-primary sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know me better and explore my technical expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Personal Info and What I Do Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Personal Information */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <span className="text-muted-foreground">{personal.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <span className="text-muted-foreground">{personal.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <span className="text-muted-foreground">Available for opportunities</span>
                    </div>
                    
                    <div className="pt-4">
                      <Button asChild className="w-full sm:w-auto">
                        <a href="/Hariharan NKS (4).pdf" download>
                          <Download className="h-4 w-4 mr-2" />
                          Download CV
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* What I Do */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">What I Do</h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {personal.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Skills and Approach Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Skills */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <Code className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold text-gradient-primary">Technical Skills</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-3">Frontend Development</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.filter(skill => 
                          ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'].includes(skill)
                        ).map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Backend Development</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.filter(skill => 
                          ['Node.js', 'Python', 'MongoDB', 'PostgreSQL'].includes(skill)
                        ).map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.filter(skill => 
                          ['AWS', 'Docker', 'Git', 'Framer Motion'].includes(skill)
                        ).map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Approach */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">My Approach</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>• Writing clean, maintainable, and scalable code</p>
                    <p>• Following best practices and design patterns</p>
                    <p>• Continuous learning and staying updated with latest technologies</p>
                    <p>• Focus on user experience and performance optimization</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
} 