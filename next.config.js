/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  webpack: (config) => {
    // unset client side js that only works server-side
    config.resolve.fallback = { fs: false, module: false };

    // setup svgr for use
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
