import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vuetify/styles'
import '@/assets/style/main.css'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {loadFonts} from './plugins/webfontloader'
import {vToCapitalize} from '@/directives/vToCapitalize'
import {vToLowerCase} from '@/directives/vToLowerCase'
import {vToUpperCase} from '@/directives/vToUpperCase'

loadFonts()
const vuetify = createVuetify({
  components,
  directives
})
// @ts-ignore
const app = createApp(App)
app.use(router)
app.use(store)
app.use(vuetify)
app.directive('tocapitalize', vToCapitalize)
app.directive('tolowercase', vToLowerCase)
app.directive('touppercase', vToUpperCase)
app.mount('#app')
