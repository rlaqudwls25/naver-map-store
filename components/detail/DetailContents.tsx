import { IDetailProps } from '@/types/store'
import Image from 'next/image'
import React from 'react'
import styles from '../../styles/detail.module.scss'
import { IoLocationOutline } from 'react-icons/io5'
import { BsTelephone } from 'react-icons/bs'
import Link from 'next/link'

const DetailContents = ({ targetStore, toggle }: IDetailProps) => {
  if (!targetStore) return null

  return (
    <section className={styles.detailContentsContainer}>
      <div className={styles.storeImageBox}>
        {targetStore?.images?.map((image) => (
          <div key={image} className={styles.imageBox}>
            <Image
              src={image}
              alt="매장 사진"
              fill
              sizes="160px"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0WhFsDwADzwF2mLYSJgAAAABJRU5ErkJggg=="
              className={styles.image}
            />
          </div>
        ))}
      </div>

      {toggle && (
        <>
          <div className={styles.description}>
            <h2>설명</h2>
            <p>{targetStore.description || '정보가 없습니다.'}</p>
          </div>

          <hr className={styles.hr} />

          <div className={styles.info}>
            <h2>기본 정보</h2>
            <div className={styles.addressBox}>
              <IoLocationOutline size={20} />
              <span>{targetStore.address}</span>
            </div>

            <div className={styles.phoneBox}>
              <BsTelephone size={20} />
              <span>{targetStore.phone}</span>
            </div>

            <div className={styles.detailInfoBox}>
              <Link
                href={`https://pcmap.place.naver.com/restaurant/${targetStore.nid}/home`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span>네이버 상세 정보</span>
              </Link>
            </div>

            <hr className={styles.hr} />
          </div>

          <div className={styles.menu}>
            <h2>메뉴</h2>
            {targetStore.menus.length ? (
              <ul>
                {targetStore.menus.map((menu, index) => (
                  <li key={index}>
                    <span className={styles.menuName}>{menu.name}</span>
                    <span className={styles.menuPrice}>{menu.price}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <ul>정보가 없습니다.</ul>
            )}
          </div>
        </>
      )}
    </section>
  )
}

export default DetailContents
