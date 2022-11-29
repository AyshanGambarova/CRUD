import axios from 'axios'
// Components
import {defineComponent, onMounted, ref} from 'vue'

export default defineComponent({
  name: 'PageProducts',
  setup() {
    let products = ref<any>([])
    let loading = ref<boolean>(false)
    async function getProducts() {
      try {
        const response = await axios({
          method: 'GET',
          url: `https://dummyjson.com/products`
        })
        products.value=response.data.products;
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    function reserve() {
    loading.value=true
    setTimeout(() => (loading.value = false), 2000)
    }
    
    onMounted(() => {
      getProducts()
    })
    return {
      products,
      reserve,
      loading,
    }
  }
})
