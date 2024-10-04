<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code1 } from './data'

const shortcuts = ref([
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: (() => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    })(),
  },
  {
    text: 'A week ago',
    value: (() => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    })(),
  },
])

const value1 = ref('')

const value2 = ref('')

const value3 = ref('')

const defaultTime = ref(new Date(2000, 1, 1, 12, 0, 0)) // '12:00:00'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#date-and-time" />
      Date and time
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <div class="block mb-5">
        <span class="demonstration" style="margin-right: 5px">Default</span>
        <ElDatePicker
          v-model="value1"
          type="datetime"
          placeholder="Select date and time"
        />
      </div>
      <div class="block mb-5">
        <span
          class="demonstration"
          style="margin-right: 5px"
        >With shortcuts</span>
        <ElDatePicker
          v-model="value2"
          type="datetime"
          placeholder="Select date and time"
          :shortcuts="shortcuts"
        />
      </div>
      <div class="block">
        <span
          class="demonstration"
          style="margin-right: 5px"
        >With default time</span>
        <ElDatePicker
          v-model="value3"
          type="datetime"
          placeholder="Select date and time"
          :default-time="defaultTime"
        />
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code1
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
