# Authority Partners - Next.js Website

A modern, responsive website for Authority Partners built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Deployment Options

### Option 1: Deploy to Vercel (Recommended - Free & Fast)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy instantly:**
   ```bash
   npm run deploy
   ```
   
3. **For preview deployment:**
   ```bash
   npm run preview
   ```

**Alternative: Deploy via GitHub**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Connect your GitHub repo
4. Deploy automatically

### Option 2: Deploy to Netlify

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Deploy the `.next` folder to Netlify**
   - Drag and drop the `.next` folder to [netlify.com/drop](https://netlify.com/drop)
   - Or use Netlify CLI: `netlify deploy --prod --dir=.next`

### Option 3: Deploy to Other Platforms

- **Railway**: Connect GitHub repo at [railway.app](https://railway.app)
- **Render**: Connect GitHub repo at [render.com](https://render.com)
- **DigitalOcean App Platform**: Connect GitHub repo at [digitalocean.com](https://digitalocean.com)

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
npm run typecheck # Type checking
npm run deploy    # Deploy to Vercel
npm run preview   # Preview deployment
```

## 📁 Project Structure

```
authority-partners/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── not-found.tsx    # 404 page
│   ├── globals.css      # Global styles
│   ├── providers.tsx    # React Query provider
│   └── api/
│       └── demo/
│           └── route.ts # API endpoint
├── components/
│   └── ui/              # shadcn/ui components
├── lib/
│   └── utils.ts         # Utility functions
├── hooks/               # React hooks
├── public/              # Static assets
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json
```

## 🎨 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **React Query** for data fetching
- **Custom Authority Partners branding**
- **Responsive design**
- **SEO optimized**
- **Image optimization**

## 🔧 Technical Details

### Built With
- Next.js 14.2.15
- React 18.3.1
- TypeScript 5.9.2
- Tailwind CSS 3.4.17
- Radix UI components
- React Query 5.84.2

### Performance Features
- Server-side rendering (SSR)
- Static site generation (SSG)
- Image optimization
- Code splitting
- Font optimization

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Live Demo

After deployment, your site will be available at:
- Vercel: `https://your-project.vercel.app`
- Netlify: `https://your-project.netlify.app`
- Custom domain can be configured in platform settings

## 📄 License

Private project for Authority Partners.

---

**Need help?** 
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Vercel deployment docs](https://vercel.com/docs)
- Consult [Tailwind CSS docs](https://tailwindcss.com/docs)