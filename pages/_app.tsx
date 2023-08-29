import type { AppProps } from 'next/app'
import { QueryClientProvider } from '@tanstack/react-query'
import '../styles/global.scss'
import { getClient } from '../queryClient'
import { RecoilRoot, RecoilEnv } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = getClient()
  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  )
}
