/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ipfs.io', 'gateway.pinata.cloud'],
  },
  // Remove static export config for Vercel deployment
  // output: 'export' is only needed for static hosting
  // trailingSlash: true is not needed for Vercel
}

module.exports = nextConfig
