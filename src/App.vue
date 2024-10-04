<script setup lang="ts">
import { useConfigStore } from '@/store/modules/ConfigModule'
import { onMounted } from 'vue'

const configStore = useConfigStore()

onMounted(() => {
  /**
   * this is to override the layout config using saved data from localStorage
   * remove this to use config only from static config (@/core/config/layout.config.ts)
   */
  configStore.overrideLayoutConfig()
})
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import 'bootstrap-icons/font/bootstrap-icons.css';
@import 'apexcharts/dist/apexcharts.css';
@import 'quill/dist/quill.snow.css';
@import 'animate.css';
@import 'sweetalert2/dist/sweetalert2.css';
@import 'nouislider/dist/nouislider.css';
@import '@fortawesome/fontawesome-free/css/all.min.css';
@import 'socicon/css/socicon.css';
@import 'line-awesome/dist/line-awesome/css/line-awesome.css';
@import '@yaireo/tagify/dist/tagify.css';
@import 'dropzone/dist/dropzone.css';
@import '@vueform/multiselect/themes/default.css';
@import 'prism-themes/themes/prism-shades-of-purple.css';

// Main demo style scss
@import 'assets/sass/plugins';
@import 'assets/sass/style';
</style>
