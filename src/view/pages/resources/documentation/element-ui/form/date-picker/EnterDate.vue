<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code1 } from './data'

function disabledDate(time: Date) {
  return time.getTime() > Date.now()
}

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
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#enter-date" />
      Enter Date
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Basic date picker measured by 'day'.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <div class="block mb-5">
        <span class="demonstration" style="margin-right: 5px">Default</span>
        <ElDatePicker v-model="value1" type="date" placeholder="Pick a day" />
      </div>
      <div class="block">
        <span
          class="demonstration"
          style="margin-right: 5px"
        >Picker with quick options</span>
        <ElDatePicker
          v-model="value2"
          type="date"
          placeholder="Pick a day"
          :disabled-date="disabledDate"
          :shortcuts="shortcuts"
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
