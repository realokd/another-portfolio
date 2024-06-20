/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: { domains: ['images.unsplash.com'] },
  images: { unoptimized: true },
  // assetPrefix: './'
  trailingSlash: true
};

module.exports = nextConfig;
