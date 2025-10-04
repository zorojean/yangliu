# 🚀 Quick Start Guide

Get your Web3 portfolio up and running in 5 minutes!

## Prerequisites

- Node.js 18+ installed
- A code editor (VS Code recommended)
- Git (optional, for version control)

## Installation

### Option 1: Automated Setup (Recommended)

```bash
# Make the setup script executable and run it
chmod +x setup.sh
./setup.sh
```

### Option 2: Manual Setup

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local  # (if you have one) or create manually

# Start development server
npm run dev
```

## Essential Configuration

### 1. Get WalletConnect Project ID

1. Go to [WalletConnect Cloud](https://cloud.walletconnect.com/)
2. Create a new project
3. Copy your Project ID
4. Add it to `.env.local`:
   ```env
   NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id_here
   ```

### 2. Update Personal Information

Edit these files with your information:

- **Hero Section**: `src/components/hero-section.tsx`
  - Update name, description, social links
  
- **About Section**: `src/components/about-section.tsx`
  - Update bio, skills, achievements
  
- **Projects**: `src/components/projects-section.tsx`
  - Add your actual projects with real data
  
- **Contact**: `src/components/contact-section.tsx`
  - Update contact information and social links

### 3. Replace Placeholder Images

Replace placeholder image URLs with your actual images:
- Profile photo
- Project screenshots
- Blog post images

## Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

## Deployment

### Vercel (Easiest)

1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### IPFS (Decentralized)

1. Build the project:
   ```bash
   npm run build
   ```

2. Use [Fleek](https://fleek.co/) or similar service
3. Connect your GitHub repo
4. Deploy to IPFS

### Other Platforms

The app works on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Customization Tips

### Colors & Themes

Edit `tailwind.config.js` to customize:
- Brand colors
- Typography
- Spacing
- Animations

### Content Management

For easier content management, consider:
- Moving project data to JSON files
- Using a headless CMS
- Adding MDX support for blog posts

### Advanced Features

- Add dark/light mode toggle
- Implement blog with MDX
- Add project filtering
- Integrate with The Graph for live data
- Add analytics tracking

## Troubleshooting

### Common Issues

**Build fails with TypeScript errors**
- Run `npm install` to ensure all dependencies are installed
- Check that all environment variables are set

**Wallet connection not working**
- Verify WalletConnect Project ID is correct
- Check browser console for errors
- Ensure you're using a supported wallet

**Images not loading**
- Check image URLs are correct
- Verify images are accessible
- Consider using a CDN for better performance

### Getting Help

- Check the [README.md](./README.md) for detailed documentation
- Open an issue on GitHub
- Join our Discord community (if available)

## Next Steps

1. **Customize Content**: Replace all placeholder content with your real information
2. **Add Projects**: Showcase your actual Web3 projects
3. **Write Blog Posts**: Share your technical insights
4. **Deploy**: Get your portfolio live on the web
5. **Share**: Let the Web3 community know about your work!

---

**Happy building! 🎉**

Your Web3 portfolio is ready to showcase your skills and attract new opportunities in the decentralized world.
