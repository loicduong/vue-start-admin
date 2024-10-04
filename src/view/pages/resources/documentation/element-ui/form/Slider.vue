<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIBasicUsage from '@/view/pages/resources/documentation/element-ui/form/slider/BasicUsage.vue'
import EUIDiscreteValues from '@/view/pages/resources/documentation/element-ui/form/slider/DiscreteValues.vue'
import EUIRangeSelection from '@/view/pages/resources/documentation/element-ui/form/slider/RangeSelection.vue'
import EUIShowMarks from '@/view/pages/resources/documentation/element-ui/form/slider/ShowMarks.vue'
import EUISliderWithInputBox from '@/view/pages/resources/documentation/element-ui/form/slider/SliderWithInputBox.vue'
import EUIVerticalMode from '@/view/pages/resources/documentation/element-ui/form/slider/VerticalMode.vue'

setCurrentPageTitle('Slider')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#slider" />
      Slider
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Drag the slider within a fixed range.
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasicUsage />
  <EUIDiscreteValues />
  <EUISliderWithInputBox />
  <EUIRangeSelection />
  <EUIVerticalMode />
  <EUIShowMarks />
</template>
