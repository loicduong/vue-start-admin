<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code6 } from './data'

const value = ref('')

const defaultTime = ref([
  new Date(2000, 1, 1, 0, 0, 0),
  new Date(2000, 2, 1, 23, 59, 59),
]) // '00:00:00', '23:59:59'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#default-time-for-start-date-and-end-date" />
      Default time for start date and end date
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      When picking a date range, you can assign the time part for start date and
      end date.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <div class="block">
        <p>Component value：{{ value }}</p>
        <ElDatePicker
          v-model="value"
          type="daterange"
          start-placeholder="Start date"
          end-placeholder="End date"
          :default-time="defaultTime"
        />
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code6
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
