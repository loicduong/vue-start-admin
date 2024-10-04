<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIBasicUsage from '@/view/pages/resources/documentation/element-ui/form/rate/BasicUsage.vue'
import EUIMoreIcons from '@/view/pages/resources/documentation/element-ui/form/rate/MoreIcons.vue'
import EUIReadOnly from '@/view/pages/resources/documentation/element-ui/form/rate/ReadOnly.vue'
import EUIWithAllowHalf from '@/view/pages/resources/documentation/element-ui/form/rate/WithAllowHalf.vue'
import EUIWithText from '@/view/pages/resources/documentation/element-ui/form/rate/WithText.vue'

setCurrentPageTitle('Rate')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#rate" />
      Rate
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Used for rating
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasicUsage />
  <EUIWithAllowHalf />
  <EUIWithText />
  <EUIMoreIcons />
  <EUIReadOnly />
</template>
