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
  output: "standalone",
  images: {
    domains: ["localhost", "vercel.app"],
    unoptimized: true,
  },
  distDir: ".next",
  generateBuildId: async () => {
    return "build"
  },
}

export default nextConfig
