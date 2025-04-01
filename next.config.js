/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  basePath: process.env.NODE_ENV === 'production' ? '/castelnau-website' : '',
  images: {
    unoptimized: process.env.NODE_ENV === 'production',
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/castelnau-website/' : '',
  // Ensure trailing slashes are handled consistently
  trailingSlash: true,
}

module.exports = nextConfig 