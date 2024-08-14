/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: 'https://poke-deploy-backend.onrender.com/api/:slug*',
      },
    ]
  },
};

export default nextConfig;
