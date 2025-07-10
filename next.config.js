/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ["localhost", "https://api-pos.edl.com.la/uploads/products"],
  },
};

module.exports = nextConfig;
