export default {
  titleTemplate: '%s - 매장 서비스',
  openGraph: {
    type: 'website',
    site_name: '매장 서비스 이용하기',
    images: [
      {
        url: 'https://naver-map.vercel.app/images/gom.png',
        width: 400,
        height: 400,
        type: 'image/png',
      },
    ],

    additionalLinkTags: [
      {
        rel: 'icon',
        href: './public/favicon.ico',
      },
    ],
  },
}
