/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com", // Google
      "pbs.twimg.com",             // Twitter
      "media.licdn.com"            // LinkedIn
    ],
  },
    eslint: {
        // Disable ESLint during production builds
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;
