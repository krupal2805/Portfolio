# 🚀 Portfolio Deployment Guide

## Overview
This guide will help you deploy your portfolio website to production. The project consists of:
- **Frontend**: React app (deploy to Vercel/Netlify)
- **Backend**: Node.js/Express API (deploy to Heroku/Railway)

## 📋 Pre-Deployment Checklist

### ✅ Frontend Ready
- [x] Environment variables configured
- [x] API URL uses environment variable
- [x] Build script available (`npm run build`)

### ✅ Backend Ready
- [x] Environment variables configured
- [x] CORS settings for production
- [x] Security middleware implemented
- [x] Procfile created for Heroku

## 🎯 Deployment Options

### Option 1: Vercel (Frontend) + Heroku (Backend) - RECOMMENDED

#### Frontend Deployment (Vercel)
1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Connect your GitHub account
   - Import your repository
   - Set environment variables:
     ```
     REACT_APP_API_URL=https://portfolio-kpxk.onrender.com
     ```
   - Deploy!

#### Backend Deployment (Heroku)
1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku App**
   ```bash
   cd backend
   heroku create your-portfolio-backend
   ```

4. **Set Environment Variables**
   ```bash
   heroku config:set EMAIL_USER=krupalsiddhapura@gmail.com
   heroku config:set EMAIL_PASS=your-app-password
   heroku config:set FRONTEND_URL=https://your-frontend-url.vercel.app
   ```

5. **Deploy**
   ```bash
   git add .
   git commit -m "Backend ready for deployment"
   git push heroku main
   ```

### Option 2: Netlify (Frontend) + Railway (Backend)

#### Frontend Deployment (Netlify)
1. **Build locally**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `build` folder
   - Set environment variables in Netlify dashboard

#### Backend Deployment (Railway)
1. **Go to [railway.app](https://railway.app)**
2. **Connect GitHub repository**
3. **Set environment variables**
4. **Deploy automatically**

## 🔧 Environment Variables

### Frontend (.env)
```
REACT_APP_API_URL=https://portfolio-kpxk.onrender.com
```

### Backend (Heroku/Railway)
```
PORT=5000
FRONTEND_URL=https://your-frontend-url.vercel.app
EMAIL_USER=krupalsiddhapura@gmail.com
EMAIL_PASS=your-gmail-app-password
```

## 🚨 Important Notes

### Gmail App Password
1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password for "Mail"
3. Use this password in `EMAIL_PASS` (not your regular password)

### CORS Configuration
The backend is configured to accept requests from your frontend URL. Make sure to update `FRONTEND_URL` in your backend environment variables.

### SSL/HTTPS
- Vercel and Netlify provide SSL automatically
- Heroku provides SSL for custom domains
- Always use HTTPS in production

## 🧪 Testing After Deployment

1. **Test Contact Form**
   - Fill out the contact form
   - Check if you receive the email
   - Verify the confirmation email is sent

2. **Test All Sections**
   - Navigation works
   - Dark/light mode toggle
   - All links open correctly
   - Responsive design on mobile

## 🔍 Troubleshooting

### Common Issues
1. **CORS Errors**: Check `FRONTEND_URL` in backend environment variables
2. **Email Not Sending**: Verify Gmail App Password is correct
3. **Build Failures**: Check for missing dependencies

### Debug Commands
```bash
# Check Heroku logs
heroku logs --tail

# Check environment variables
heroku config

# Restart Heroku app
heroku restart
```

## 📞 Support
If you encounter issues:
1. Check the logs in your deployment platform
2. Verify all environment variables are set correctly
3. Test locally first with `npm start`

## 🎉 Success!
Once deployed, your portfolio will be live and accessible to potential employers and clients! 