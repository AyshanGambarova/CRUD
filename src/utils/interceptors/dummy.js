import axios from 'axios'

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
    console.log(error.response.data[0].message)
    return Promise.reject(error)
  }
)

export default instance
