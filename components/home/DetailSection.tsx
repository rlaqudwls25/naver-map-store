import React from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import styles from '../../styles/detail.module.scss'

const DetailSection = () => {
  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailHeader}>
        <button className={styles.arrowButton} disabled>
          <IoIosArrowUp size={20} color="#666666" />
        </button>
        <p className={styles.detailTitle}>매장을 선택해주세요</p>
      </div>
    </div>
  )
}

export default DetailSection
