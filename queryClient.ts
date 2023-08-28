import { QueryClient } from '@tanstack/react-query'

export const getClient = () => {
  let client: QueryClient | null = null

  if (!client) {
    client = new QueryClient({
      defaultOptions: {
        queries: {
          cacheTime: 1000 * 60 * 60 * 24,
          staleTime: 0,
          refetchOnWindowFocus: false,
        },
      },
    })
  }
  return client
}
