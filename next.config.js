/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Force static export
  basePath: process.env.NODE_ENV === 'production' ? '/castelnau-website' : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/castelnau-website/' : '',
  // Ensure trailing slashes are handled consistently
  trailingSlash: true,
  // Ensure public directory is copied to output
  distDir: 'out', // Changed from 'dist' to 'out' to match GitHub Actions
  // Copy public directory to output
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig; 