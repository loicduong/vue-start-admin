<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIBasicUsage from '@/view/pages/resources/documentation/element-ui/data/empty/BasicUsage.vue'
import EUIBottomContent from '@/view/pages/resources/documentation/element-ui/data/empty/BottomContent.vue'
import EUICustomImage from '@/view/pages/resources/documentation/element-ui/data/empty/CustomImage.vue'
import EUIImageSize from '@/view/pages/resources/documentation/element-ui/data/empty/ImageSize.vue'

setCurrentPageTitle('Empty')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#empty" />
      Empty
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Placeholder hints for empty states.
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasicUsage />
  <EUICustomImage />
  <EUIImageSize />
  <EUIBottomContent />
</template>
