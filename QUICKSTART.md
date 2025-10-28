# 🚀 Quick Start Guide

Welcome! This guide will help you get your portfolio website running in under 5 minutes.

## Prerequisites Check

Before starting, make sure you have:
- ✅ Node.js 18 or higher installed
- ✅ A code editor (VS Code recommended)
- ✅ Terminal/PowerShell access

Check your Node version:
```powershell
node --version
```

If you see v18.x.x or higher, you're good to go!

## Step 1: Install Dependencies (Already Done!)

Dependencies are already installed. If you need to reinstall:
```powershell
npm install
```

## Step 2: Start Development Server

Run this command in PowerShell:
```powershell
npm run dev
```

You should see:
```
- ready started server on 0.0.0.0:3000
- Local: http://localhost:3000
```

## Step 3: View Your Portfolio

Open your browser and go to:
**http://localhost:3000**

🎉 Your portfolio should now be running!

## Making Changes

All components are in the `components/` folder. Edit them to customize:

### Update Your Name & Info
**File**: `components/Hero.tsx`
```typescript
// Change these lines:
<h1>Your Name Here</h1>
<p>Your Title | Your Role</p>
```

### Update Experience
**File**: `components/ProfessionalJourney.tsx`
- Edit the `experiences` array at the top
- Add/remove jobs, update dates, descriptions

### Update Skills
**File**: `components/TechnicalSkills.tsx`
- Edit the `skillCategories` array
- Add/remove technologies

### Update Projects
**File**: `components/FeaturedProjects.tsx`
- Edit the `projects` array
- Add project descriptions, links, tech stacks

### Update Education
**File**: `components/AcademicBackground.tsx`
- Edit the `education` array

### Update Awards
**File**: `components/Recognitions.tsx`
- Edit the `recognitions` array

### Update Contact Info
**File**: `components/Contact.tsx`
- Update email, phone, social links

## Hot Reload

The dev server has **hot reload** - any changes you save will automatically appear in the browser! No need to refresh.

## Build for Production

When you're ready to deploy:
```powershell
npm run build
```

This creates an optimized production build.

Test the production build locally:
```powershell
npm start
```

## Next Steps

1. **Customize Content** - Update all sections with your information
2. **Test Responsiveness** - Check on mobile, tablet, desktop
3. **Deploy** - Follow `DEPLOYMENT.md` to deploy on Vercel

## Common Issues & Solutions

### Port 3000 already in use
```powershell
# Kill the process or use a different port
npm run dev -- -p 3001
```

### Changes not showing
- Make sure you saved the file (Ctrl+S)
- Check terminal for errors
- Try refreshing browser (Ctrl+R)

### Build errors
```powershell
# Clean install
rm -r node_modules
rm package-lock.json
npm install
```

## Project Structure

```
Portfolio2/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main page (imports all components)
│   ├── layout.tsx         # Root layout with metadata
│   └── globals.css        # Global styles
├── components/            # All React components
│   ├── Hero.tsx
│   ├── ProfessionalJourney.tsx
│   ├── TechnicalSkills.tsx
│   ├── FeaturedProjects.tsx
│   ├── AcademicBackground.tsx
│   ├── Recognitions.tsx
│   └── Contact.tsx
├── public/                # Static files (images, etc.)
├── package.json           # Dependencies
└── README.md             # Documentation
```

## Keyboard Shortcuts (VS Code)

- `Ctrl + P` - Quick file open
- `Ctrl + Shift + F` - Search across all files
- `Ctrl + /` - Toggle comment
- `Ctrl + S` - Save file
- `F5` - Start debugging

## Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **React Icons**: https://react-icons.github.io/react-icons/

## Need Help?

- Check `README.md` for detailed documentation
- Check `DEPLOYMENT.md` for deployment guide
- Search error messages on Google/Stack Overflow
- Next.js has excellent documentation

---

Happy coding! 🚀 Your portfolio looks amazing!
