import React, { Fragment, useEffect } from 'react'
import MapSection from '@/components/map/MapSection'
import { StoreInfo } from '@/types/store'
import useStores from '@/hooks/useStore'
import HomeHeader from '@/components/home/HomeHeader'
import DetailSection from '@/components/detail/DetailSection'
import { NextSeo } from 'next-seo'
import clientAxios from '../utils'

interface Props {
  stores: StoreInfo[]
}

const Home = ({ stores }: Props) => {
  const { initializeStores } = useStores()

  useEffect(() => {
    initializeStores(stores)
  }, [stores])

  return (
    <Fragment>
      <NextSeo
        title="매장 지도"
        description="매장 지도 서비스입니다."
        canonical="https://naver-map.vercel.app/"
      />
      <HomeHeader />
      <main
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <MapSection />
        <DetailSection />
      </main>
    </Fragment>
  )
}

export default Home

export const getStaticProps = async () => {
<<<<<<< HEAD
<<<<<<< HEAD
  const stores = (await import('../public/stores.json')).default
  // const { data } = await clientAxios.get('/api/stores')
=======
  // 나중에 next api routes로 불러오기로 리팩토링 예정
  const stores = (await import('../public/stores.json')).default
>>>>>>> parent of 9046d31 ([feat]: next api routes 적용)
=======
  // 나중에 next api routes로 불러오기로 리팩토링 예정
  const stores = (await import('../public/stores.json')).default
>>>>>>> parent of 9046d31 ([feat]: next api routes 적용)

  return {
    props: { stores },
    revalidate: 60 * 60,
  }
}
