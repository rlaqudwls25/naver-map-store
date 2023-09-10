import { StoreInfo } from '@/types/store'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const stores = (await import('../../public/stores.json'))
      .default as StoreInfo[]

    return res.json(stores)
  } catch (error) {
    return res.json(error)
  }
}
