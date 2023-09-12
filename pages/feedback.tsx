import { NextSeo } from 'next-seo'
import Header from '../components/common/Header'
import React, { Fragment } from 'react'

const Feedback = () => {
  return (
    <Fragment>
      <NextSeo
        title="피드백"
        description="매장 지도 서비스에 대한 피드백"
        canonical="https://naver-map.vercel.app/feedback"
      />
      <Header />
      <main
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          touchAction: 'pinch-zoom',
        }}
      ></main>
    </Fragment>
  )
}

export default Feedback
