# ⚡ Quick Deployment Setup

## 🎯 Your Current Setup

✅ **Backend:** https://mstrymessage-1.onrender.com (Deployed on Render)  
🔄 **Frontend:** Ready to deploy on Vercel

---

## 🚀 Step 1: Configure Backend on Render (IMPORTANT!)

Go to your Render dashboard and add these environment variables:

1. Go to https://dashboard.render.com
2. Click on your service "mstrymessage-1"
3. Click "Environment" tab
4. Add these variables:

```env
PORT=8000
MONGO_DB_URL=mongodb+srv://Keshav:fZGQvGP7vRzgVeZj@neednear1.bm0dook.mongodb.net
JWT_SECRET_KEY=hsbds234fbjfsnkjb23235dw
JWT_EXPIRATION=15d
NODE_ENV=production
FRONTEND_URL=*
```

⚠️ **Note:** Set `FRONTEND_URL=*` for now. After deploying frontend, update it with your Vercel URL.

Click "Save Changes" - Render will redeploy automatically.

---

## 🚀 Step 2: Deploy Frontend on Vercel

### Via Vercel Dashboard:

1. **Go to:** https://vercel.com
2. **Sign in** with GitHub
3. **Click:** "Add New" → "Project"
4. **Import:** MstryMessage repository
5. **Configure:**

   ```
   Framework Preset: Vite
   Root Directory: chat_app_frontend
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

6. **Environment Variables:**
   - Click "Environment Variables"
   - Add variable:
     - Name: `VITE_API_URL`
     - Value: `https://mstrymessage-1.onrender.com`
   - Select: Production, Preview, Development

7. **Click:** "Deploy"

8. **Wait** for deployment to complete (2-3 minutes)

9. **Copy** your Vercel URL (e.g., `https://mstrymessage.vercel.app`)

---

## 🚀 Step 3: Update Backend CORS

1. **Go back to Render dashboard**
2. **Click** on "Environment" tab
3. **Edit** `FRONTEND_URL`:
   ```
   FRONTEND_URL=https://your-vercel-url.vercel.app
   ```
   (Replace with your actual Vercel URL)
4. **Save** - Render will redeploy

---

## ✅ Step 4: Test Your App

Open your Vercel URL and test:
- ✅ Sign up
- ✅ Login
- ✅ Send messages
- ✅ Real-time messaging
- ✅ Online status

---

## 🆘 Quick Fixes

**CORS Error?**
- Check `FRONTEND_URL` in Render matches Vercel URL exactly

**Socket.io not connecting?**
- Verify `VITE_API_URL` in Vercel = `https://mstrymessage-1.onrender.com`

**Can't login?**
- Check all environment variables in Render are set
- Verify `NODE_ENV=production`

---

## 📝 Final Steps

After successful deployment:

1. Remove `.env.development` from git:
   ```bash
   git rm --cached chat_app_frontend/.env.development
   git commit -m "Remove env file from git"
   git push origin main
   ```

2. Update your README with live URLs

3. Share your app! 🎉

---

**Need help?** Check the full DEPLOYMENT.md guide for detailed instructions.
