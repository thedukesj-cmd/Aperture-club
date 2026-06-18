/** @type {import('next').NextConfig} */
const nextConfig = {
  // ─── Static Export for Cloudflare Pages / Netlify ─────────────────────────
  // Uncomment the lines below when building for static deployment:
  // output: 'export',
  // trailingSlash: true,

  images: {
    // When using `output: 'export'`, uncomment the line below:
    // unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'source.unsplash.com' },
    ],
  },

  // Ensure content directory files are included in the build
  experimental: {
    // outputFileTracingIncludes: { "/**": ["./content/**"] },
  },
}

module.exports = nextConfig
