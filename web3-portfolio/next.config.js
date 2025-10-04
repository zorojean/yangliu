/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['ipfs.io', 'gateway.pinata.cloud'],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enable static export for IPFS deployment
  trailingSlash: true, // Required for static hosting
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
