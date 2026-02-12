# Baby Guide App 👶 (FIXED VERSION)

A calming, AI-powered app for first-time parents to get answers about baby care questions.

## ✅ What Was Fixed
- Added backend API to avoid CORS errors
- App now works properly when deployed to Vercel
- Uses Anthropic Claude API through serverless function

## 🚀 Quick Deploy

### 1. Get Your API Key
- Go to https://console.anthropic.com
- Sign up and create an API key
- Save it for step 4

### 2. Upload to GitHub
- Create new repo on GitHub
- Upload all these files

### 3. Deploy to Vercel
- Go to vercel.com
- Import your GitHub repo
- Click "Deploy"

### 4. Add API Key
**IMPORTANT:** Before your app will work:
- Go to Vercel project → Settings → Environment Variables
- Add: `ANTHROPIC_API_KEY` = `your-api-key-here`
- Redeploy

## 📁 Project Structure
```
baby-guide-app/
├── api/
│   └── chat.js          ← Backend API (Vercel serverless function)
├── src/
│   ├── App.jsx          ← React app (updated to use backend)
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 💰 Costs
- First $5 FREE from Anthropic (~500-1000 questions)
- After: ~$0.003 per question
- Vercel hosting: FREE forever

## 🧪 Test Locally
```bash
npm install
npm run dev
```
Note: Local testing requires setting up the API key in `.env` file

## Tech Stack
- React 18
- Vite
- Tailwind CSS
- Anthropic Claude API
- Vercel Serverless Functions
