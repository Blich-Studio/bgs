import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["placehold.co"],
  },
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"], // 👈 HERE
  }
};

export default nextConfig;
