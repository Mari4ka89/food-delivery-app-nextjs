// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  experimental: {
    serverActions: true,
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
