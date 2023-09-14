import { NextSeo } from 'next-seo'
import Header from '../components/common/Header'
import React, { Fragment } from 'react'
import { getFeedbackList } from '../firebase/feedback'
import FeedbackSection from '../components/feedback/FeedbackSection'
import { Feedback } from '../types/feedback'

export interface IFeedbackList {
  initialFeedbackList: Feedback[]
}

const Feedback = ({ initialFeedbackList }: IFeedbackList) => {
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

      <FeedbackSection initialFeedbackList={initialFeedbackList} />
    </Fragment>
  )
}

export default Feedback

export const getServerSideProps = async () => {
  return {
    props: {
      initialFeedbackList: await getFeedbackList(),
    },
  }
}
