/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'cloudinary',
    domains: ['res.cloudinary.com'],
  },
  webpack: (config) => {
    // unset client side js that only works server-side
    config.resolve.fallback = { fs: false, module: false };

    return config;
  },
};
