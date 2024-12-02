/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/, // Match SVG files
        use: ['@svgr/webpack'], // Use SVGR loader
      });
      return config; // Return the updated configuration
    },
  };
  
  export default nextConfig;