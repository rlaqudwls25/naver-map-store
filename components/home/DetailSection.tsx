import React, { useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import styles from '../../styles/detail.module.scss'
import useSWR from 'swr'
import { CURRENT_STORE_KEY } from '@/hooks/useCurrentStore'

const DetailSection = () => {
  const { data: targetStore } = useSWR(CURRENT_STORE_KEY)

  const [toggle, setToggle] = useState(false)

  console.log(targetStore)

  const onToggleArrowButton = () => {
    setToggle((prev) => !prev)
  }

  return (
    <div
      className={`${styles.detailContainer} ${
        targetStore ? styles.selected : ''
      } ${toggle ? styles.toggle : ''}`}
    >
      <div className={styles.detailHeader}>
        <button
          className={`${styles.arrowButton} ${toggle ? styles.toggle : ''} ${
            targetStore ? '' : styles.disabled
          }`}
          onClick={onToggleArrowButton}
          disabled={!targetStore}
        >
          <IoIosArrowUp size={20} color="#666666" />
        </button>
        {!targetStore && (
          <p className={styles.detailTitle}>매장을 선택해주세요</p>
        )}
        {targetStore && (
          <p className={styles.detailTitle}>{targetStore.name}</p>
        )}
      </div>
    </div>
  )
}

export default DetailSection
