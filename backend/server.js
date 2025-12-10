const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const {Resend} = require('resend');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


// CORS configuration
app.use(cors({
  origin: [process.env.FRONTEND_URL,
          'http://localhost:3000'
          ],
  credentials: true
}));

app.set('trust proxy', 1);
// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.'
  }
});

// Apply rate limiting to contact endpoint
app.use('/api/contact', limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Email transporter configuration
// const createTransporter = () => {
//   return nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS // Use App Password for Gmail
//     }
//   });
// };


// Validation middleware
const contactValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name can only contain letters and spaces'),
  
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('subject')
    .trim()
    .isLength({ min: 5, max: 100 })
    .withMessage('Subject must be between 5 and 100 characters'),
  
  body('message')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters')
];

// Contact form endpoint
app.post('/api/contact', contactValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { name, email, subject, message } = req.body;

    // Create email transporter
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'krupalsiddhapura@gmail.com', // Send to yourself
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <h3 style="color: #1f2937; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #374151;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #f1f5f9; border-radius: 8px; font-size: 14px; color: #64748b;">
            <p><strong>Sent from:</strong> Your Portfolio Website</p>
            <p><strong>Timestamp:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
        
        Sent from: Your Portfolio Website
        Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `
    };

    // Send email
    const { data, error } = await resend.emails.send(mailOptions);

    console.log('Admin email result -> data:', data, 'error:', error);


    // Send confirmation email to the user
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Krupal Siddhapura',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Thank You for Reaching Out!
          </h2>
          
          <p style="line-height: 1.6; color: #374151;">
            Hi ${name},
          </p>
          
          <p style="line-height: 1.6; color: #374151;">
            Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.
          </p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Your Message Summary</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</p>
          </div>
          
          <p style="line-height: 1.6; color: #374151;">
            I typically respond within 24-48 hours. If you have any urgent inquiries, please feel free to reach out directly at krupalsiddhapura@gmail.com
          </p>
          
          <p style="line-height: 1.6; color: #374151;">
            Best regards,<br>
            <strong>Krupal Siddhapura</strong><br>
            Full Stack Developer
          </p>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #f1f5f9; border-radius: 8px; font-size: 14px; color: #64748b;">
            <p>This is an automated confirmation email. Please do not reply to this message.</p>
          </div>
        </div>
      `,
      text: `
        Thank You for Reaching Out!
        
        Hi ${name},
        
        Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.
        
        Your Message Summary:
        Subject: ${subject}
        Message: ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}
        
        I typically respond within 24-48 hours. If you have any urgent inquiries, please feel free to reach out directly at krupalsiddhapura@gmail.com
        
        Best regards,
        Krupal Siddhapura
        Full Stack Developer
        
        This is an automated confirmation email. Please do not reply to this message.
      `
    };

    // Send confirmation email
    await resend.emails.send(confirmationMailOptions);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! You will receive a confirmation email shortly.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later or contact me directly at krupalsiddhapura@gmail.com'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Contact endpoint: http://localhost:${PORT}/api/contact`);
  console.log(`🏥 Health check: http://localhost:${PORT}/api/health`);
}); 