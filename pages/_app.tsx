import type { AppProps } from 'next/app'
import '../styles/global.scss'
import { RecoilRoot } from 'recoil'
import { DefaultSeo } from 'next-seo'
import SEO from '../seo.config'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}
