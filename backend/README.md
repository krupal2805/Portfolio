# Portfolio Backend

Backend server for Krupal's portfolio contact form with email functionality.

## Features

- ✅ **Contact Form API** - Handle form submissions
- ✅ **Email Integration** - Send emails using Nodemailer
- ✅ **Input Validation** - Comprehensive form validation
- ✅ **Rate Limiting** - Prevent spam and abuse
- ✅ **Security** - Helmet.js for security headers
- ✅ **CORS** - Cross-origin resource sharing
- ✅ **Error Handling** - Proper error responses
- ✅ **Health Check** - Server status endpoint

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

1. Copy the example environment file:
```bash
cp env.example .env
```

2. Edit `.env` file with your configuration:
```env
PORT=5000
FRONTEND_URL=http://localhost:3000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 3. Gmail App Password Setup

For Gmail, you need to use an App Password instead of your regular password:

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Enable **2-Factor Authentication** if not already enabled
3. Go to **Security** > **App passwords**
4. Select **Mail** as the app and **Other** as the device
5. Generate the app password
6. Use this generated password in your `.env` file

### 4. Start the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### POST /api/contact

Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I would like to discuss a potential project..."
}
```

**Validation Rules:**
- `name`: 2-50 characters, letters and spaces only
- `email`: Valid email format
- `subject`: 5-100 characters
- `message`: 10-1000 characters

**Success Response (200):**
```json
{
  "success": true,
  "message": "Message sent successfully! You will receive a confirmation email shortly."
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    }
  ]
}
```

### GET /api/health

Check server status.

**Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

## Email Features

### 1. Notification Email (to you)
- Sent to your email address
- Contains full contact details and message
- Professional HTML formatting
- Reply-to set to sender's email

### 2. Confirmation Email (to sender)
- Sent to the person who submitted the form
- Confirms receipt of their message
- Includes message summary
- Professional branding

## Security Features

- **Rate Limiting**: 5 requests per 15 minutes per IP
- **Input Validation**: Comprehensive form validation
- **Security Headers**: Helmet.js for security headers
- **CORS**: Configured for your frontend domain
- **Error Handling**: No sensitive information in error messages

## Development

### File Structure
```
backend/
├── server.js          # Main server file
├── package.json       # Dependencies
├── .env              # Environment variables (create from env.example)
├── env.example       # Example environment file
└── README.md         # This file
```

### Dependencies
- `express`: Web framework
- `nodemailer`: Email sending
- `cors`: Cross-origin resource sharing
- `helmet`: Security headers
- `express-rate-limit`: Rate limiting
- `express-validator`: Input validation
- `dotenv`: Environment variables

## Deployment

### Environment Variables for Production
```env
PORT=5000
FRONTEND_URL=https://your-domain.com
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Deployment Platforms
- **Heroku**: Add environment variables in dashboard
- **Vercel**: Use Vercel CLI or dashboard
- **Railway**: Add environment variables in dashboard
- **DigitalOcean**: Use App Platform or Droplet

## Troubleshooting

### Common Issues

1. **Email not sending**
   - Check Gmail app password is correct
   - Ensure 2FA is enabled on Gmail
   - Verify email credentials in `.env`

2. **CORS errors**
   - Update `FRONTEND_URL` in `.env`
   - Check frontend is running on correct port

3. **Rate limiting**
   - Wait 15 minutes between submissions
   - Check if using VPN/proxy

4. **Validation errors**
   - Check input format matches validation rules
   - Ensure all required fields are provided

## Support

For issues or questions, contact: krupalsiddhapura@gmail.com 