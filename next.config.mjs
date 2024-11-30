/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/, // Match SVG files
        use: ['@svgr/webpack'], // Use SVGR loader
      });
      return config; // Return the updated configuration
    },
  };
  
  export default nextConfig;