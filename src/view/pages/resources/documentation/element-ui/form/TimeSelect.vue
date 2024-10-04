<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIFixedTimePicker from '@/view/pages/resources/documentation/element-ui/form/time-select/FixedTimePicker.vue'
import EUIFixedTimeRange from '@/view/pages/resources/documentation/element-ui/form/time-select/FixedTimeRange.vue'

setCurrentPageTitle('TimeSelect')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#time-select" />
      TimeSelect
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Use Time Select for time input.
    </div>
    <!-- end::Block -->
  </div>
  <EUIFixedTimePicker />
  <EUIFixedTimeRange />
</template>
