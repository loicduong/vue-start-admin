<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import Basic from '@/view/pages/resources/documentation/base/rotate/Basic.vue'
import Overview from '@/view/pages/resources/documentation/base/rotate/Overview.vue'
import Toggle from '@/view/pages/resources/documentation/base/rotate/Toggle.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Rotate')
})
</script>

<template>
  <!-- begin::Card -->
  <div class="card">
    <!-- begin::Card Body -->
    <div class="card-body p-10 p-lg-15">
      <Overview />

      <Basic />

      <Toggle />
    </div>
    <!-- end::Card Body -->
  </div>
  <!-- end::Card -->
</template>
