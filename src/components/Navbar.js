import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Coding Profiles', path: '/coding-profiles' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar navbar-expand-lg sticky-top ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white'} shadow-sm`}>
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <div className="bg-primary rounded-3 d-flex align-items-center justify-content-center me-2" style={{width: '32px', height: '32px'}}>
            <span className="text-white fw-bold">K</span>
          </div>
          <span className={`fw-bold ${isDarkMode ? 'text-white' : 'text-dark'}`}>Krupal Sidhdhapura</span>
        </Link>

        {/* Mobile menu button */}
        <div className="d-lg-none d-flex align-items-center">
          <button
            onClick={toggleDarkMode}
            className={`btn btn-outline-secondary btn-sm me-2 ${isDarkMode ? 'btn-outline-light' : ''}`}
          >
            {isDarkMode ? (
              <SunIcon style={{width: '20px', height: '20px'}} />
            ) : (
              <MoonIcon style={{width: '20px', height: '20px'}} />
            )}
          </button>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <XMarkIcon style={{width: '24px', height: '24px'}} />
            ) : (
              <Bars3Icon style={{width: '24px', height: '24px'}} />
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto me-3">
            {navItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`nav-link ${isActive(item.path) ? 'active fw-semibold' : ''}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`btn btn-outline-secondary btn-sm ${isDarkMode ? 'btn-outline-light' : ''}`}
          >
            {isDarkMode ? (
              <SunIcon style={{width: '20px', height: '20px'}} />
            ) : (
              <MoonIcon style={{width: '20px', height: '20px'}} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 