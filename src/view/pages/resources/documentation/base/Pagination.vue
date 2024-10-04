<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import BasicExamples from '@/view/pages/resources/documentation/base/pagination/BasicExamples.vue'
import Overview from '@/view/pages/resources/documentation/base/pagination/Overview.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Pagination')
})
</script>

<template>
  <!-- begin::Card -->
  <div class="card">
    <!-- begin::Card Body -->
    <div class="card-body p-10 p-lg-15">
      <Overview />

      <BasicExamples />
    </div>
    <!-- end::Card Body -->
  </div>
  <!-- end::Card -->
</template>
