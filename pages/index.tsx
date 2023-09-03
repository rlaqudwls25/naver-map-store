import Header from '@/components/common/Header'
import React, { Fragment, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/header.module.scss'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { VscFeedback } from 'react-icons/vsc'
import MapSection from '@/components/home/MapSection'
import { StoreInfo } from '@/types/store'
import useStores from '@/hooks/useStore'
import HomeHeader from '@/components/home/HomeHeader'

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
      <HomeHeader />
      <main style={{ width: '100%', height: '100%' }}>
        <MapSection />
      </main>
    </Fragment>
  )
}

export default Home

export const getStaticProps = async () => {
  // 나중에 next api routes로 불러오기로 리팩토링 예정
  const stores = (await import('../public/stores.json')).default

  return {
    props: { stores },
    revalidate: 60 * 60,
  }
}
