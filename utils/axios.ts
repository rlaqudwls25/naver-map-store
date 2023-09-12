import axios, { Axios } from 'axios'

const clientAxios: Axios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
})

export default clientAxios
