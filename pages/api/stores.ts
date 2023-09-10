import type { NextApiRequest, NextApiResponse } from 'next'
import { StoreInfo } from '../../types/store'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StoreInfo[]>
) {
  const stores = (await import('../../public/stores.json'))
    .default as StoreInfo[]

  res.status(200).json(stores)
}
