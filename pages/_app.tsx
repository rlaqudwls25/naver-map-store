import type { AppProps } from 'next/app'
import '../styles/global.scss'
import { RecoilRoot } from 'recoil'
import { DefaultSeo } from 'next-seo'
import SEO_OPTION from '../seo.config'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO_OPTION} />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}
