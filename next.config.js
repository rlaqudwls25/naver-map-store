/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    // 외부 링크 도메인 허용
    domains: ['search.pstatic.net'],
  },
}

module.exports = nextConfig
