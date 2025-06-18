import React from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
// import { div, p } from 'framer-motion/client';

const Projects = () => {
  const projects = [
    {
      Heading : 'Blog App',
      title: 'Blog Platform with Sentiment Analysis',
      description: 'A full-stack blog application with user authentication, CRUD operations, like/dislike system, user profiles, follow/unfollow functionality, sentiment analysis of comments, and responsive design.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'NLP'],
      github: 'https://github.com/krupal2805/Blogging-Platform',
      demo: '#',
      featured: true
    },
    {
      Heading : 'Digit Recognition',
      title: 'Handwritten Digit Recognition with Sudoku Solver',
      description: 'A CNN model trained on MNIST dataset integrated into a web application for solving Sudoku puzzles.',
      techStack: ['Python', 'TensorFlow', 'Flask', 'HTML5 Canvas', 'JavaScript'],
      github: 'https://github.com/krupal2805/handwritten-digit-recognition',
      demo: '#',
      featured: true
    },
    {
      Heading : 'E-Commerce',
      title: 'E-Commerce Platform',
      description: 'A complete e-commerce solution with product catalog, shopping cart, and payment integration.',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Stripe API', 'Redux'],
      github: 'https://github.com/krupal2805/ecommerce-platform',
      demo: '#',
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const ProjectCard = ({ project, index }) => (
    <motion.div
      variants={itemVariants}
      className={`project-card ${project.featured ? 'featured' : ''}`}
    >
      {/* Project Image */}
      <div className="project-image">
        <span className="text-white fw-bold fs-3">{project.Heading}</span>
        {project.featured && (
          <div className="featured-badge">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h3 className="project-title">
          {project.title}
        </h3>
        
        <p className="project-description">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="tech-stack">
          {project.techStack.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="tech-badge"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        {project.featured ? (
          <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link primary"
          >
            <CodeBracketIcon style={{width: '20px', height: '20px'}} />
            <span>Code</span>
          </a>

        </div>
        ) : <div className='project-links '>
              <p className='project-link primary ' style={{width: '104px', height: '15px'}}>Coming Soon</p>
            </div>
          }
      </div>
    </motion.div>
  );

  return (
    <div className="section-padding">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-5">
            <h2 className="display-4 fw-bold text-dark mb-3">
              My Projects
            </h2>
            <div className="bg-primary mx-auto rounded-pill mb-4" style={{width: '96px', height: '4px'}}></div>
            <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
              Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-5">
            <h3 className="h2 fw-bold text-dark mb-4 text-center">
              Featured Projects
            </h3>
            <div className="row g-4">
              {projects.filter(project => project.featured).map((project, index) => (
                <div className="col-lg-6" key={index}>
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* All Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="h2 fw-bold text-dark mb-4 text-center">
              All Projects
            </h3>
            <div className="row g-4">
              {projects.map((project, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-5">
            <div className="bg-light rounded-4 p-5">
              <h3 className="h2 fw-bold text-dark mb-3">
                Have a Project in Mind?
              </h3>
              <p className="lead text-muted mb-4">
                I'm always interested in new opportunities and exciting projects.
              </p>
              <a
                href="/contact"
                className="btn-primary-custom d-inline-flex align-items-center gap-2"
              >
                <span>Let's Work Together</span>
                <ArrowTopRightOnSquareIcon style={{width: '20px', height: '20px'}} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 