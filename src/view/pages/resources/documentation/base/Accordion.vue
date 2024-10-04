<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import AnimatedIcon from '@/view/pages/resources/documentation/base/accordion/AnimatedIcon.vue'
import BasicExample from '@/view/pages/resources/documentation/base/accordion/BasicExample.vue'
import Overview from '@/view/pages/resources/documentation/base/accordion/Overview.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Accordion')
})
</script>

<template>
  <!-- begin::Card -->
  <div class="card">
    <!-- begin::Card Body -->
    <div class="card-body p-10 p-lg-15">
      <Overview />

      <BasicExample />

      <AnimatedIcon />
    </div>
    <!-- end::Card Body -->
  </div>
  <!-- end::Card -->
</template>
