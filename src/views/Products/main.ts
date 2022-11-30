import axios from 'axios'
// Components
import {defineComponent, onMounted, ref} from 'vue'

export default defineComponent({
  name: 'PageProducts',
  setup() {
    let products = ref<any>([])
    let loading = ref<boolean>(false)
    async function getProducts(event: any) {
      try {
        let {scrollTop, clientHeight, scrollHeight} = event.target
        if (!loading.value && scrollTop + clientHeight >= (scrollHeight * 4) / 5) {
          loading.value = true
          const response = await axios({
            method: 'GET',
            url: `https://dummyjson.com/products`,
            params: {
              skip: 0,
              limit: 10
            }
          })
          loading.value = false
          products.value = [...products.value, ...response.data.products]
          console.log(response)
        }
      } catch (error) {
        console.log(error)
      }
    }

    async function getProductsInit() {
      try {
        const response = await axios({
          method: 'GET',
          url: `https://dummyjson.com/products`,
          params: {
            skip: 0,
            limit: 10
          }
        })

        products.value = response.data.products
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }

    function reserve() {
      loading.value = true
      setTimeout(() => (loading.value = false), 2000)
    }

    onMounted(() => {
      getProductsInit()
    })
    return {
      products,
      reserve,
      loading,
      getProducts
    }
  }
})
