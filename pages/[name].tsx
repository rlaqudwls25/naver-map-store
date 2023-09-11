import DetailContents from '../components/detail/DetailContents'
import DetailHeader from '../components/detail/DetailHeader'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import styles from '../styles/detail.module.scss'
import { StoreInfo } from '../types/store'
import { useRouter } from 'next/router'
import copy from 'copy-to-clipboard'
import useCurrentStore from '../hooks/useCurrentStore'
import { NextSeo } from 'next-seo'

interface Props {
  targetStoreInfo: StoreInfo
}

const StoreDetail: NextPage<Props> = ({ targetStoreInfo }) => {
  const router = useRouter()

  const { query } = router
  const { name } = query

  const { targetStore } = useCurrentStore()

  const copyUrl = () => {
    copy(location.origin + '/' + name)
  }

  const goToMap = () => {
    targetStore(targetStoreInfo)
    router.push(
      `/?zoom=15&lat=${targetStoreInfo.coordinates[0]}&lng=${targetStoreInfo.coordinates[1]}`
    )
  }

  return (
    <>
      <NextSeo
        title={`${targetStoreInfo.name} 상세 정보`}
        defaultTitle="매장 상세 입니다."
        canonical={`https://naver-map.vercel.app/${targetStoreInfo.name}`}
      />
      <div className={`${styles.detailContainer} ${styles.toggle}`}>
        <DetailHeader
          targetStore={targetStoreInfo}
          toggle={true}
          copyUrl={copyUrl}
          onToggleArrowButton={goToMap}
        />
        <DetailContents targetStore={targetStoreInfo} toggle={true} />
      </div>
    </>
  )
}

export default StoreDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const storeInfo = (await import('../public/stores.json')).default

  const paths = storeInfo.map((info) => ({ params: { name: info.name } }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const storeInfo = (await import('../public/stores.json')).default

  const targetStoreInfo = storeInfo.find((info) => info.name === params?.name)

  return { props: { targetStoreInfo } }
}
