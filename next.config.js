/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'img.icons8.com',
      'i.pinimg.com',
      'upload.wikimedia.org',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
    ],
  },
};

module.exports = nextConfig;
