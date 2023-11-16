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
