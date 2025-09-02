'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import { getBlogPostById } from '@/lib/data';
import { notFound } from 'next/navigation';
import { use } from 'react';

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = use(params);
  const post = getBlogPostById(parseInt(id));

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <div className="flex items-center space-x-4 mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              {post.featured && (
                <Badge variant="secondary" className="text-xs">
                  Featured
                </Badge>
              )}
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6">
              {post.title}
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {post.content}
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This is a sample blog post content. In a real application, you would have full markdown or rich text content here. The content would be much longer and include various formatting, code blocks, images, and other rich media elements.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Key Takeaways
                </h2>
                
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Understanding the importance of clean code architecture</li>
                  <li>Best practices for scalable React applications</li>
                  <li>Performance optimization techniques</li>
                  <li>Testing strategies for maintainable code</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  As we continue to build more complex applications, it&apos;s crucial to maintain a solid foundation. This includes proper state management, component composition, and performance considerations.
                </p>

                <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Pro Tip
                  </h3>
                  <p className="text-muted-foreground">
                    Always consider the long-term maintainability of your code. What might seem like a quick solution now could become a technical debt later.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Related Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Related Posts</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <h4 className="font-medium text-foreground mb-2">
                    TypeScript Best Practices
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Essential TypeScript patterns and practices for writing maintainable and type-safe code.
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <h4 className="font-medium text-foreground mb-2">
                    Modern CSS Techniques
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Exploring modern CSS techniques including Grid, Flexbox, and CSS custom properties.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
} 