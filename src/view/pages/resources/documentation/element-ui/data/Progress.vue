<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUICircularProgressBar from '@/view/pages/resources/documentation/element-ui/data/progress/CircularProgressBar.vue'
import EUICustomColor from '@/view/pages/resources/documentation/element-ui/data/progress/CustomColor.vue'
import EUICustomizedContent from '@/view/pages/resources/documentation/element-ui/data/progress/CustomizedContent.vue'
import EUIDashboardProgressBar from '@/view/pages/resources/documentation/element-ui/data/progress/DashboardProgressBar.vue'
import EUIInternalPercentage from '@/view/pages/resources/documentation/element-ui/data/progress/InternalPercentage.vue'
import EUILinearProgressBar from '@/view/pages/resources/documentation/element-ui/data/progress/LinearProgressBar.vue'

setCurrentPageTitle('Progress')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#progress" />
      Progress
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Progress is used to show the progress of current operation, and inform the
      user the current status.
    </div>
    <!-- end::Block -->
  </div>
  <EUILinearProgressBar />
  <EUIInternalPercentage />
  <EUICustomColor />
  <EUICircularProgressBar />
  <EUIDashboardProgressBar />
  <EUICustomizedContent />
</template>
