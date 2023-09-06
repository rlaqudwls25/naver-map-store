import React from 'react'
import Header from '../common/Header'
import { AiOutlineShareAlt } from 'react-icons/ai'
import Link from 'next/link'
import { VscFeedback } from 'react-icons/vsc'
import styles from '../../styles/header.module.scss'
import useMap from '@/hooks/useMap'
import { useRouter } from 'next/router'
import copy from 'copy-to-clipboard'

const HomeHeader = () => {
  const { resetMapOptions, getMapOptions } = useMap()

  const router = useRouter()

  const replaceAndCopyUrl = () => {
    const mapOptions = getMapOptions()
    const query = `/?zoom=${mapOptions.zoom}&lat=${mapOptions.center[0]}&lng=${mapOptions.center[1]}`

    router.replace(location.origin + query)

    copy(location.origin + query)
  }

  return (
    <Header
      onClickLogo={resetMapOptions}
      isElemnet={[
        <button
          className={styles.box}
          onClick={replaceAndCopyUrl}
          key="button"
          aria-label="네이버 지도 URL 공유"
        >
          <AiOutlineShareAlt size={20} />
        </button>,
        <Link
          className={styles.box}
          href="/feedback"
          key="link"
          aria-label="피드백 페이지로 가기"
        >
          <VscFeedback size={20} />
        </Link>,
      ]}
    />
  )
}

export default HomeHeader
