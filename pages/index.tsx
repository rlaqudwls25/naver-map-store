import Header from '@/components/Header'
import React from 'react'
import Link from 'next/link'
import styles from '../styles/header.module.scss'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { VscFeedback } from 'react-icons/vsc'

const Home = () => {
  return (
    <div>
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
    </div>
  )
}

export default Home
