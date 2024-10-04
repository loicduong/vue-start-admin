<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code1 } from './data'

const value1 = ref(new Date(2016, 9, 10, 18, 40))
const value2 = ref(new Date(2016, 9, 10, 18, 40))

function makeRange(start: number, end: number) {
  const result: number[] = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}

// e.g. allow 17:30:00 - 18:30:00
function disabledHours() {
  return makeRange(0, 16).concat(makeRange(19, 23))
}

function disabledMinutes(hour: number) {
  if (hour === 17) {
    return makeRange(0, 29)
  }
  if (hour === 18) {
    return makeRange(31, 59)
  }
}

function disabledSeconds(hour: number, minute: number) {
  if (hour === 18 && minute === 30) {
    return makeRange(1, 59)
  }
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#arbitrary-time-picker" />
      Arbitrary time picker
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Can pick an arbitrary time.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElTimePicker
        v-model="value1"
        style="margin-right: 5px"
        :disabled-hours="disabledHours"
        :disabled-minutes="disabledMinutes"
        :disabled-seconds="disabledSeconds"
        placeholder="Arbitrary time"
      />
      <ElTimePicker
        v-model="value2"
        arrow-control
        :disabled-hours="disabledHours"
        :disabled-minutes="disabledMinutes"
        :disabled-seconds="disabledSeconds"
        placeholder="Arbitrary time"
      />

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code1
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
