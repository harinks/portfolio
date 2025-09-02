'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/data';
// import { BlogPost } from '@/types';

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);

  const loadMore = () => {
    setVisiblePosts(prev => Math.min(prev + POSTS_PER_PAGE, allPosts.length));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="flex items-center space-x-4 mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts, insights, and tutorials on web development and technology
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {allPosts.slice(0, visiblePosts).map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Card className="group h-full hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="text-4xl font-bold text-muted-foreground/30">
                      {post.title.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="text-xs">
                      {post.featured ? 'Featured' : 'Article'}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="ghost" size="sm" asChild className="group-hover:bg-muted-foreground/10 group-hover:text-muted-foreground transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {visiblePosts < allPosts.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" onClick={loadMore}>
              Load More Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        )}

        {/* Blog Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">
                Blog Statistics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {allPosts.length}
                  </div>
                  <div className="text-muted-foreground">Total Posts</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {allPosts.filter(post => post.featured).length}
                  </div>
                  <div className="text-muted-foreground">Featured</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {Array.from(new Set(allPosts.flatMap(p => p.tags))).length}
                  </div>
                  <div className="text-muted-foreground">Topics</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {Math.round(allPosts.reduce((acc, post) => acc + parseInt(post.readTime), 0) / allPosts.length)}min
                  </div>
                  <div className="text-muted-foreground">Avg Read Time</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
} 