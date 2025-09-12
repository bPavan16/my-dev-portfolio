import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    domains: ["assets.aceternity.com", 
      "github.com",
      "raw.githubusercontent.com",
      "opengraph.githubassets.com",
      "private-user-images.githubusercontent.com"
    ],
  },
  /* config options here */
};

export default nextConfig;
