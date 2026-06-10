import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for GitHub Pages project sites (…/DigitalPortfolio/)
  basePath: "/DigitalPortfolio",
  output: "export",
  images: { unoptimized: true },
  // Avoid picking the parent lockfile; set the tracing root explicitly.
  outputFileTracingRoot: path.join(__dirname),
  transpilePackages: ["@whatisjery/react-fluid-distortion"],
};

export default nextConfig;
