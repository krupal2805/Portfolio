const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('🔍 Gmail Authentication Test');
console.log('=============================\n');

// Check environment variables
console.log('📧 Email Configuration:');
console.log(`Email User: ${process.env.EMAIL_USER}`);
console.log(`Email Pass: ${process.env.EMAIL_PASS ? '***' + process.env.EMAIL_PASS.slice(-4) : 'NOT SET'}`);
console.log('');

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Test the connection
async function testConnection() {
  try {
    console.log('🔄 Testing Gmail connection...');
    
    // Verify credentials
    await transporter.verify();
    
    console.log('✅ Gmail authentication successful!');
    console.log('📧 Ready to send emails.');
    
    // Test sending a simple email
    console.log('\n📤 Testing email sending...');
    
    const testMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: 'Portfolio Contact Form Test',
      text: 'This is a test email from your portfolio contact form backend.',
      html: '<h2>Portfolio Contact Form Test</h2><p>This is a test email from your portfolio contact form backend.</p>'
    };
    
    const info = await transporter.sendMail(testMailOptions);
    
    console.log('✅ Test email sent successfully!');
    console.log(`📧 Message ID: ${info.messageId}`);
    console.log(`📧 Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
    
  } catch (error) {
    console.error('❌ Gmail authentication failed!');
    console.error('Error details:', error.message);
    
    if (error.code === 'EAUTH') {
      console.log('\n🔧 Troubleshooting Steps:');
      console.log('1. Make sure 2-Factor Authentication is enabled on your Gmail account');
      console.log('2. Generate a new App Password:');
      console.log('   - Go to https://myaccount.google.com/');
      console.log('   - Security > 2-Step Verification > App passwords');
      console.log('   - Select "Mail" and "Other"');
      console.log('   - Copy the 16-character password');
      console.log('3. Update your .env file with the new App Password');
      console.log('4. Make sure your email address is correct');
      console.log('\n📝 Current .env values:');
      console.log(`EMAIL_USER: ${process.env.EMAIL_USER}`);
      console.log(`EMAIL_PASS: ${process.env.EMAIL_PASS ? '***' + process.env.EMAIL_PASS.slice(-4) : 'NOT SET'}`);
    }
  }
}

testConnection(); 