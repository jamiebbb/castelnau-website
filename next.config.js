/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static exports
  basePath: process.env.NODE_ENV === 'production' ? '/castelnau-website' : '',
  images: {
    unoptimized: true, // Required for static export
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/castelnau-website/' : '',
  // Ensure trailing slashes are handled consistently
  trailingSlash: true,
}

module.exports = nextConfig 