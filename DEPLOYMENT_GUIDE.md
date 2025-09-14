# 🚀 Gaelscoil na bhFál Website - Deployment Guide

This guide will help you deploy your Gaelscoil website to GitHub and Vercel for stakeholder feedback.

## 📋 Prerequisites

- [ ] GitHub account
- [ ] Vercel account  
- [ ] Git installed on your machine
- [ ] Node.js and npm installed

## 🎯 Deployment Overview

1. Initialize Git repository
2. Create GitHub repository
3. Push code to GitHub
4. Deploy to Vercel
5. Test and validate

---

## Step 1: Initialize Git Repository

Navigate to your project directory and initialize Git:

```bash
cd /Users/fiachramcvicker/Documents/GitProjects/gs-website

# Initialize Git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: Gaelscoil na bhFál website with bilingual navigation and pages"
```

## Step 2: Create GitHub Repository

### Option A: Using GitHub CLI (if installed)
```bash
# Create GitHub repository
gh repo create gs-website --public --description "Gaelscoil na bhFál - Irish language school website"

# Add GitHub as remote origin
git remote add origin https://github.com/YOUR_USERNAME/gs-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Option B: Using GitHub Web Interface
1. Go to [https://github.com/new](https://github.com/new)
2. **Repository name**: `gs-website`
3. **Description**: `Gaelscoil na bhFál - Irish language school website`
4. **Visibility**: Public
5. **Do NOT** initialize with README (we already have files)
6. Click **"Create repository"**
7. Copy the repository URL and run:

```bash
# Add GitHub as remote origin (replace YOUR_USERNAME with your actual username)
git remote add origin https://github.com/YOUR_USERNAME/gs-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Deploy to Vercel
vercel

# Follow the interactive prompts:
# ? Set up and deploy "~/Documents/GitProjects/gs-website"? [Y/n] y
# ? Which scope do you want to deploy to? [Use arrows to move, type to filter]
# ? Link to existing project? [y/N] n
# ? What's your project's name? gs-website
# ? In which directory is your code located? ./
# ? Want to override the settings? [y/N] n
```

### Option B: Vercel Dashboard

1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. **Import Git Repository**: Find and select your `gs-website` repository
4. **Configure Project**:
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: Leave empty (Next.js handles this)
   - **Install Command**: `npm install` (default)
5. Click **"Deploy"**

## Step 4: Environment Configuration

If your project uses environment variables:

```bash
# In Vercel Dashboard:
# 1. Go to your project
# 2. Click "Settings" tab
# 3. Click "Environment Variables"
# 4. Add any necessary variables
```

For this project, no environment variables are currently needed.

## Step 5: Test and Validate Deployment

### Automatic Checks
- [ ] Build completes successfully
- [ ] No TypeScript errors
- [ ] No linting errors
- [ ] All routes are accessible

### Manual Testing Checklist
- [ ] **Homepage**: Bilingual navigation displays correctly
- [ ] **Classes Page**: All class pages load (/classes, /classes/[slug])
- [ ] **Events Page**: Events page loads correctly
- [ ] **Calendar Page**: Calendar functionality works
- [ ] **Contact Page**: Contact form displays properly
- [ ] **News Page**: News section loads
- [ ] **School Council**: All council pages accessible
- [ ] **Virtual Office**: Virtual office page works
- [ ] **Mobile Responsiveness**: Test on different screen sizes
- [ ] **Navigation**: All menu items work correctly

## 📊 Expected Results

After successful deployment:

### GitHub Repository
- ✅ Repository: `https://github.com/YOUR_USERNAME/gs-website`
- ✅ All source code visible and version controlled
- ✅ Commit history showing initial deployment

### Vercel Deployment
- ✅ Live URL: `https://gs-website-xxx.vercel.app` (or custom domain)
- ✅ Automatic deployments enabled
- ✅ SSL certificate automatically provisioned
- ✅ CDN distribution for fast global access

## 🔧 Troubleshooting

### Common Issues and Solutions

#### Build Failures
```bash
# If build fails due to TypeScript errors:
npm run build

# If build fails due to missing dependencies:
npm install
npm run build

# If Tailwind CSS issues:
# Check that globals.css has correct imports:
# @tailwind base;
# @tailwind components; 
# @tailwind utilities;
```

#### Git Issues
```bash
# If remote already exists:
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/gs-website.git

# If permission denied:
# Make sure you're authenticated with GitHub
# Use personal access token if needed
```

#### Vercel Deployment Issues
- Check build logs in Vercel dashboard
- Ensure package.json has correct scripts
- Verify Next.js version compatibility

## 🎉 Success Criteria

Deployment is successful when:
- [ ] GitHub repository is accessible and contains all code
- [ ] Vercel deployment completes without errors
- [ ] Live website loads at provided URL
- [ ] All main pages are functional
- [ ] Bilingual navigation works correctly
- [ ] Mobile and desktop views render properly

## 📞 Stakeholder Sharing

Once deployed, share with stakeholders:

**Repository**: `https://github.com/YOUR_USERNAME/gs-website`
**Live Preview**: `https://gs-website-xxx.vercel.app`

### Feedback Areas
- User experience and navigation
- Content accuracy (Irish/English translations)
- Visual design and branding
- Mobile responsiveness
- Missing features or content

## 🔄 Continuous Deployment

After initial setup:
- Every push to `main` branch automatically deploys to production
- Pull requests create preview deployments
- Rollbacks available through Vercel dashboard

---

## 📝 Notes

- The website uses dummy data currently - update with real content based on stakeholder feedback
- Consider setting up custom domain after stakeholder approval
- Monitor Vercel analytics for usage insights

## 🆘 Need Help?

If you encounter issues:
1. Check the specific error messages
2. Review Vercel build logs
3. Ensure all dependencies are properly installed
4. Verify Git repository status

**Contact**: Share error messages and specific issues for targeted assistance.

---

**Created by**: BMad Orchestrator & James (Dev Agent)
**Date**: 2025-09-14
**Project**: Gaelscoil na bhFál Website Deployment