<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIDateAndTime from '@/view/pages/resources/documentation/element-ui/form/date-time-picker/DateAndTime.vue'
import EUIDateAndTimeRange from '@/view/pages/resources/documentation/element-ui/form/date-time-picker/DateAndTimeRange.vue'
import EUIDefaultTimeValueForStartDateAndEndDate from '@/view/pages/resources/documentation/element-ui/form/date-time-picker/DefaultTimeValueForStartDateAndEndDate.vue'

setCurrentPageTitle('DateTimePicker')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#date-time-picker" />
      DateTimePicker
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Select date and time in one picker.
    </div>
    <!-- end::Block -->

    <div class="py-5">
      <div class="rounded py-5 px-5 bg-light-info">
        <div class="my-5">
          DateTimePicker is derived from DatePicker and TimePicker. For a more
          detailed explanation on attributes, you can refer to DatePicker and
          TimePicker.
        </div>
      </div>
    </div>
  </div>
  <EUIDateAndTime />
  <EUIDateAndTimeRange />
  <EUIDefaultTimeValueForStartDateAndEndDate />
</template>
