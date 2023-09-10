import axios, { Axios } from 'axios'

const clientAxios: Axios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default clientAxios
