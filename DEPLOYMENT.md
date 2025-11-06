# Backend Deployment Guide

## Prerequisites
- GitHub account
- Render account (or Heroku account)
- MongoDB Atlas account (your current database will work)

---

## Option 1: Deploy on Render (Recommended - Free Tier)

### Step 1: Push Code to GitHub

1. **Initialize Git (if not already done):**
   ```bash
   cd /Users/keshavthakur/Downloads/MstryMessage
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

### Step 2: Create Account on Render

1. Go to [render.com](https://render.com)
2. Click "Get Started" or "Sign Up"
3. Sign up with GitHub (recommended)

### Step 3: Deploy Backend

1. **Click "New +" → "Web Service"**

2. **Connect Your Repository:**
   - Select "MstryMessage" repository
   - Click "Connect"

3. **Configure Service:**

   **Name:**
   ```
   mstrymessage-backend
   ```

   **Region:**
   ```
   Choose closest to you (e.g., Oregon, Frankfurt)
   ```

   **Branch:**
   ```
   main
   ```

   **Root Directory:**
   ```
   backend
   ```

   **Runtime:**
   ```
   Node
   ```

   **Build Command:**
   ```
   npm install
   ```

   **Start Command:**
   ```
   node server.js
   ```

4. **Select Plan:**
   - Choose "Free" plan
   - Click "Advanced" to add environment variables

5. **Add Environment Variables:**
   Click "Add Environment Variable" for each:

   | Key | Value |
   |-----|-------|
   | `PORT` | `10000` (Render uses this) |
   | `MONGO_DB_URL` | `your_mongodb_atlas_connection_string` |
   | `JWT_SECRET_KEY` | `your_jwt_secret_key` |
   | `JWT_EXPIRATION` | `15d` |
   | `NODE_ENV` | `production` |
   | `FRONTEND_URL` | Leave empty for now (add after frontend deployment) |

6. **Click "Create Web Service"**

7. **Wait for Deployment** (5-10 minutes)
   - You'll see logs in real-time
   - Once done, you'll get a URL like: `https://mstrymessage-backend.onrender.com`

8. **Copy Your Backend URL** - You'll need this for frontend deployment!

---

## Option 2: Deploy on Heroku (Alternative)

### Step 1: Install Heroku CLI

```bash
# macOS
brew tap heroku/brew && brew install heroku

# Or download from heroku.com/downloads
```

### Step 2: Login to Heroku

```bash
heroku login
```

### Step 3: Create Heroku App

```bash
cd /Users/keshavthakur/Downloads/MstryMessage/backend
heroku create mstrymessage-backend
```

### Step 4: Set Environment Variables

```bash
heroku config:set MONGO_DB_URL="your_mongodb_connection_string"
heroku config:set JWT_SECRET_KEY="your_jwt_secret"
heroku config:set JWT_EXPIRATION="15d"
heroku config:set NODE_ENV="production"
```

### Step 5: Deploy

```bash
git subtree push --prefix backend heroku main
# Or if you're in the backend directory:
git push heroku main
```

### Step 6: Open Your App

```bash
heroku open
```

Your backend will be at: `https://mstrymessage-backend.herokuapp.com`

---

## Option 3: Deploy Full Stack on Render (Backend serves Frontend)

This is simpler - deploy everything together!

1. **Click "New +" → "Web Service"**

2. **Configure Service:**

   **Root Directory:**
   ```
   backend
   ```

   **Build Command:**
   ```
   npm install && npm run build
   ```

   **Start Command:**
   ```
   node server.js
   ```

3. **Add Environment Variables** (same as Option 1, but no need for FRONTEND_URL)

4. **Deploy!**

This will:
- Install backend dependencies
- Build frontend (thanks to the build script)
- Serve both API and frontend from the same URL
- No CORS issues!

---

## After Deployment - Testing

### Test Your Backend

1. **Check Health:**
   Visit: `https://your-backend-url.onrender.com`
   You should see your frontend or an API response

2. **Test API Endpoints:**
   ```bash
   # Test signup (should return error or success)
   curl -X POST https://your-backend-url.onrender.com/api/auth/signup \
     -H "Content-Type: application/json" \
     -d '{"fullName":"Test","username":"test123","password":"test123","confirmPassword":"test123","gender":"male"}'
   ```

### Common Issues

**Issue: Application Error**
- Check logs on Render dashboard
- Verify all environment variables are set
- Check MongoDB connection string

**Issue: Database Connection Failed**
- Whitelist all IPs on MongoDB Atlas (0.0.0.0/0)
- Verify connection string in environment variables

**Issue: 502 Bad Gateway**
- Check if PORT is set correctly
- Render uses PORT 10000 automatically
- Make sure `process.env.PORT` is used in server.js

---

## Update Frontend After Backend Deployment

Once your backend is deployed, update your frontend:

1. **On Vercel Dashboard:**
   - Go to your project settings
   - Add/Update environment variable:
     - `VITE_API_URL` = `https://your-backend-url.onrender.com`

2. **Redeploy Frontend:**
   - Vercel will automatically redeploy
   - Or trigger manual redeploy

3. **Update Backend CORS:**
   - Go to Render dashboard
   - Add environment variable:
     - `FRONTEND_URL` = `https://your-frontend-url.vercel.app`
   - Service will automatically restart

---

## Your Deployment URLs

After deployment, you'll have:

- **Backend API:** `https://mstrymessage-backend.onrender.com`
- **Frontend:** `https://mstrymessage.vercel.app`

Update your README with these URLs!

---

## Next Steps

1. ✅ Deploy backend on Render
2. ✅ Get backend URL
3. ✅ Deploy frontend on Vercel with backend URL
4. ✅ Update backend CORS with frontend URL
5. ✅ Test the application
6. 🎉 Share with the world!

---

## Free Tier Limitations

### Render Free Tier:
- App sleeps after 15 minutes of inactivity
- First request after sleep takes ~30 seconds
- 750 hours/month free
- Good for portfolio projects

### Vercel Free Tier:
- No sleeping
- Fast global CDN
- 100GB bandwidth/month
- Perfect for frontend

---

## Tips for Production

1. **Keep Backend Awake:**
   - Use a service like [UptimeRobot](https://uptimerobot.com/) to ping your backend every 5 minutes
   - This prevents sleeping on free tier

2. **Monitor Your App:**
   - Use Render's built-in logs
   - Set up error tracking (Sentry)

3. **Secure Your App:**
   - Use strong JWT secrets
   - Keep environment variables secret
   - Enable HTTPS only in production

---

Good luck with your deployment! 🚀
