# Web3 Developer Portfolio

A modern, responsive portfolio website for Web3 developers built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Modern Design**: Clean, professional UI with Web3-themed styling
- 🔗 **Web3 Integration**: Built-in wallet connection with RainbowKit
- 📱 **Responsive**: Fully responsive design for all devices
- ⚡ **Performance**: Optimized with Next.js 14 and modern React patterns
- 🎨 **Customizable**: Easy to customize colors, content, and styling
- 📝 **Blog Ready**: Built-in blog section with MDX support
- 📧 **Contact Form**: Integrated contact form with Web3Forms

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Web3**: Wagmi, RainbowKit, Ethers.js
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd web3-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add:

```env
# WalletConnect Project ID (get from https://cloud.walletconnect.com)
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_walletconnect_project_id_here

# Web3Forms (for contact form)
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here

# Optional: Alchemy/Infura API keys for better RPC performance
NEXT_PUBLIC_ALCHEMY_API_KEY=your_alchemy_api_key_here
NEXT_PUBLIC_INFURA_API_KEY=your_infura_api_key_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Personal Information

Update the following files with your information:

- `src/components/hero-section.tsx` - Update name, description, and social links
- `src/components/about-section.tsx` - Update bio, skills, and achievements
- `src/components/projects-section.tsx` - Update project information
- `src/components/contact-section.tsx` - Update contact information
- `src/app/layout.tsx` - Update metadata

### Styling

- Colors and themes can be customized in `tailwind.config.js`
- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind classes

### Content

- Replace placeholder images with your own
- Update project descriptions and links
- Add your blog posts to the blog section
- Customize the contact form

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### IPFS (Decentralized)

1. Build the project:
```bash
npm run build
```

2. Use Fleek or similar service to deploy to IPFS
3. Point your ENS domain to the IPFS hash

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Project Structure

```
src/
├── app/                 # Next.js app router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── projects-section.tsx
│   ├── blog-section.tsx
│   ├── contact-section.tsx
│   ├── navigation.tsx
│   ├── footer.tsx
│   └── providers.tsx
└── lib/               # Utility functions
    ├── wagmi.ts       # Web3 configuration
    └── utils.ts       # Helper functions
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you have any questions or need help customizing the portfolio, feel free to open an issue or reach out!

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Web3 integration with [Wagmi](https://wagmi.sh/) and [RainbowKit](https://rainbowkit.com/)
- Icons by [Lucide](https://lucide.dev/)
