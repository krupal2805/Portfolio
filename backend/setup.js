const fs = require('fs');
const path = require('path');

console.log('🚀 Portfolio Backend Setup');
console.log('==========================\n');

// Check if .env already exists
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  console.log('⚠️  .env file already exists. Skipping setup.');
  console.log('If you need to reconfigure, delete .env and run this script again.\n');
  process.exit(0);
}

// Read the example file
const examplePath = path.join(__dirname, 'env.example');
if (!fs.existsSync(examplePath)) {
  console.error('❌ env.example file not found!');
  process.exit(1);
}

// Copy example to .env
try {
  fs.copyFileSync(examplePath, envPath);
  console.log('✅ Created .env file from env.example');
  console.log('📝 Please edit .env file with your actual values:\n');
  console.log('1. Set EMAIL_USER to your Gmail address');
  console.log('2. Set EMAIL_PASS to your Gmail App Password');
  console.log('3. Update FRONTEND_URL if needed\n');
  console.log('📧 Gmail App Password Setup:');
  console.log('   - Go to Google Account settings');
  console.log('   - Enable 2-Factor Authentication');
  console.log('   - Go to Security > App passwords');
  console.log('   - Generate app password for "Mail"\n');
  console.log('🎯 Next steps:');
  console.log('   1. Edit .env file with your credentials');
  console.log('   2. Run: npm run dev');
  console.log('   3. Test the API at: http://localhost:5000/api/health\n');
} catch (error) {
  console.error('❌ Failed to create .env file:', error.message);
  process.exit(1);
} 