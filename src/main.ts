import { createGlobalComponents } from '@/core/components/components'
import { createPinia } from 'pinia'

import { createApp } from 'vue'

import App from './App.vue'
/*
TIP: To get started with clean router change path to @/router/clean.ts.
 */
import router from '@/router'

import ElementPlus from 'element-plus'
// imports for app initialization
import MockService from '@/core/mock/MockService'
import { initApexCharts } from '@/core/plugins/apexcharts'
import { initInlineSvg } from '@/core/plugins/inline-svg'
import { initVeeValidate } from '@/core/plugins/vee-validate'
import ApiService from '@/core/services/ApiService'
import LayoutService from '@/core/services/LayoutService'

import '@/core/plugins/bootstrap'
import '@/core/plugins/keenthemes'
import '@/core/plugins/prismjs'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

createGlobalComponents(app)
initApexCharts(app)
initInlineSvg(app)
initVeeValidate()

ApiService.init(app)
LayoutService.init()
MockService.init(app)

app.mount('#app')
