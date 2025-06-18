import React from 'react';
import { motion} from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { isDarkMode } = useTheme();
  
  const skillsData = {
    languages: [
      { name: 'C', color: 'bg-primary text-white' },
      { name: 'C++', color: 'bg-primary text-white' },
      { name: 'Python', color: 'bg-success text-white' },
      { name: 'Java', color: 'bg-warning text-dark' },
      { name: 'JavaScript', color: 'bg-warning text-dark' },
      { name: 'C#', color: 'bg-secondary text-white' },
      { name: 'PHP', color: 'bg-info text-white' },
    ],
    web: [
      { name: 'HTML', color: 'bg-danger text-white' },
      { name: 'CSS', color: 'bg-primary text-white' },
      { name: 'Bootstrap', color: 'bg-secondary text-white' },
      { name: 'Node.js', color: 'bg-success text-white' },
      { name: 'React', color: 'bg-info text-white' },
      { name: 'Express.js', color: 'bg-dark text-white' },
      { name: 'MongoDB', color: 'bg-success text-white' },
    ],
    databases: [
      { name: 'MySQL', color: 'bg-primary text-white' },
      { name: 'MongoDB', color: 'bg-success text-white' },
    ],
    tools: [
      { name: 'Git', color: 'bg-warning text-dark' },
      { name: 'VS Code', color: 'bg-primary text-white' },
      { name: 'Jupyter Notebook', color: 'bg-warning text-dark' },
      { name: 'Postman', color: 'bg-warning text-dark' },
    ],
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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const SkillCategory = ({ title, skills, icon }) => (
    <motion.div 
      variants={itemVariants} 
      className="card-custom p-4 h-100"
      style={{
        background: isDarkMode 
          ? 'linear-gradient(135deg, #1f2937 0%, #374151 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        border: isDarkMode ? '1px solid #4b5563' : '1px solid #e2e8f0',
        boxShadow: isDarkMode 
          ? '0 4px 6px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.1)'
          : '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease'
      }}
      whileHover={{
        transform: 'translateY(-5px)',
        boxShadow: isDarkMode 
          ? '0 10px 25px rgba(0, 0, 0, 0.4), 0 0 30px rgba(59, 130, 246, 0.2)'
          : '0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05)'
      }}
    >
      <div className="d-flex align-items-center mb-4">
        <div className="rounded-3 d-flex align-items-center justify-content-center me-3" 
             style={{
               width: '50px', 
               height: '50px',
               background: isDarkMode 
                 ? 'linear-gradient(135deg, #60a5fa, #3b82f6)'
                 : 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
               boxShadow: isDarkMode 
                 ? '0 4px 12px rgba(96, 165, 250, 0.4)'
                 : '0 4px 12px rgba(59, 130, 246, 0.3)'
             }}>
          <div style={{color: '#ffffff'}}>
            {icon}
          </div>
        </div>
        <h3 className="h3 fw-bold mb-0" style={{color: isDarkMode ? '#ffffff' : '#1e293b'}}>
          {title}
        </h3>
      </div>
      <div className="d-flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              delay: index * 0.1,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{
              scale: 1.1,
              rotate: 2,
              transition: { duration: 0.2 }
            }}
            className={`badge ${skill.color} fs-6 fw-semibold px-4 py-3`}
            style={{
              borderRadius: '25px',
              boxShadow: isDarkMode 
                ? '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 10px rgba(59, 130, 246, 0.2)'
                : '0 2px 8px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              border: 'none',
              textShadow: isDarkMode 
                ? '0 1px 2px rgba(0, 0, 0, 0.3)'
                : '0 1px 2px rgba(0, 0, 0, 0.1)'
            }}
          >
            {skill.name}
          </motion.span>
        ))}
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
            <h2 className="display-4 fw-bold mb-3" style={{color: isDarkMode ? '#ffffff' : '#1e293b'}}>
              Skills & Technologies
            </h2>
            <div className="bg-primary mx-auto rounded-pill mb-4" style={{width: '96px', height: '4px'}}></div>
            <p className="lead mx-auto" style={{
              maxWidth: '600px', 
              fontSize: '1.25rem', 
              lineHeight: '1.8',
              color: isDarkMode ? '#e0e0e0' : '#6b7280'
            }}>
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </motion.div>

          {/* Skills Progress Indicator */}
          

          {/* Skills Grid */}
          <div className="row g-4">
            <div className="col-12 mb-4">
              <SkillCategory
                title="Programming Languages"
                skills={skillsData.languages}
                icon={
                  <svg style={{width: '24px', height: '24px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                }
              />
            </div>

            <div className="col-12 mb-4">
              <SkillCategory
                title="Web Technologies"
                skills={skillsData.web}
                icon={
                  <svg style={{width: '24px', height: '24px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                }
              />
            </div>

            <div className="col-12 mb-4">
              <SkillCategory
                title="Databases"
                skills={skillsData.databases}
                icon={
                  <svg style={{width: '24px', height: '24px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                }
              />
            </div>

            <div className="col-12 mb-4">
              <SkillCategory
                title="Tools & IDEs"
                skills={skillsData.tools}
                icon={
                  <svg style={{width: '24px', height: '24px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
              />
            </div>
          </div>

          {/* Additional Info */}
          
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 