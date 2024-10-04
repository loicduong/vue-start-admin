<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import CardTabs from '@/view/pages/resources/documentation/base/tabs/CardTabs.vue'
import LineTabs from '@/view/pages/resources/documentation/base/tabs/LineTabs.vue'
import LineTabs2x from '@/view/pages/resources/documentation/base/tabs/LineTabs2x.vue'
import Overview from '@/view/pages/resources/documentation/base/tabs/Overview.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Tabs')
})
</script>

<template>
  <!-- begin::Card -->
  <div class="card">
    <!-- begin::Card Body -->
    <div class="card-body p-10 p-lg-15">
      <Overview />

      <LineTabs />

      <LineTabs2x />

      <CardTabs />
    </div>
    <!-- end::Card Body -->
  </div>
  <!-- end::Card -->
</template>
