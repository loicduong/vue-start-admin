<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIBasicUsage from '@/view/pages/resources/documentation/element-ui/data/badge/BasicUsage.vue'
import EUICustomizations from '@/view/pages/resources/documentation/element-ui/data/badge/Customizations.vue'
import EUILittleRedDot from '@/view/pages/resources/documentation/element-ui/data/badge/LittleRedDot.vue'
import EUIMaxValue from '@/view/pages/resources/documentation/element-ui/data/badge/MaxValue.vue'

setCurrentPageTitle('Badge')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#badge" />
      Badge
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      A number or status mark on buttons and icons.
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasicUsage />
  <EUIMaxValue />
  <EUICustomizations />
  <EUILittleRedDot />
</template>
