import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isDarkMode } = useTheme();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${'http://localhost:5000'}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        // Success message
        alert(result.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Validation errors or other errors
        if (result.errors) {
          const errorMessages = result.errors.map(error => `${error.path}: ${error.msg}`).join('\n');
          alert(`Please fix the following errors:\n${errorMessages}`);
        } else {
          alert(result.message || 'Failed to send message. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Network error. Please check your connection and try again, or contact me directly at krupalsiddhapura@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon style={{width: '20px', height: '20px'}} />,
      title: 'Email',
      value: 'krupalsiddhapura@gmail.com',
      link: 'mailto:krupalsiddhapura@gmail.com'
    },
    
    {
      icon: <MapPinIcon style={{width: '20px', height: '20px'}} />,
      title: 'Location',
      value: 'Gujarat, India',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/krupal-siddhapura-aa7368256',
      icon: (
        <svg style={{width: '20px', height: '20px'}} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/krupal2805',
      icon: (
        <svg style={{width: '20px', height: '20px'}} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/krupal_2805',
      icon: (
        <svg style={{width: '20px', height: '20px'}} fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.653 1.653 0 0 0 0 2.226 1.653 1.653 0 0 0 2.226 0l2.807-2.807 5.589 5.589a1.653 1.653 0 0 0 2.226 0 1.653 1.653 0 0 0 0-2.226l-5.589-5.589 2.807-2.807a1.653 1.653 0 0 0 0-2.226 1.653 1.653 0 0 0-2.226 0z"/>
        </svg>
      )
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

  return (
    <div className="section-padding contact-section">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-4">
            <h2 className="h2 fw-bold mb-3" style={{color: isDarkMode ? '#ffffff' : '#1a1a1a'}}>
              Get In Touch
            </h2>
            <div className="bg-primary mx-auto rounded-pill mb-3" style={{width: '96px', height: '4px'}}></div>
            <p className="mx-auto" style={{maxWidth: '600px', color: isDarkMode ? '#e0e0e0' : '#6b7280'}}>
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
            </p>
          </motion.div>

          <div className="row g-4">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="col-lg-6">
              <div className="card-custom p-4" style={{
                background: isDarkMode ? '#1f2937' : '#ffffff',
                border: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
                boxShadow: isDarkMode 
                  ? '0 4px 6px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.1)'
                  : '0 4px 6px rgba(0, 0, 0, 0.05)'
              }}>
                <h3 className="h5 fw-bold mb-3" style={{color: isDarkMode ? '#ffffff' : '#1a1a1a'}}>
                  Send Me a Message
                </h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label fw-medium mb-2" style={{color: isDarkMode ? '#ffffff' : '#1a1a1a'}}>
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-control"
                        placeholder="Your name"
                        style={{
                          backgroundColor: isDarkMode ? '#374151' : '#ffffff',
                          border: isDarkMode ? '1px solid #4b5563' : '1px solid #d1d5db',
                          color: isDarkMode ? '#ffffff' : '#1a1a1a'
                        }}
                      />
                    </div>
                    
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label fw-medium mb-2" style={{color: isDarkMode ? '#ffffff' : '#1a1a1a'}}>
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-control"
                        placeholder="your.email@example.com"
                        style={{
                          backgroundColor: isDarkMode ? '#374151' : '#ffffff',
                          border: isDarkMode ? '1px solid #4b5563' : '1px solid #d1d5db',
                          color: isDarkMode ? '#ffffff' : '#1a1a1a'
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label fw-medium mb-2" style={{color: isDarkMode ? '#ffffff' : '#1a1a1a'}}>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="What's this about?"
                      style={{
                        backgroundColor: isDarkMode ? '#374151' : '#ffffff',
                        border: isDarkMode ? '1px solid #4b5563' : '1px solid #d1d5db',
                        color: isDarkMode ? '#ffffff' : '#1a1a1a'
                      }}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-medium mb-2" style={{color: isDarkMode ? '#ffffff' : '#1a1a1a'}}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="3"
                      className="form-control"
                      placeholder="Tell me about your project or opportunity..."
                      style={{
                        backgroundColor: isDarkMode ? '#374151' : '#ffffff',
                        border: isDarkMode ? '1px solid #4b5563' : '1px solid #d1d5db',
                        color: isDarkMode ? '#ffffff' : '#1a1a1a'
                      }}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary-custom w-100 d-flex align-items-center justify-content-center gap-2"
                    style={{
                      boxShadow: isDarkMode ? '0 0 20px rgba(59, 130, 246, 0.3)' : '0 4px 12px rgba(59, 130, 246, 0.3)'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner-border spinner-border-sm" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <PaperAirplaneIcon style={{width: '20px', height: '20px'}} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="col-lg-6">
              <div className="d-flex flex-column h-100 justify-content-center">
                {/* Contact Info Cards */}
                <div className="mb-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="card-custom contact-info-card mb-3" style={{
                      background: isDarkMode ? '#1f2937' : '#ffffff',
                      border: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
                      boxShadow: isDarkMode 
                        ? '0 4px 6px rgba(0, 0, 0, 0.3)'
                        : '0 4px 6px rgba(0, 0, 0, 0.05)'
                    }}>
                      <div className="d-flex align-items-center">
                        <div className="bg-primary bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center me-3" 
                             style={{width: '36px', height: '36px'}}>
                          <div className="text-primary">
                            {info.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="h6 fw-semibold mb-1" style={{color: isDarkMode ? '#ffffff' : '#1a1a1a'}}>
                            {info.title}
                          </h4>
                          <a
                            href={info.link}
                            className="text-decoration-none small"
                            style={{color: isDarkMode ? '#d1d5db' : '#6b7280'}}
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="card-custom contact-social-card" style={{
                  background: isDarkMode ? '#1f2937' : '#ffffff',
                  border: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
                  boxShadow: isDarkMode 
                    ? '0 4px 6px rgba(0, 0, 0, 0.3)'
                    : '0 4px 6px rgba(0, 0, 0, 0.05)'
                }}>
                  <h4 className="h6 fw-semibold mb-3" style={{color: isDarkMode ? '#ffffff' : '#1a1a1a'}}>
                    Connect With Me
                  </h4>
                  <div className="social-links-container">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        style={{
                          color: isDarkMode ? '#d1d5db' : '#6b7280',
                          backgroundColor: isDarkMode ? '#374151' : '#f3f4f6'
                        }}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability Status */}
                <div className="card-custom bg-success bg-opacity-10 border-success contact-availability-card mt-auto" style={{
                  background: isDarkMode ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                  border: isDarkMode ? '1px solid #10b981' : '1px solid #10b981',
                  boxShadow: isDarkMode 
                    ? '0 4px 6px rgba(0, 0, 0, 0.3)'
                    : '0 4px 6px rgba(0, 0, 0, 0.05)'
                }}>
                  <div className="d-flex align-items-center">
                    <div className="bg-success rounded-circle me-3" style={{width: '8px', height: '8px'}}></div>
                    <div>
                      <h4 className="h6 fw-semibold mb-1" style={{color: isDarkMode ? '#ffffff' : '#1a1a1a'}}>
                        Available for Opportunities
                      </h4>
                      <p className="mb-0 small" style={{color: isDarkMode ? '#d1d5db' : '#6b7280'}}>
                        Open to new projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 