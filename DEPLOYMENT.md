# 🚀 Deployment Guide

This guide will help you deploy your portfolio website to Vercel in minutes.

## Prerequisites

- Node.js 18+ installed
- Git installed
- GitHub account
- Vercel account (free - sign up at https://vercel.com)

## Method 1: Deploy via Vercel Dashboard (Easiest)

### Step 1: Push to GitHub

1. Create a new repository on GitHub (https://github.com/new)
   - Repository name: `portfolio` (or any name you prefer)
   - Set to Public or Private
   - Don't initialize with README (we already have one)

2. Open PowerShell in your project folder and run:
```powershell
git init
git add .
git commit -m "Initial commit - Portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 2: Deploy on Vercel

1. Go to https://vercel.com and sign up/login with GitHub
2. Click "New Project"
3. Click "Import" next to your repository
4. Vercel will automatically detect Next.js settings:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: (leave default)
5. Click "Deploy"
6. Wait 2-3 minutes for deployment
7. 🎉 Your site is live! Vercel will give you a URL like `your-portfolio.vercel.app`

### Step 3: Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain (e.g., `prosantodas.com`)
3. Follow Vercel's instructions to update your domain's DNS settings
4. Wait for DNS propagation (can take 24-48 hours)

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```powershell
npm install -g vercel
```

### Step 2: Login to Vercel
```powershell
vercel login
```

### Step 3: Deploy
```powershell
# From your project directory
vercel

# For production deployment
vercel --prod
```

Follow the CLI prompts:
- Set up and deploy? **Y**
- Which scope? (Choose your account)
- Link to existing project? **N**
- What's your project's name? **portfolio**
- In which directory is your code located? **.**
- Want to override settings? **N**

## Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy every push to `main` branch to production
- Create preview deployments for pull requests
- Show deployment status in your GitHub commits

## Environment Variables (if needed in future)

If you add API keys or secrets later:

1. Go to your Vercel project dashboard
2. Navigate to "Settings" → "Environment Variables"
3. Add variables like:
   - `NEXT_PUBLIC_API_KEY=your_key_here`
4. Redeploy for changes to take effect

## Updating Your Live Site

Simply push changes to GitHub:
```powershell
git add .
git commit -m "Update content"
git push
```

Vercel will automatically detect the push and redeploy in ~2 minutes.

## Performance Tips

Your site is already optimized, but you can:
1. Add images to `public/` folder
2. Use Next.js `<Image>` component for automatic optimization
3. Check performance at https://pagespeed.web.dev/

## Troubleshooting

### Build fails on Vercel
- Check build logs in Vercel dashboard
- Ensure `npm run build` works locally
- Verify all dependencies are in `package.json`

### Site looks different than local
- Clear browser cache
- Check if custom styles are applied
- Verify all files are committed to Git

### 404 Error
- Ensure `app/page.tsx` exists
- Check that you're using Next.js 14 App Router structure

## Monitoring

Vercel provides:
- **Analytics** - Page views and Web Vitals
- **Real-time Logs** - Function execution logs
- **Deployment History** - Rollback to previous versions

Access these in your Vercel dashboard.

## Cost

The free tier includes:
- Unlimited personal projects
- Automatic SSL certificates
- Global CDN
- 100GB bandwidth/month
- Serverless functions

This is more than enough for a portfolio site!

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: Create issues in your repository

---

🎊 **Congratulations!** Your portfolio is now live and accessible worldwide!
