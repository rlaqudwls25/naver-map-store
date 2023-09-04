import DetailContents from '@/components/detail/DetailContents'
import DetailHeader from '@/components/detail/DetailHeader'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import styles from '../styles/detail.module.scss'
import { StoreInfo } from '@/types/store'

interface Props {
  targetStoreInfo: StoreInfo
}

const StoreDetail: NextPage<Props> = ({ targetStoreInfo }) => {
  return (
    <div className={`${styles.detailContainer} ${styles.toggle}`}>
      <DetailHeader targetStore={targetStoreInfo} toggle={true} />
      <DetailContents targetStore={targetStoreInfo} toggle={true} />
    </div>
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
