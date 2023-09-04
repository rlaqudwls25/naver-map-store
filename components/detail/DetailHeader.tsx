import React from 'react'
import styles from '../../styles/detail.module.scss'
import { IDetailProps } from '@/types/store'
import { IoIosArrowUp } from 'react-icons/io'

const DetailHeader = ({
  targetStore,
  toggle,
  onToggleArrowButton,
}: IDetailProps) => {
  return (
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
      {targetStore && <p className={styles.detailTitle}>{targetStore.name}</p>}
    </div>
  )
}

export default DetailHeader
