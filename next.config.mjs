/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/destination",
        destination: "/destination/moon",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
