import '@testing-library/jest-dom'
import firebase from 'firebase/app'
process.env.NEXT_PUBLIC_DEV_API_URL = 'http://localhost:3000'

jest.mock('firebase/app', () => {
  return {
    getFeedbackList: jest.fn(),
    addFeedback: jest.fn(),
  }
})
