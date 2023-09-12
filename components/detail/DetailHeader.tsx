import React from 'react'
import styles from '../../styles/detail.module.scss'
import { IDetailProps } from '../../types/store'
import { IoIosArrowUp } from 'react-icons/io'
import { AiOutlineShareAlt } from 'react-icons/ai'

const DetailHeader = ({
  targetStore,
  toggle,
  onToggleArrowButton,
  copyUrl,
}: IDetailProps) => {
  return (
    <div className={styles.detailHeader}>
      <button
        className={`${styles.arrowButton} ${toggle ? styles.toggle : ''} ${
          targetStore ? '' : styles.disabled
        }`}
        onClick={onToggleArrowButton}
        disabled={!targetStore}
        aria-label={`${toggle ? '매장 상세 열기' : '매장 상세 닫기'}`}
      >
        <IoIosArrowUp size={20} color="#666666" />
      </button>
      {!targetStore && (
        <p className={styles.detailTitle}>매장을 선택해주세요</p>
      )}
      {targetStore && (
        <div className={styles.detailTitleBox}>
          <h1 className={styles.detailTitle}>{targetStore.name}</h1>
          <button
            className={styles.detailShareButton}
            onClick={copyUrl}
            aria-label="매장 상세 URL 공유"
          >
            <AiOutlineShareAlt size={20} />
          </button>
        </div>
      )}
    </div>
  )
}

export default DetailHeader
