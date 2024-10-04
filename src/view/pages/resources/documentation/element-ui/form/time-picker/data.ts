const code1 = `<template>
  <el-time-picker
    v-model="value1"
    :disabled-hours="disabledHours"
    :disabled-minutes="disabledMinutes"
    :disabled-seconds="disabledSeconds"
    placeholder="Arbitrary time">
  </el-time-picker>
  <el-time-picker
    arrow-control
    v-model="value2"
    :disabled-hours="disabledHours"
    :disabled-minutes="disabledMinutes"
    :disabled-seconds="disabledSeconds"
    placeholder="Arbitrary time">
  </el-time-picker>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const makeRange = (start: number, end: number): number[] => {
  const result: number[] = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}

const value1 = ref(new Date(2016, 9, 10, 18, 40))
const value2 = ref(new Date(2016, 9, 10, 18, 40))

// e.g. allow 17:30:00 - 18:30:00
const disabledHours = (): number[] => {
  return makeRange(0, 16).concat(makeRange(19, 23))
}

const disabledMinutes = (hour: number): number[] | undefined => {
  if (hour === 17) {
    return makeRange(0, 29)
  }
  if (hour === 18) {
    return makeRange(31, 59)
  }
}

const disabledSeconds = (hour: number, minute: number): number[] | undefined => {
  if (hour === 18 && minute === 30) {
    return makeRange(1, 59)
  }
}
</script>`

const code2 = `<template>
  <el-time-picker
    is-range
    v-model="value1"
    range-separator="To"
    start-placeholder="Start time"
    end-placeholder="End time">
  </el-time-picker>
  <el-time-picker
    is-range
    arrow-control
    v-model="value2"
    range-separator="To"
    start-placeholder="Start time"
    end-placeholder="End time">
  </el-time-picker>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref([new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)])
const value2 = ref([new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)])
</script>`

export { code1, code2 }
