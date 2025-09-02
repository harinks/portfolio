"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Eye,
  ChevronRight,
} from "lucide-react";
import { Experience, Education } from "@/types";
import Modal from "@/components/ui/modal";

interface ExperienceSectionProps {
  experience: Experience[];
  education: Education[];
}

interface TimelineItem {
  id: string;
  type: "experience" | "education";
  title: string;
  subtitle: string;
  location: string;
  period: string;
  description: string;
  bulletPoints?: string[];
  technologies?: string[];
  icon: React.ReactNode;
  color: string;
}

export default function ExperienceSection({
  experience,
}: ExperienceSectionProps) {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (exp: Experience) => {
    setSelectedExperience(exp);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  // Create unified timeline items
  const timelineItems: TimelineItem[] = [
    // Current Education
    {
      id: "edu-1",
      type: "education",
      title: "Master of Science in Digital Transformation",
      subtitle: "University of Wollongong in Dubai",
      location: "Dubai, United Arab Emirates",
      period: "Jan 2025 - June 2026",
      description:
        "Currently pursuing Master's in Digital Transformation with focus on AI, cloud, and data analytics.",
      icon: <GraduationCap className="h-5 w-5" />,
      color: "from-blue-500 to-cyan-500",
    },
    // Freelance Experience
    {
      id: "exp-1",
      type: "experience",
      title: "Freelance Web Developer",
      subtitle: "Signet Electronics",
      location: "Chennai, India",
      period: "Aug 2024 - Nov 2024",
      description:
        "Design and deploy responsive websites using the MERN stack. Migrated legacy projects to Next.js, improving performance by over 40%.",
      bulletPoints: [
        "Design and deploy responsive websites using the MERN stack",
        "Migrated legacy projects to Next.js, improving performance by over 40%",
        "Created reusable UI components and optimized frontend architecture for maintainability",
        "Integrated third-party libraries, and ensured mobile responsiveness across devices",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "MERN Stack",
      ],
      icon: <Briefcase className="h-5 w-5" />,
      color: "from-purple-500 to-pink-500",
    },
    // Education - Project Management
    {
      id: "edu-2",
      type: "education",
      title: "Global Project Management Professional Diploma Certificate",
      subtitle: "Golden Gate University",
      location: "San Francisco, California",
      period: "Jan 2024 - June 2024",
      description:
        "GPA: 3.56/4.0 - Professional diploma in project management.",
      icon: <GraduationCap className="h-5 w-5" />,
      color: "from-green-500 to-emerald-500",
    },
    // Main Experience
    {
      id: "exp-2",
      type: "experience",
      title: "Software Engineer",
      subtitle: "FR8 - India's Reliable Online Truck Booking Platform",
      location: "Chennai, India",
      period: "May 2022 - April 2024",
      description:
        "Designed and implemented a Proof of Delivery (POD) system, improving tracking, efficiency, and reducing costs by 50%.",
      bulletPoints: [
        "Designed and implemented a Proof of Delivery (POD) system, improving tracking, efficiency, and reducing costs by 50%",
        "Built responsive UIs focusing on reusable components and custom hooks for faster development",
        "Contributed to the migration of internal software from React Native to Next.js to improve scalability and performance",
        "Designed and developed REST APIs, implemented custom authentication, in-app chat, dynamic PDF generation, and AWS S3 file uploads",
        "Developed Progressive Web Apps (PWAs) with a unified codebase for Web and Mobile, ensuring faster loading times and reliable performance",
        "Built an automated messaging system with the WhatsApp Business API for customer communication and marketing campaigns",
        "Worked with Kafka-based event processing for real-time data updates and improved system scalability",
        "Implemented Cron jobs for scheduled tasks, automating backend processes and enhancing system reliability",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "React Native",
        "Node.js",
        "PostgreSQL",
        "AWS S3",
        "Kafka",
        "PWA",
        "WhatsApp Business API",
        "REST API",
      ],
      icon: <Briefcase className="h-5 w-5" />,
      color: "from-orange-500 to-red-500",
    },
    // Education - GUVI Certification
    {
      id: "edu-3",
      type: "education",
      title: "Full Stack Developer Program",
      subtitle: "GUVI Geek Networks, IITM Research Park",
      location: "Chennai, India",
      period: "Oct 2021 - Apr 2022",
      description:
        "Comprehensive full-stack development certification program.",
      icon: <GraduationCap className="h-5 w-5" />,
      color: "from-indigo-500 to-purple-500",
    },
    // Internship
    {
      id: "exp-3",
      type: "experience",
      title: "Internship",
      subtitle: "Epsilon Electronic Equipment & Components Pvt Ltd",
      location: "Hyderabad, India",
      period: "Sep 2020 - Dec 2020",
      description:
        "Contributed to a project involving manufacturing of Push Button Magneto Telephone MTI 201 for Indian Railways.",
      bulletPoints: [
        "Contributed to a project involving manufacturing of Push Button Magneto Telephone MTI 201 for Indian Railways",
      ],
      technologies: ["Electronics", "Manufacturing", "Telecommunications"],
      icon: <Briefcase className="h-5 w-5" />,
      color: "from-teal-500 to-blue-500",
    },
    // Bachelor's Degree
    {
      id: "edu-4",
      type: "education",
      title: "Bachelor in Electronics and Communication Engineering",
      subtitle: "Chennai Institute of Technology",
      location: "Chennai, India",
      period: "Aug 2017 - April 2021",
      description:
        "GPA: 7.1/10 - Specialized in electronics and communication engineering.",
      icon: <GraduationCap className="h-5 w-5" />,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="experience"
      className="py-12 sm:py-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 section-bg-experience opacity-20" />
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gradient-secondary sm:text-4xl">
              Experience & Education Timeline
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
              My professional journey and academic background
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-11 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            <div className="space-y-6 sm:space-y-8">
              {timelineItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="relative flex items-start group"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-1.75 sm:left-6.25 w-10 h-10 rounded-full bg-gradient-to-r ${item.color} border-2 border-background shadow-lg z-10 group-hover:scale-110 transition-transform duration-200 flex items-center justify-center`}
                  >
                    <div className="text-white text-xl">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-12 sm:ml-18 flex-1">
                    <Card className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 overflow-hidden border-l-4 border-l-transparent hover:border-l-primary/20">
                      <CardContent className="p-3 pb-0 sm:p-5 sm:pb-0">
                        <div className="flex flex-col gap-2 sm:gap-3">
                          <div className="flex items-start gap-2 sm:gap-3 flex-1 min-w-0">
                            {/* <div
                              className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-r ${item.color} text-white flex-shrink-0`}
                            >
                              {item.icon}
                            </div> */}
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2">
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-base sm:text-lg font-semibold text-foreground leading-tight line-clamp-2 mb-1">
                                    {item.title}
                                  </h4>
                                  <p className="text-xs sm:text-base text-primary font-medium leading-tight line-clamp-1 mb-0.5">
                                    {item.subtitle}
                                  </p>
                                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                                    <MapPin className="h-3 w-3 flex-shrink-0" />
                                    <span className="truncate">
                                      {item.location}
                                    </span>
                                  </div>
                                </div>
                                <Badge
                                  variant="secondary"
                                  className="text-xs self-start sm:self-auto whitespace-nowrap mt-1 sm:mt-0"
                                >
                                  {item.period}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3 leading-relaxed line-clamp-3 sm:line-clamp-2">
                          {item.description}
                        </p>
                        
                        {item.technologies && (
                          <div className="mt-2 sm:mt-3">
                            <div className="flex flex-wrap gap-1">
                              {item.technologies.slice(0, 4).map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="outline"
                                  className="text-xs px-1.5 py-0.5 sm:px-2 sm:py-1"
                                >
                                  {tech}
                                </Badge>
                              ))}
                              {item.technologies.length > 4 && (
                                <Badge
                                  variant="outline"
                                  className="text-xs px-1.5 py-0.5 sm:px-2 sm:py-1"
                                >
                                  +{item.technologies.length - 4}
                                </Badge>
                              )}
                            </div>
                          </div>
                        )}
                        
                        {item.type === "experience" && item.bulletPoints && (
                          <div className="mt-2 sm:mt-3">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                const exp = experience.find(
                                  (e) => e.title === item.title
                                );
                                if (exp) openModal(exp);
                              }}
                              className="text-xs h-7 sm:h-8 px-2 sm:px-3 hover:bg-muted-foreground/10 hover:text-muted-foreground transition-colors"
                            >
                              <Eye className="h-3 w-3 mr-1" />
                              View Details
                              <ChevronRight className="h-3 w-3 ml-1" />
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-center">
                  Continuous Learning & Growth
                </h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">3</div>
                    <div className="text-xs text-muted-foreground">
                      Years Experience
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-xs text-muted-foreground">
                      Projects Completed
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">20+</div>
                    <div className="text-xs text-muted-foreground">
                      Technologies
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        experience={selectedExperience}
      />
    </section>
  );
}
