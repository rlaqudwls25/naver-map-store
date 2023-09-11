import React, { useState } from 'react'
import styles from '../../styles/detail.module.scss'
import useSWR from 'swr'
import { CURRENT_STORE_KEY } from '../../hooks/useCurrentStore'
import DetailContents from './DetailContents'
import DetailHeader from './DetailHeader'
import copy from 'copy-to-clipboard'

const DetailSection = () => {
  const { data: targetStore } = useSWR(CURRENT_STORE_KEY)

  const [toggle, setToggle] = useState(false)

  const onToggleArrowButton = () => {
    setToggle((prev) => !prev)
  }

  const copyUrl = () => {
    copy(location.origin + '/' + targetStore.name)
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
        copyUrl={copyUrl}
      />
      <DetailContents targetStore={targetStore} toggle={toggle} />
    </div>
  )
}

export default DetailSection
