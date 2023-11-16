// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  experimental: {
    typedRoutes: true,
    optimizePackageImports: [
      "tailwindcss",
      "mongoose",
      "react-hot-toast",
      "typescript",
    ],
  },
  images: {
    domains: [
      "d3tqkqn8yl74v5.cloudfront.net",
      "www.kfc-ukraine.com",
      "cdn.sanity.io",
    ],
  },
};

module.exports = nextConfig;
