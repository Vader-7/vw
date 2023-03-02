/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.notion.so', 'images.unsplash.com',
      'lh3.googleusercontent.com', 'lh4.googleusercontent.com',
      'lh5.googleusercontent.com', 'lh6.googleusercontent.com',
      's3-alpha-sig.figma.com', 's3.us-west-2.amazonaws.com'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
