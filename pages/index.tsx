import Header from '@/components/common/Header'
import React, { Fragment } from 'react'
import Link from 'next/link'
import styles from '../styles/header.module.scss'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { VscFeedback } from 'react-icons/vsc'
import MapSection from '@/components/home/MapSection'

const Home = () => {
  return (
    <Fragment>
      <Header
        isElemnet={[
          <button
            className={styles.box}
            onClick={() => alert('복사')}
            key="button"
          >
            <AiOutlineShareAlt size={20} />
          </button>,
          <Link className={styles.box} href="/feedback" key="link">
            <VscFeedback size={20} />
          </Link>,
        ]}
      />

      <main style={{ width: '100%', height: '100%' }}>
        <MapSection />
      </main>
    </Fragment>
  )
}

export default Home
