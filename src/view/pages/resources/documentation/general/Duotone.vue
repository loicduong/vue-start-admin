<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import IconSizes from '@/view/pages/resources/documentation/general/bootstrap-icons/IconSizes.vue'
import IconColors from '@/view/pages/resources/documentation/general/duotone/IconColors.vue'
import ImageUsage from '@/view/pages/resources/documentation/general/duotone/ImageUsage.vue'
import InlineUsage from '@/view/pages/resources/documentation/general/duotone/InlineUsage.vue'
import Overview from '@/view/pages/resources/documentation/general/duotone/Overview.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Duotone')
})
</script>

<template>
  <!-- begin::Card -->
  <div class="card">
    <!-- begin::Card Body -->
    <div class="card-body p-10 p-lg-15">
      <Overview />
      <ImageUsage />
      <InlineUsage />
      <IconColors />
      <IconSizes />
    </div>
    <!-- end::Card Body -->
  </div>
  <!-- end::Card -->
</template>
