import type { AppProps } from 'next/app'
import { QueryClientProvider } from '@tanstack/react-query'
import '../styles/global.scss'
import { getClient } from '../queryClient'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = getClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
