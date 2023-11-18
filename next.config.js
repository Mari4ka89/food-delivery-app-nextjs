/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    optimizePackageImports: ["tailwindcss", "typescript"],
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
