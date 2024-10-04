<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIArbitraryTimePicker from '@/view/pages/resources/documentation/element-ui/form/time-picker/ArbitraryTimePicker.vue'
import EUIArbitraryTimeRange from '@/view/pages/resources/documentation/element-ui/form/time-picker/ArbitraryTimeRange.vue'

setCurrentPageTitle('TimePicker')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#time-picker" />
      TimePicker
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Use Time Picker for time input.
    </div>
    <!-- end::Block -->
  </div>
  <EUIArbitraryTimePicker />
  <EUIArbitraryTimeRange />
</template>
