import axios from 'axios'
import store from '@/store'
import Snackbar from '@/helpers/snackbar'

const axiosConfig = {
  baseURL: 'https://gorest.co.in/public/v2'
}

const instance = axios.create(axiosConfig)

instance.interceptors.request.use(
  function (config:any) {
    const isLoading=true;
    store.commit('spinner/SET_SPINNER', isLoading)
    const token = 'Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351'
    config.headers.Authorization = token
    // config.headers.InterceptorHeader = "token";
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    const isLoading=false;
    store.commit('spinner/SET_SPINNER', isLoading)
    const pages = response.headers['x-pagination-pages']
    const paginationOptions = {
      pages
    }
    store.commit('pagination/SET_P_O', paginationOptions)
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
