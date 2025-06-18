import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  const contactInfo = [
    {
      icon: <EnvelopeIcon style={{width: '16px', height: '16px'}} />,
      text: 'krupalsiddhapura@gmail.com',
      link: 'mailto:krupalsiddhapura@gmail.com'
    },
    {
      icon: <MapPinIcon style={{width: '16px', height: '16px'}} />,
      text: 'Gujarat, India',
      link: '#'
    }
  ];

  return (
    <footer className="py-5 position-relative overflow-hidden footer-enhanced">
      {/* Background Pattern */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
        <div className="position-absolute" style={{
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          top: '10%',
          left: '10%'
        }}></div>
        <div className="position-absolute" style={{
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
          bottom: '20%',
          right: '15%'
        }}></div>
      </div>

      <div className="container position-relative">
        <div className="row g-4">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <div className="d-flex align-items-center mb-3">
                <div className="bg-primary rounded-3 d-flex align-items-center justify-content-center me-3" 
                     style={{width: '40px', height: '40px'}}>
                  <span className="text-white fw-bold">K</span>
                </div>
                <span className="h4 fw-bold mb-0 text-gradient">Krupal Sidhdhapura</span>
              </div>
              <p className="text-muted mb-4" style={{lineHeight: '1.6'}}>
                A passionate Full Stack Developer dedicated to creating innovative web solutions 
                and turning ideas into reality through code.
              </p>
              
              {/* Social Links */}
              <div className="d-flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-3 d-flex align-items-center justify-content-center text-decoration-none social-link-enhanced" 
                    style={{width: '40px', height: '40px'}}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h5 className="fw-bold mb-3 text-gradient">Quick Links</h5>
              <ul className="list-unstyled">
                {quickLinks.map((link, index) => (
                  <li key={index} className="mb-2">
                    <Link 
                      to={link.path}
                      className="text-decoration-none d-flex align-items-center link-hover-effect"
                      style={{transition: 'all 0.3s ease'}}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateX(5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = '';
                      }}
                    >
                      <span className="me-2">→</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h5 className="fw-bold mb-3 text-gradient">Contact Info</h5>
              <div className="d-flex flex-column gap-3">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="text-decoration-none d-flex align-items-center link-hover-effect"
                    style={{transition: 'all 0.3s ease'}}
                  >
                    <div className="bg-primary bg-opacity-25 rounded-2 d-flex align-items-center justify-content-center me-3" 
                         style={{width: '32px', height: '32px'}}>
                      {info.icon}
                    </div>
                    <span className="small">{info.text}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Newsletter/CTA */}
          <div className="col-lg-3 col-md-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h5 className="fw-bold mb-3 text-gradient">Let's Connect</h5>
              <p className="text-muted small mb-3">
                Interested in working together? Let's discuss your next project!
              </p>
              <Link 
                to="/contact"
                className="btn-primary-custom btn-enhanced d-inline-flex align-items-center gap-2"
                style={{fontSize: '0.9rem', padding: '8px 16px'}}
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-top mt-4 pt-4"
          style={{borderColor: 'var(--gray-200)'}}
        >
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <p className="text-muted mb-0 small">
                &copy; {currentYear} Krupal Sidhdhapura. All rights reserved.
              </p>
            </div>
      
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 