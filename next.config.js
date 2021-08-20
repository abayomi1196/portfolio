/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  future: { webpack5: true },
  webpack: (config) => {
    // unset client side js that only works server-side
    config.resolve.fallback = { fs: false, module: false };

    return config;
  },
};
