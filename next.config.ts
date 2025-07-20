import createNextIntlPlugin from 'next-intl/plugin';
import { createMDX } from 'fumadocs-mdx/next';
import { NextConfig } from 'next';


const withNextIntl = createNextIntlPlugin('./src/i18n.ts');
const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // fuma mdx config
  reactStrictMode: true,

  images: {
    unoptimized: true,
    // allow remote image host
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'favicon.im',
      },
      {
        protocol: 'https',
        hostname: 'preview.reve.art',
      }
    ],
    // allow remote svg image
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  experimental: {
    webpackBuildWorker: false,
    parallelServerBuildTraces: false,
    parallelServerCompiles: false,
  },

  // Ensuring outputFileTracingIncludes is a top-level property
  outputFileTracingIncludes: {
    // Ensure MDX files for the llm-content API route are included in the serverless function
    // Adjust the key if your API route path is different in the output structure
    '/api/blog/llm-content': ['./src/mdx/blog/**/*'],  
  }
};

export default withNextIntl(withMDX(nextConfig));