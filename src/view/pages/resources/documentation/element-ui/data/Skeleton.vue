<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIAnimation from '@/view/pages/resources/documentation/element-ui/data/skeleton/Animation.vue'
import EUIAvoidingRenderingBouncing from '@/view/pages/resources/documentation/element-ui/data/skeleton/AvoidingRenderingBouncing.vue'
import EUIBasicUsage from '@/view/pages/resources/documentation/element-ui/data/skeleton/BasicUsage.vue'
import EUIConfigurableRows from '@/view/pages/resources/documentation/element-ui/data/skeleton/ConfigurableRows.vue'
import EUICustomizedTemplate from '@/view/pages/resources/documentation/element-ui/data/skeleton/CustomizedTemplate.vue'
import EUILoadingState from '@/view/pages/resources/documentation/element-ui/data/skeleton/LoadingState.vue'
import EUIRenderingAListOfData from '@/view/pages/resources/documentation/element-ui/data/skeleton/RenderingAListOfData.vue'

setCurrentPageTitle('Skeleton')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#skeleton" />
      Skeleton
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      When loading data, and you need a rich experience for visual and
      interactions for your end users, you can choose <code>skeleton</code>.
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasicUsage />
  <EUIConfigurableRows />
  <EUIAnimation />
  <EUICustomizedTemplate />
  <EUILoadingState />
  <EUIRenderingAListOfData />
  <EUIAvoidingRenderingBouncing />
</template>
