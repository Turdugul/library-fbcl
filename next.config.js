/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  onDemandEntries: {
    maxInactiveAge: 0, // Disable persistent caching
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config, { isServer }) => {
    config.cache = false; // Disable webpack filesystem cache
    return config;
  },
};

module.exports = nextConfig;
