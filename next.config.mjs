/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/destination",
        destination: "/destination/moon",
        permanent: true,
      },
      {
        source: "/crew",
        destination: "/crew/douglas-hurley",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
