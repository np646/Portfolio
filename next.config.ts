import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "freeimagebank.club",
        port: "",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
