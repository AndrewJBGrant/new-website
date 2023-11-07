const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://nextjs.org/docs/pages/building-your-application/optimizing/images

  // https://github.com/vercel/next.js/issues/58074
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
