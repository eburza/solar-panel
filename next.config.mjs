/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  output: "standalone",
  images: {
    domains: ["localhost", "vercel.app"],
  },
  assetPrefix: "",
  experimental: {
    optimizeFonts: true,
    optimizeImages: true,
  },
}

export default nextConfig
