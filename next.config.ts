import type { NextConfig } from "next";

const isStaticExport =
  process.env.NEXT_OUTPUT === "export" || process.env.BUILD_TARGET === "static";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: 'export', pageExtensions: ['tsx', 'jsx'] } : {}),
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  // Permite orígenes locales en desarrollo para evitar el warning de cross‑origin a /_next/*
  allowedDevOrigins: ['localhost', '127.0.0.1', '172.29.240.1', '0.0.0.0'],
  experimental: {
    serverActions: {
      bodySizeLimit: '20mb',
    },
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'deploy-pos-nestjs.onrender.com'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  },
};

export default nextConfig;
