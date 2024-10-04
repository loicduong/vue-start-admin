<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import CustomExample from '@/view/pages/resources/documentation/base/carousel/CustomExample.vue'
import Overview from '@/view/pages/resources/documentation/base/carousel/Overview.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Carousel')
})
</script>

<template>
  <!-- begin::Card -->
  <div class="card">
    <!-- begin::Card Body -->
    <div class="card-body p-10 p-lg-15">
      <Overview />

      <CustomExample />
    </div>
    <!-- end::Card Body -->
  </div>
  <!-- end::Card -->
</template>
