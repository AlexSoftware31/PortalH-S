/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
   eslint: {
    ignoreDuringBuilds: true, // Ignora errores de ESLint
  },
  typescript: {
    ignoreBuildErrors: true, // Ignora errores de TypeScript
  },
};

module.exports = nextConfig;
