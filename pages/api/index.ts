import axios, { Axios } from 'axios'

const clientAxios: Axios = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default clientAxios
