/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.google.com"], // Allow images from Google
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
