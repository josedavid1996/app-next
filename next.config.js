/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public'
})

const nextConfig = withPWA({
  // pwa: {
  //   dest: 'public',
  //   runtimeCaching
  // },
  reactStrictMode: true,
  swcMinify: true
})

module.exports = nextConfig
