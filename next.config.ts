import type { NextConfig } from "next";

const githubPagesBasePath = process.env.GITHUB_PAGES_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: githubPagesBasePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
