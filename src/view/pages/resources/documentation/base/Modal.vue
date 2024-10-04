<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import BasicExample from '@/view/pages/resources/documentation/base/modal/BasicExample.vue'
import FullScreen from '@/view/pages/resources/documentation/base/modal/FullScreen.vue'
import Overview from '@/view/pages/resources/documentation/base/modal/Overview.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Modal')
})
</script>

<template>
  <!-- begin::Card -->
  <div class="card">
    <!-- begin::Card Body -->
    <div class="card-body p-10 p-lg-15">
      <Overview />

      <BasicExample />

      <FullScreen />
    </div>
    <!-- end::Card Body -->
  </div>
  <!-- end::Card -->
</template>
