import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, CodeBracketIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
              About Me
            </h2>
            <div className="bg-primary mx-auto rounded-pill" style={{width: '96px', height: '4px'}}></div>
          </motion.div>

          <div className="row align-items-center">
            {/* Left Column - Image and Personal Info */}
            <motion.div variants={itemVariants} className="col-lg-6 mb-5 mb-lg-0">
              {/* Profile Image */}
              <div className="position-relative text-center" style={{marginBottom : 90}}>
                <div className="bg-primary bg-gradient rounded-circle d-flex align-items-center justify-content-center mx-auto shadow-lg overflow-hidden" 
                     style={{ width: '100%', maxWidth: '500px', aspectRatio: '1 / 1' }}>
                  <img 
                    src="/myPhoto.jpeg" 
                    alt="Krupal Sidhdhapura" 
                    className="w-100 h-100 object-fit-cover"
                    style={{
                      objectFit: 'cover',
                      borderRadius: '50%'
                    }}
                  />
                </div>
                <div className="position-absolute bottom-0 end-0 bg-success rounded-circle d-flex align-items-center justify-content-center shadow" 
                     style={{width: '80px', height: '80px'}}>
                  <span className="text-white fw-semibold small">Available</span>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-light rounded-4 p-4">
                <h3 className="h4 fw-semibold text-dark mb-3">
                  Quick Info
                </h3>
                <div className="row g-3">
                  <div className="col-12 d-flex align-items-center">
                    <div className="bg-primary rounded-circle me-3" style={{width: '8px', height: '8px'}}></div>
                    <span className="text-muted">
                      <strong>Name:</strong> Krupal Sidhdhapura
                    </span>
                  </div>
                  <div className="col-12 d-flex align-items-center">
                    <div className="bg-primary rounded-circle me-3" style={{width: '8px', height: '8px'}}></div>
                    <span className="text-muted">
                      <strong>Email:</strong> krupalsiddhapura@gmail.com
                    </span>
                  </div>
                  <div className="col-12 d-flex align-items-center">
                    <div className="bg-primary rounded-circle me-3" style={{width: '8px', height: '8px'}}></div>
                    <span className="text-muted">
                      <strong>Location:</strong> Gujarat, India
                    </span>
                  </div>
                  <div className="col-12 d-flex align-items-center">
                    <div className="bg-primary rounded-circle me-3" style={{width: '8px', height: '8px'}}></div>
                    <span className="text-muted">
                      <strong>Status:</strong> Open to Opportunities
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="col-lg-6">
              {/* Introduction */}
              <div className="mb-5">
                <h3 className="h2 fw-bold text-dark mb-3">
                  Who I Am
                </h3>
                <p className="lead text-muted">
                  I'm Krupal, a passionate problem solver and MERN Stack developer who loves building impactful web applications. 
                  With a strong foundation in computer science and a keen interest in emerging technologies, 
                  I enjoy tackling complex challenges and creating innovative solutions.
                </p>
              </div>

              {/* Education */}
              <div className="bg-light rounded-4 p-4 mb-4">
                <div className="d-flex align-items-center mb-3">
                  <AcademicCapIcon style={{width: '24px', height: '24px'}} className="text-primary me-3" />
                  <h3 className="h4 fw-semibold text-dark mb-0">
                    Education
                  </h3>
                </div>
                <div className="border-start border-primary border-3 ps-3">
                  <h4 className="fw-semibold text-dark">
                    B.Tech in Computer Engineering
                  </h4>
                  <p className="text-primary fw-medium mb-1">
                    GH Patel College of Engineering & Technology
                  </p>
                  <p className="text-muted mb-1">
                    2022 - 2026
                  </p>
                  <p className="text-muted">
                    CGPA: 7.75/10
                  </p>
                </div>
              </div>

              {/* Interests */}
              <div className="bg-light rounded-4 p-4 mb-4">
                <div className="d-flex align-items-center mb-3">
                  <LightBulbIcon style={{width: '24px', height: '24px'}} className="text-primary me-3" />
                  <h3 className="h4 fw-semibold text-dark mb-0">
                    Areas of Interest
                  </h3>
                </div>
                <div className="row g-3">
                  <div className="col-md-6 d-flex align-items-center">
                    <CodeBracketIcon style={{width: '20px', height: '20px'}} className="text-primary me-2" />
                    <span className="text-muted">Data Structures & Algorithms</span>
                  </div>
                  <div className="col-md-6 d-flex align-items-center">
                    <CodeBracketIcon style={{width: '20px', height: '20px'}} className="text-primary me-2" />
                    <span className="text-muted">Full Stack Development</span>
                  </div>
                  <div className="col-md-6 d-flex align-items-center">
                    <CodeBracketIcon style={{width: '20px', height: '20px'}} className="text-primary me-2" />
                    <span className="text-muted">AI/ML Projects</span>
                  </div>
                  <div className="col-md-6 d-flex align-items-center">
                    <CodeBracketIcon style={{width: '20px', height: '20px'}} className="text-primary me-2" />
                    <span className="text-muted">Competitive Programming</span>
                  </div>
                </div>
              </div>

              {/* What I Do */}
              <div>
                <h3 className="h2 fw-bold text-dark mb-3">
                  What I Do
                </h3>
                <p className="lead text-muted">
                  I specialize in building modern web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). 
                  My passion lies in creating user-friendly, scalable, and efficient solutions that solve real-world problems. 
                  I'm constantly learning and exploring new technologies to stay ahead in this rapidly evolving field.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 