<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import DotSeparator from '@/view/pages/resources/documentation/base/breadcrumb/DotSeparator.vue'
import LineSeparator from '@/view/pages/resources/documentation/base/breadcrumb/LineSeparator.vue'
import Overview from '@/view/pages/resources/documentation/base/breadcrumb/Overview.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Breadcrumb')
})
</script>

<template>
  <!-- begin::Card -->
  <div class="card">
    <!-- begin::Card Body -->
    <div class="card-body p-10 p-lg-15">
      <Overview />

      <LineSeparator />

      <DotSeparator />
    </div>
    <!-- end::Card Body -->
  </div>
  <!-- end::Card -->
</template>
