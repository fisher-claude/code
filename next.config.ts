import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/code',
  assetPrefix: '/code',
  experimental: {
    optimizePackageImports: ['react-icons', 'effect', '@tanstack/react-form', 'motion']
  }
};

export default nextConfig;
