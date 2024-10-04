<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIBasicUsage from '@/view/pages/resources/documentation/element-ui/form/input-number/BasicUsage.vue'
import EUIControlsPosition from '@/view/pages/resources/documentation/element-ui/form/input-number/ControlsPosition.vue'
import EUIDisabled from '@/view/pages/resources/documentation/element-ui/form/input-number/Disabled.vue'
import EUIPrecision from '@/view/pages/resources/documentation/element-ui/form/input-number/Precision.vue'
import EUISize from '@/view/pages/resources/documentation/element-ui/form/input-number/Size.vue'
import EUISteps from '@/view/pages/resources/documentation/element-ui/form/input-number/Steps.vue'
import EUIStepStrictly from '@/view/pages/resources/documentation/element-ui/form/input-number/StepStrictly.vue'

setCurrentPageTitle('Input Number')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#input-number" />
      InputNumber
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Input numerical values with a customizable range.
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasicUsage />
  <EUIDisabled />
  <EUISteps />
  <EUIStepStrictly />
  <EUIPrecision />
  <EUISize />
  <EUIControlsPosition />
</template>
