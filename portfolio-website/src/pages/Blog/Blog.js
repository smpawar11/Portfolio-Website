import React from 'react';
import { motion } from 'framer-motion';
import './Blog.css';

const Blog = () => {
  // Sample blog posts data - would be fetched from a database or CMS in a real application
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      date: 'April 15, 2025',
      snippet: 'React Hooks have revolutionized how we write React components. In this post, I explain the most commonly used hooks and how they can simplify your code...',
      slug: 'getting-started-with-react-hooks'
    },
    {
      id: 2,
      title: 'The Power of CSS Grid Layout',
      date: 'April 8, 2025',
      snippet: 'CSS Grid Layout provides a powerful system for creating complex web layouts. In this article, I explore how to use CSS Grid to build responsive designs...',
      slug: 'power-of-css-grid-layout'
    },
    {
      id: 3,
      title: 'Understanding JavaScript Promises',
      date: 'March 25, 2025',
      snippet: 'Promises are an essential part of modern JavaScript. This post dives into how promises work, how to handle errors, and how to chain multiple asynchronous operations...',
      slug: 'understanding-javascript-promises'
    },
    {
      id: 4,
      title: 'Building Responsive UIs with Tailwind CSS',
      date: 'March 15, 2025',
      snippet: 'Tailwind CSS provides a utility-first approach to building user interfaces. Learn how to leverage Tailwind to create responsive designs quickly and efficiently...',
      slug: 'building-responsive-uis-with-tailwind'
    },
    {
      id: 5,
      title: 'Introduction to TypeScript for React Developers',
      date: 'February 28, 2025',
      snippet: 'TypeScript adds static typing to JavaScript, making your code more robust. This post covers the basics of TypeScript and how to integrate it with React applications...',
      slug: 'introduction-to-typescript-react'
    }
  ];

  // Animation variants for container and items
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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="blog-page">
      <div className="blog-header">
        <div className="container">
          <motion.h1 
            className="blog-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Blog
          </motion.h1>
          <motion.p 
            className="blog-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Thoughts, tutorials, and insights about programming and technology.
          </motion.p>
        </div>
      </div>
      
      <div className="blog-content">
        <div className="container">
          <motion.div 
            className="blog-posts"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogPosts.map((post, index) => (
              <motion.div 
                className="blog-post-card" 
                key={post.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
                  transition: { duration: 0.2 } 
                }}
              >
                <h2 className="post-title">{post.title}</h2>
                <p className="post-date">{post.date}</p>
                <p className="post-snippet">{post.snippet}</p>
                <a href={`/blog/${post.slug}`} className="read-more">
                  Read more <i className="fas fa-arrow-right"></i>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Blog;