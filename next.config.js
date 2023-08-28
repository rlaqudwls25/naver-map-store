/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    // 외부 링크 도메인 허용
    domains: ['lecture-1.vercel.app'],
  },
}

module.exports = nextConfig
