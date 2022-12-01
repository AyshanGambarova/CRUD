import axios from 'axios'
import $http from '@/utils/interceptors/dummy'
// Components
import {defineComponent, onMounted, ref} from 'vue'

export default defineComponent({
  name: 'PageProducts',
  setup() {
    // #region States

    let products = ref<any>([])
    let files = ref<any>([])
    let loading = ref<boolean>(false)
    let skip = ref<number>(0)
    let limit = ref<number>(10)
    let total = ref<number>(0)

    // #endregion

    // #region Methods

    async function triggerProducts(skipNumber: number, limitNumber: number) {
      loading.value = true
      const response = await $http({
        method: 'GET',
        url: `/products`,
        params: {
          skip: skipNumber,
          limit: limitNumber
        }
      })
      skip.value = skipNumber + limitNumber
      loading.value = false
      products.value = [...products.value, ...response.data.products]
    }

    async function getProducts(event: any) {
      try {
        let {scrollTop, clientHeight, scrollHeight} = event.target
        if (!loading.value && skip.value != total.value && scrollTop + clientHeight >= (scrollHeight * 4) / 5) {
          triggerProducts(skip.value, limit.value)
        }
      } catch (error) {
        console.log(error)
      }
    }

    async function uploadFile() {
      console.log(files.value[0])

      let formData = new FormData()
      // // for (let file of files.value) {
      // //   formData.append('files', file)
      // // }
      formData.append("image", files.value[0],files.value[0].name)
      try {
        const response = await $http({
          method: 'POST',
          data: formData,
          headers: {
            'X-RapidAPI-Key': '0fcae272dcmsh7609609804578bep1d3701jsnc7f90dcab787',
            'X-RapidAPI-Host': 'image-api4.p.rapidapi.com',
          },
          url: `https://image-api4.p.rapidapi.com/image/process/convert_to_webp`
        })
      } catch (error) {
        console.log(error)
      }
    }
    function reserve() {
      loading.value = true
      setTimeout(() => (loading.value = false), 2000)
    }
    // #endregion

    // #region Hooks
    onMounted(() => {
      triggerProducts(skip.value, limit.value)
    })

    // #endregion
    return {
      products,
      loading,
      getProducts,
      files,
      uploadFile
    }
  }
})
