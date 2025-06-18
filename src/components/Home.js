import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDownIcon, DocumentArrowDownIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const [currentText, setCurrentText] = useState('');
  const fullText = "Software Developer";
  const [textIndex, setTextIndex] = useState(0);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [textIndex, fullText]);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Krupal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Dark mode specific background gradient
  const backgroundGradient = isDarkMode 
    ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)'
    : 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)';

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden home-hero" 
         style={{
           background: backgroundGradient,
           position: 'relative'
         }}>
      
      {/* Dark Mode Stars Animation */}
      {isDarkMode && (
        <div className="position-absolute w-100 h-100" style={{zIndex: 1}}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="position-absolute"
              style={{
                width: '2px',
                height: '2px',
                background: '#ffffff',
                borderRadius: '50%',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: 0.3 + Math.random() * 0.7
              }}
            />
          ))}
        </div>
      )}

      {/* Animated Background Elements */}
      <div className="position-absolute w-100 h-100" style={{zIndex: 1}}>
        <div className="position-absolute rounded-circle opacity-10" 
             style={{
               width: '300px', 
               height: '300px', 
               background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.1)',
               top: '10%',
               left: '10%',
               animation: 'float 6s ease-in-out infinite'
             }}></div>
        <div className="position-absolute rounded-circle opacity-10" 
             style={{
               width: '200px', 
               height: '200px', 
               background: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.1)',
               top: '60%',
               right: '15%',
               animation: 'float 8s ease-in-out infinite reverse'
             }}></div>
        <div className="position-absolute rounded-circle opacity-10" 
             style={{
               width: '150px', 
               height: '150px', 
               background: isDarkMode ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.1)',
               bottom: '20%',
               left: '20%',
               animation: 'float 7s ease-in-out infinite'
             }}></div>
      </div>

      {/* Dark Mode Aurora Effect */}
      {isDarkMode && (
        <div className="position-absolute w-100 h-100" style={{zIndex: 1}}>
          <div className="position-absolute w-100 h-100"
               style={{
                 background: 'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
                 animation: 'aurora 8s ease-in-out infinite',
                 top: '0',
                 left: '0'
               }}></div>
          <div className="position-absolute w-100 h-100"
               style={{
                 background: 'linear-gradient(-45deg, transparent 30%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)',
                 animation: 'aurora 10s ease-in-out infinite reverse',
                 top: '0',
                 left: '0'
               }}></div>
        </div>
      )}

      <div className="container text-center position-relative" style={{zIndex: 2}}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name with Enhanced Typography */}
          <motion.h1 
            variants={itemVariants}
            className="display-3 fw-bold mb-3"
            style={{
              color: '#ffffff',
              textShadow: isDarkMode 
                ? '2px 2px 4px rgba(0,0,0,0.5), 0 0 20px rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)'
                : '2px 2px 4px rgba(0,0,0,0.3), 0 0 10px rgba(255, 255, 255, 0.3)',
              filter: isDarkMode ? 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.4))' : 'none'
            }}
          >
            Krupal Sidhdhapura
          </motion.h1>

          {/* Animated Title */}
          <motion.div variants={itemVariants} className="mb-4">
            <h2 className="h2 text-white-50 fw-semibold mb-2">
              <span className="text-white-75">I'm a </span>
              <span 
                className="text-white fw-bold" 
                style={{
                  borderRight: '2px solid white', 
                  paddingRight: '5px',
                  textShadow: isDarkMode ? '0 0 10px rgba(59, 130, 246, 0.5)' : 'none'
                }}
              >
                {currentText}
              </span>
              <span className="text-white-75"> | B.Tech CSE Student</span>
            </h2>
          </motion.div>

          {/* Enhanced Bio */}
          <motion.p 
            variants={itemVariants}
            className="lead text-white-75 mb-5 mx-auto" 
            style={{
              maxWidth: '700px', 
              fontSize: '1.25rem', 
              lineHeight: '1.8',
              textShadow: isDarkMode ? '0 0 5px rgba(59, 130, 246, 0.2)' : 'none'
            }}
          >
            Passionate about creating innovative web solutions and turning ideas into reality. 
            I specialize in MERN Stack development and love building applications that make a difference.
          </motion.p>

          {/* Enhanced Call to Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="d-flex flex-column flex-sm-row gap-4 justify-content-center align-items-center mb-5"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/projects"
                className="btn-primary-custom btn-enhanced d-flex align-items-center gap-3 px-4 py-3"
                style={{
                  fontSize: '1.1rem', 
                  borderRadius: '12px',
                  boxShadow: isDarkMode ? '0 0 20px rgba(59, 130, 246, 0.3)' : '0 4px 12px rgba(59, 130, 246, 0.3)'
                }}
              >
                <CodeBracketIcon style={{width: '24px', height: '24px'}} />
                <span>View Projects</span>
                <ArrowDownIcon style={{width: '20px', height: '20px'}} />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={handleDownloadResume}
                className="btn-secondary-custom btn-enhanced d-flex align-items-center gap-3 px-4 py-3"
                style={{
                  fontSize: '1.1rem', 
                  borderRadius: '12px',
                  boxShadow: isDarkMode ? '0 0 15px rgba(255, 255, 255, 0.1)' : '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              >
                <DocumentArrowDownIcon style={{width: '24px', height: '24px'}} />
                <span>Download Resume</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div 
            variants={itemVariants}
            className="d-flex justify-content-center gap-5"
          >
            {[
              {
                name: 'LinkedIn',
                url: 'https://linkedin.com/in/krupal-siddhapura-aa7368256',
                icon: (
                  <svg style={{width: '28px', height: '28px'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )
              },
              {
                name: 'GitHub',
                url: 'https://github.com/krupal2805',
                icon: (
                  <svg style={{width: '28px', height: '28px'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                )
              },
              {
                name: 'LeetCode',
                url: 'https://leetcode.com/u/krupal_2805',
                icon: (
                  <svg style={{width: '28px', height: '28px'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.653 1.653 0 0 0 0 2.226 1.653 1.653 0 0 0 2.226 0l2.807-2.807 5.589 5.589a1.653 1.653 0 0 0 2.226 0 1.653 1.653 0 0 0 0-2.226l-5.589-5.589 2.807-2.807a1.653 1.653 0 0 0 0-2.226 1.653 1.653 0 0 0-2.226 0z"/>
                  </svg>
                )
              }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50 text-decoration-none d-flex align-items-center justify-content-center social-link-enhanced"
                style={{
                  width: '60px',
                  height: '60px',
                  background: isDarkMode 
                    ? 'rgba(59, 130, 246, 0.1)' 
                    : 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  backdropFilter: 'blur(10px)',
                  border: isDarkMode 
                    ? '1px solid rgba(59, 130, 246, 0.3)' 
                    : '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: isDarkMode 
                    ? '0 0 15px rgba(59, 130, 246, 0.2)' 
                    : 'none'
                }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: isDarkMode 
                    ? 'rgba(59, 130, 246, 0.2)' 
                    : 'rgba(255, 255, 255, 0.2)',
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="position-absolute bottom-0 start-50 translate-middle-x mb-4 scroll-indicator"
            style={{bottom: '20px'}}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="d-flex flex-column align-items-center text-white-50">
              <span className="small mb-2">Scroll to explore</span>
              <ArrowDownIcon style={{width: '20px', height: '20px'}} />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes aurora {
          0%, 100% { transform: translateX(-100%) rotate(0deg); opacity: 0.1; }
          50% { transform: translateX(100%) rotate(180deg); opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default Home; 