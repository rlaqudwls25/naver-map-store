import React, { Fragment, useEffect } from 'react'
import MapSection from '../components/map/MapSection'
import { StoreInfo } from '../types/store'
import useStores from '../hooks/useStore'
import HomeHeader from '../components/home/HomeHeader'
import DetailSection from '../components/detail/DetailSection'
import { NextSeo } from 'next-seo'
import { NextPage } from 'next'

interface Props {
  stores: StoreInfo[]
}

const Home: NextPage<Props> = ({ stores }: Props) => {
  const { initializeStores } = useStores()

  useEffect(() => {
    initializeStores(stores)
  }, [initializeStores, stores])

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
  // const stores = (await import('../public/stores.json')).default

  const stores = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/stores`
  ).then((response) => response.json())

  return {
    props: { stores },
    revalidate: 60 * 60,
  }
}
