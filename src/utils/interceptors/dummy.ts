import axios from 'axios'
import Snackbar from '@/helpers/snackbar'

const axiosConfig = {
  baseURL: 'https://dummyjson.com'
}

const instance = axios.create(axiosConfig)

instance.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    const text: string = error.response.data.message
    const color: string = 'red'
    Snackbar.show({
      text,
      color
    })
    return Promise.reject(error)
  }
)

export default instance
