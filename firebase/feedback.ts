import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from 'firebase/firestore'
import { firestore } from './index'
import { Feedback } from '../types/feedback'

export const feedbackListCollection = collection(firestore, 'feedbackList')

export const getFeedbackList = async (): Promise<Feedback[]> => {
  const initialFeedbackList: Feedback[] = []

  const querySnapshot = await getDocs(
    query(feedbackListCollection, orderBy('timestamp', 'desc'), limit(22))
  )

  querySnapshot.forEach((doc: any) => {
    initialFeedbackList.push(doc.data() as Feedback)
  })

  return initialFeedbackList
}

export const addFeedback = (newFeedback: Feedback): void => {
  addDoc(feedbackListCollection, newFeedback)
}
