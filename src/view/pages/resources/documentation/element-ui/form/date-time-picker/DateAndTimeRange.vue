<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code2 } from './data'

const shortcuts = ref([
  {
    text: 'Last week',
    value: (() => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    })(),
  },
  {
    text: 'Last month',
    value: (() => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    })(),
  },
  {
    text: 'Last 3 months',
    value: (() => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    })(),
  },
])

const value1 = ref([new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)])

const value2 = ref('')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#date-and-time-range" />
      Date and time range
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <div class="block mb-5">
        <span class="demonstration" style="margin-right: 5px">Default</span>
        <ElDatePicker
          v-model="value1"
          type="datetimerange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
        />
      </div>
      <div class="block">
        <span
          class="demonstration"
          style="margin-right: 5px"
        >With shortcuts</span>
        <ElDatePicker
          v-model="value2"
          type="datetimerange"
          :shortcuts="shortcuts"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          align="right"
        />
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code2
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
