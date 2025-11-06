# 🚀 Quick Deployment Checklist

## Before You Start
- [ ] Code pushed to GitHub
- [ ] MongoDB Atlas database ready
- [ ] `.env` values noted down

---

## Render Backend Deployment

### 1. Go to [render.com](https://render.com) → Sign up with GitHub

### 2. Click "New +" → "Web Service"

### 3. Fill in these boxes:

| Field | Value |
|-------|-------|
| **Name** | `mstrymessage-backend` |
| **Root Directory** | `backend` |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `node server.js` |
| **Plan** | `Free` |

### 4. Environment Variables (Click "Advanced")

```env
PORT=10000
MONGO_DB_URL=mongodb+srv://Keshav:fZGQvGP7vRzgVeZj@neednear1.bm0dook.mongodb.net
JWT_SECRET_KEY=hsbds234fbjfsnkjb23235dw
JWT_EXPIRATION=15d
NODE_ENV=production
```

### 5. Click "Create Web Service"

### 6. Copy your URL (something like):
```
https://mstrymessage-backend.onrender.com
```

---

## Vercel Frontend Deployment

### 1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub

### 2. Click "Add New" → "Project"

### 3. Import "MstryMessage" repository

### 4. Fill in these boxes:

| Field | Value |
|-------|-------|
| **Framework Preset** | `Vite` |
| **Root Directory** | `chat_app_frontend` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

### 5. Environment Variables:

```env
VITE_API_URL=https://mstrymessage-backend.onrender.com
```
(Use YOUR backend URL from Render)

### 6. Click "Deploy"

### 7. Copy your frontend URL (something like):
```
https://mstrymessage.vercel.app
```

---

## Final Step: Update Backend CORS

### Go back to Render → Your Backend Service → Environment

Add new variable:
```env
FRONTEND_URL=https://mstrymessage.vercel.app
```
(Use YOUR frontend URL from Vercel)

Service will auto-restart.

---

## ✅ Done!

Test your app at: `https://mstrymessage.vercel.app`

---

## 📝 Important Notes

- **First load is slow** - Render free tier sleeps after 15 min
- **MongoDB Atlas** - Make sure IP whitelist includes `0.0.0.0/0`
- **Logs** - Check Render dashboard for backend errors
- **Vercel** - Check deployment logs for frontend errors

---

## 🔥 Quick Test

After deployment, test these URLs:

1. Backend API: `https://your-backend.onrender.com/api/users`
   - Should return 401 (unauthorized) or empty array
   
2. Frontend: `https://your-frontend.vercel.app`
   - Should show login/signup page

---

## Need Help?

Check `DEPLOYMENT.md` for detailed guide with troubleshooting!
