# 🚀 Deploy Authority Partners to Vercel

## Step 1: Create GitHub Repository

1. **Go to GitHub.com and create a new repository:**
   - Click the "+" icon → "New repository"
   - Repository name: `authority-partners`
   - Description: `Authority Partners Next.js website`
   - Make it **Public** or **Private** (your choice)
   - **DO NOT** initialize with README, .gitignore, or license
   - Click "Create repository"

## Step 2: Push Your Code

**Copy and run these commands in your terminal:**

```bash
# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR_USERNAME/authority-partners.git

# Push to GitHub
git branch -M main
git push -u origin main
```

*Replace `YOUR_USERNAME` with your actual GitHub username*

## Step 3: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)**
2. **Click "Import Project"**
3. **Connect with GitHub** (if not already connected)
4. **Find your `authority-partners` repository**
5. **Click "Import"**
6. **Configure Project:**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
7. **Click "Deploy"**

## 🎉 That's It!

Your Authority Partners website will be live at:
`https://authority-partners-YOUR_USERNAME.vercel.app`

### ⚡ Automatic Updates
Every time you push code to GitHub, Vercel will automatically redeploy your site!

### 🔗 Custom Domain
You can add your own domain (like `authoritypartners.com`) in the Vercel dashboard under "Domains".

---

**Need help?** Check that:
- Your GitHub repo is created and public/accessible
- You've pushed all the code successfully
- Vercel has permission to access your GitHub account