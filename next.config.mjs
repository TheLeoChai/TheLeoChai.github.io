// next.config.mjs
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  experimental: { scrollRestoration: true },

  // Static export-friendly settings for GitHub Pages root
  trailingSlash: true,
  images: { unoptimized: true },

  // IMPORTANT: no basePath / assetPrefix for username.github.io
  // basePath: undefined,
  // assetPrefix: undefined,
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
