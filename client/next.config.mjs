/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Empty turbopack config to silence the warning
  turbopack: {},
  // Disable image optimization for development
  images: {
    unoptimized: true,
  },
  // Output standalone for production builds
  output: "standalone",
};

export default nextConfig;
