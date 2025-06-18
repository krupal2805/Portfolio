import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrophyIcon, StarIcon, ArrowTrendingUpIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

const CodingProfiles = () => {
  const [leetCodeData, setLeetCodeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/krupal_2805', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          mode: 'cors'
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.status === 'success') {
          setLeetCodeData(data);
        } else {
          throw new Error('Failed to fetch LeetCode data');
        }
      } catch (err) {
        console.error('Error fetching LeetCode data:', err);
        
        // Fallback data from your API response
        const fallbackData = {
          status: "success",
          message: "retrieved",
          totalSolved: 530,
          totalQuestions: 3580,
          easySolved: 136,
          totalEasy: 880,
          mediumSolved: 323,
          totalMedium: 1858,
          hardSolved: 71,
          totalHard: 842,
          acceptanceRate: 66.19,
          ranking: 130251,
          contributionPoints: 5486,
          reputation: 0,
          submissionCalendar: {}
        };
        
        setLeetCodeData(fallbackData);
        setError(null); // Clear any previous errors
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeData();
  }, []);

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

  const StatCard = ({ title, value, subtitle, icon, color, gradient }) => (
    <motion.div
      variants={itemVariants}
      className="card-custom h-100"
      style={{
        background: gradient || 'var(--white)',
        border: 'none',
        boxShadow: isDarkMode 
          ? '0 4px 6px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.1)'
          : '0 4px 6px rgba(0, 0, 0, 0.05)'
      }}
    >
      <div className="card-body text-center p-4">
        <div className={`${color} rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`} 
             style={{width: '60px', height: '60px'}}>
          {icon}
        </div>
        <h3 className="h2 fw-bold mb-2" style={{color: '#ffffff'}}>
          {value}
        </h3>
        <h5 className="h6 fw-semibold mb-2" style={{color: '#ffffff'}}>
          {title}
        </h5>
        <p className="mb-0 small" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
          {subtitle}
        </p>
      </div>
    </motion.div>
  );

  const ProgressCard = ({ title, solved, total, color, bgColor }) => {
    const percentage = total > 0 ? (solved / total) * 100 : 0;
    
    return (
      <motion.div
        variants={itemVariants}
        className="card-custom h-100"
      >
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="h6 fw-semibold mb-0" style={{color: isDarkMode ? '#ffffff' : '#1a1a1a'}}>
              {title}
            </h5>
            <span className="fw-bold" style={{color: color}}>
              {solved}/{total}
            </span>
          </div>
          <div className="progress mb-2" style={{height: '8px', backgroundColor: isDarkMode ? '#374151' : '#e5e7eb'}}>
            <div 
              className="progress-bar" 
              style={{
                backgroundColor: color,
                width: `${percentage}%`,
                transition: 'width 1s ease-in-out'
              }}
            ></div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="small text-muted">
              {percentage.toFixed(1)}% Complete
            </span>
            <span className="small fw-semibold" style={{color: color}}>
              {solved} Solved
            </span>
          </div>
        </div>
      </motion.div>
    );
  };

  if (loading) {
    return (
      <div className="section-padding">
        <div className="container">
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 text-muted">Loading LeetCode stats...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !leetCodeData) {
    return (
      <div className="section-padding">
        <div className="container">
          <div className="text-center">
            <div className="alert alert-warning" role="alert">
              <h4 className="alert-heading">Unable to load LeetCode data</h4>
              <p>{error || 'Please try again later.'}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
            <h2 className="display-4 fw-bold mb-3" style={{color: isDarkMode ? '#ffffff' : '#1a1a1a'}}>
              LeetCode Profile
            </h2>
            <div className="bg-warning mx-auto rounded-pill mb-4" style={{width: '96px', height: '4px'}}></div>
            <p className="lead mx-auto" style={{maxWidth: '600px', color: isDarkMode ? '#e0e0e0' : '#6b7280'}}>
              My competitive programming journey and achievements on LeetCode
            </p>
          </motion.div>

          {/* Main Stats Cards */}
          <div className="row g-4 mb-5">
            <div className="col-md-6 col-lg-3">
              <StatCard
                title="Total Solved"
                value={leetCodeData.totalSolved}
                subtitle="Problems Completed"
                icon={<CheckCircleIcon style={{width: '28px', height: '28px'}} className="text-white" />}
                color="bg-success"
                gradient={isDarkMode ? 'linear-gradient(135deg, #059669, #10b981)' : 'linear-gradient(135deg, #10b981, #34d399)'}
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <StatCard
                title="Acceptance Rate"
                value={`${leetCodeData.acceptanceRate}%`}
                subtitle="Success Rate"
                icon={<ArrowTrendingUpIcon style={{width: '28px', height: '28px'}} className="text-white" />}
                color="bg-primary"
                gradient={isDarkMode ? 'linear-gradient(135deg, #1d4ed8, #3b82f6)' : 'linear-gradient(135deg, #3b82f6, #60a5fa)'}
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <StatCard
                title="Global Ranking"
                value={`#${leetCodeData.ranking.toLocaleString()}`}
                subtitle="Worldwide Position"
                icon={<TrophyIcon style={{width: '28px', height: '28px'}} className="text-white" />}
                color="bg-warning"
                gradient={isDarkMode ? 'linear-gradient(135deg, #d97706, #f59e0b)' : 'linear-gradient(135deg, #f59e0b, #fbbf24)'}
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <StatCard
                title="Contest Ranking"
                value="~1600"
                subtitle="Approximate Rating"
                icon={<StarIcon style={{width: '28px', height: '28px'}} className="text-white" />}
                color="bg-danger"
                gradient={isDarkMode ? 'linear-gradient(135deg, #dc2626, #ef4444)' : 'linear-gradient(135deg, #ef4444, #f87171)'}
              />
            </div>
          </div>

          

          {/* Difficulty Progress */}
          <motion.div variants={itemVariants} className="mb-5">
            <h3 className="h2 fw-bold text-center mb-4" style={{color: isDarkMode ? '#ffffff' : '#1a1a1a'}}>
              Problem Solving Progress
            </h3>
            <div className="row g-4">
              <div className="col-md-4">
                <ProgressCard
                  title="Easy Problems"
                  solved={leetCodeData.easySolved}
                  total={leetCodeData.totalEasy}
                  color="#10b981"
                  bgColor="#d1fae5"
                />
              </div>
              <div className="col-md-4">
                <ProgressCard
                  title="Medium Problems"
                  solved={leetCodeData.mediumSolved}
                  total={leetCodeData.totalMedium}
                  color="#f59e0b"
                  bgColor="#fef3c7"
                />
              </div>
              <div className="col-md-4">
                <ProgressCard
                  title="Hard Problems"
                  solved={leetCodeData.hardSolved}
                  total={leetCodeData.totalHard}
                  color="#ef4444"
                  bgColor="#fee2e2"
                />
              </div>
            </div>
          </motion.div>

          {/* Additional Stats */}
          <motion.div variants={itemVariants} className="mb-5">
            <div className="card-custom p-4">
              <div className="row g-4 text-center">
                <div className="col-md-6 col-lg-4">
                  <div className="p-3">
                    <h4 className="h3 fw-bold mb-2" style={{color: isDarkMode ? '#ffffff' : '#1a1a1a'}}>
                      Top 25.13%
                    </h4>
                    <p className="mb-0" style={{color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : '#6b7280'}}>Global Percentile</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="p-3">
                    <h4 className="h3 fw-bold mb-2" style={{color: isDarkMode ? '#ffffff' : '#1a1a1a'}}>
                      {leetCodeData.contributionPoints.toLocaleString()}
                    </h4>
                    <p className="mb-0" style={{color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : '#6b7280'}}>Contribution Points</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="p-3">
                    <h4 className="h3 fw-bold mb-2" style={{color: isDarkMode ? '#ffffff' : '#1a1a1a'}}>
                      {Object.keys(leetCodeData.submissionCalendar).length}
                    </h4>
                    <p className="mb-0" style={{color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : '#6b7280'}}>Active Days</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* LeetCode Progress Screenshot */}
          
          <motion.div variants={itemVariants} className="mb-5">
            <div className="card-custom p-4">
              <div className="text-center mb-4">
                <h3 className="h2 fw-bold mb-3" style={{color: isDarkMode ? '#ffffff' : '#1a1a1a'}}>
                  My LeetCode Progress
                </h3>
                <p className="lead" style={{color: isDarkMode ? '#e0e0e0' : '#6b7280'}}>
                  Visual representation of my problem-solving journey
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <img 
                  src="/leetcode.png" 
                  alt="LeetCode Progress Screenshot" 
                  className="img-fluid rounded shadow-lg"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    border: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
                    boxShadow: isDarkMode 
                      ? '0 8px 16px rgba(0, 0, 0, 0.4), 0 0 20px rgba(59, 130, 246, 0.1)'
                      : '0 8px 16px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Codeforces Profile */}

          {/* Visit Profile Button */}
          <motion.div variants={itemVariants} className="text-center">
            <a
              href="https://leetcode.com/u/krupal_2805"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-custom btn-lg d-inline-flex align-items-center gap-3 px-5 py-3"
              style={{
                fontSize: '1.2rem',
                borderRadius: '12px',
                boxShadow: isDarkMode ? '0 0 20px rgba(59, 130, 246, 0.3)' : '0 4px 12px rgba(59, 130, 246, 0.3)'
              }}
            >
              <svg style={{width: '24px', height: '24px'}} fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.653 1.653 0 0 0 0 2.226 1.653 1.653 0 0 0 2.226 0l2.807-2.807 5.589 5.589a1.653 1.653 0 0 0 2.226 0 1.653 1.653 0 0 0 0-2.226l-5.589-5.589 2.807-2.807a1.653 1.653 0 0 0 0-2.226 1.653 1.653 0 0 0-2.226 0z"/>
              </svg>
              Visit My LeetCode Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CodingProfiles; 