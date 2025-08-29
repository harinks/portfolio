'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Personal } from '@/types';

interface HeroProps {
  personal: Personal;
}

export default function Hero({ personal }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero-dark opacity-20" />
      
      {/* Enhanced tech-focused fluid background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large digital transformation blob */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 digital-morph rounded-full blur-3xl opacity-40"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Secondary SaaS gradient blob */}
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 saas-gradient rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Center cloud computing element */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 tech-blob-4 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [180, 360, 180],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* AI/ML inspired particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 ai-particle rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/3 w-3 h-3 ai-particle-2 rounded-full"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 2, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-2 h-2 ai-particle-3 rounded-full"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.8, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Tech blobs representing different technologies */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-32 h-32 tech-blob-1 rounded-full blur-2xl opacity-20"
          animate={{
            scale: [1, 1.6, 1],
            rotate: [0, 90, 180],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-40 h-40 tech-blob-2 rounded-full blur-2xl opacity-25"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 270, 360],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-2/3 right-1/3 w-24 h-24 tech-blob-3 rounded-full blur-2xl opacity-20"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [90, 180, 270],
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Neural network nodes */}
        <motion.div
          className="absolute top-1/6 right-1/6 w-16 h-16 neural-node rounded-lg opacity-30"
          animate={{
            rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/6 left-1/6 w-12 h-12 neural-node rounded-lg opacity-25"
          animate={{
            rotate: [360, 315, 270, 225, 180, 135, 90, 45, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Data flow streams */}
        <motion.div
          className="absolute top-1/4 right-1/3 w-48 h-1 data-flow rounded-full opacity-30"
          animate={{
            x: [0, 100, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-32 h-1 data-flow rounded-full opacity-25"
          animate={{
            x: [0, -80, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Digital transformation waves */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-1 digital-wave rounded-full opacity-20"
          animate={{
            x: [0, 200, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Circuit board pattern background */}
        <div className="absolute inset-0 circuit-pattern opacity-5" />

        {/* Cloud computing elements */}
        <motion.div
          className="absolute top-1/3 left-1/6 w-20 h-20 cloud-element rounded-full blur-xl opacity-15"
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-16 h-16 cloud-element rounded-full blur-xl opacity-15"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Badge variant="secondary" className="text-sm font-medium">
              Available for opportunities
            </Badge>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Hi, I'm{' '}
            <span className="text-gradient-primary animate-pulse">
              {personal.name}
            </span>
          </motion.h1>

          {/* Optimized tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 sm:mt-8 text-lg sm:text-xl leading-7 sm:leading-8 text-muted-foreground max-w-3xl sm:max-w-4xl mx-auto px-4"
          >
            {personal.tagline}
          </motion.p>

          {/* Key highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-4 text-sm sm:text-base text-muted-foreground"
          >
            <span className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Full-Stack Development
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Digital Transformation
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              AI & Cloud Solutions
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6"
          >
            <Button size="lg" asChild>
              <a href="#contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">
                View Projects
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex items-center justify-center space-x-4"
          >
            <Button variant="ghost" size="sm" asChild>
              <a href={personal.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href={personal.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 