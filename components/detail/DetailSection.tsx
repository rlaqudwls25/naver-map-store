import React, { useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import styles from '../../styles/detail.module.scss'
import useSWR from 'swr'
import { CURRENT_STORE_KEY } from '@/hooks/useCurrentStore'
import DetailContents from './DetailContents'
import DetailHeader from './DetailHeader'

const DetailSection = () => {
  const { data: targetStore } = useSWR(CURRENT_STORE_KEY)

  const [toggle, setToggle] = useState(false)

  const onToggleArrowButton = () => {
    setToggle((prev) => !prev)
  }

  return (
    <div
      className={`${styles.detailContainer} ${
        targetStore ? styles.selected : ''
      } ${toggle ? styles.toggle : ''}`}
    >
      <DetailHeader
        targetStore={targetStore}
        toggle={toggle}
        onToggleArrowButton={onToggleArrowButton}
      />
      <DetailContents targetStore={targetStore} toggle={toggle} />
    </div>
  )
}

export default DetailSection
