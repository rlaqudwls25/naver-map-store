/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  images: {
    // 외부 링크 도메인 허용
    domains: ['search.pstatic.net'],
  },
}

module.exports = nextConfig
