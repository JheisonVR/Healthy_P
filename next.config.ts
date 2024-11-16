import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com'
      },
      {
        protocol: 'https',
        hostname: 'images.alphacoders.com'
      },
      {
        protocol: 'https',
        hostname: 'images3.alphacoders.com'
      },
      {
        protocol: 'https',
        hostname: 'images4.alphacoders.com'
      },

    ]
  }
  /* config options here */
};

export default nextConfig;
