// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const path = require("path");

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/*": path.resolve(__dirname, "./*"),
    };

    return config;
  },
  experimental: {
    optimizePackageImports: [
      "tailwindcss",
      "mongoose",
      "react-hot-toast",
      "typescript",
    ],
  },
  images: {
    remotePatterns: [
      {
        hostname: "d3tqkqn8yl74v5.cloudfront.net",
      },
      {
        hostname: "www.kfc-ukraine.com",
      },
      {
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

module.exports = nextConfig;
