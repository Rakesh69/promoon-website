/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    remotePatterns: [],
  },
};

module.exports = {
  images: {
    domains: ["cdn-icbnj.nitrocdn.com"],
  },
  nextConfig,
};
