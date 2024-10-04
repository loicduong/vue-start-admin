<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIDateFormats from '@/view/pages/resources/documentation/element-ui/form/date-picker/DateFormats.vue'
import EUIDateRange from '@/view/pages/resources/documentation/element-ui/form/date-picker/DateRange.vue'
import EUIDefaultTimeForStartDateAndEndDate from '@/view/pages/resources/documentation/element-ui/form/date-picker/DefaultTimeForStartDateAndEndDate.vue'
import EUIDefaultValue from '@/view/pages/resources/documentation/element-ui/form/date-picker/DefaultValue.vue'
import EUIEnterDate from '@/view/pages/resources/documentation/element-ui/form/date-picker/EnterDate.vue'
import EUILocalization from '@/view/pages/resources/documentation/element-ui/form/date-picker/Localization.vue'
import EUIMonthRange from '@/view/pages/resources/documentation/element-ui/form/date-picker/MonthRange.vue'
import EUIOtherMeasurements from '@/view/pages/resources/documentation/element-ui/form/date-picker/OtherMeasurements.vue'

setCurrentPageTitle('DatePicker')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#date-picker" />
      DatePicker
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Use Date Picker for date input.
    </div>
    <!-- end::Block -->
  </div>
  <EUIEnterDate />
  <EUIOtherMeasurements />
  <EUIDateRange />
  <EUIMonthRange />
  <EUIDefaultValue />
  <EUIDateFormats />
  <EUIDefaultTimeForStartDateAndEndDate />
  <EUILocalization />
</template>
