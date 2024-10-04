<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import IconColors from '@/view/pages/resources/documentation/general/bootstrap-icons/IconColors.vue'
import IconSizes from '@/view/pages/resources/documentation/general/bootstrap-icons/IconSizes.vue'
import Overview from '@/view/pages/resources/documentation/general/bootstrap-icons/Overview.vue'
import Usage from '@/view/pages/resources/documentation/general/bootstrap-icons/Usage.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Bootstrap Icons')
})
</script>

<template>
  <!-- begin::Card -->
  <div class="card">
    <!-- begin::Card Body -->
    <div class="card-body p-10 p-lg-15">
      <Overview />
      <Usage />
      <IconColors />
      <IconSizes />
    </div>
    <!-- end::Card Body -->
  </div>
  <!-- end::Card -->
</template>
