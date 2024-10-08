const code1 = `<el-time-select
  v-model="value"
  start='08:30'
  step='00:15'
  end='18:30'
  placeholder="Select time">
</el-time-select>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>`

const code2 = `<template>
  <el-time-select
    placeholder="Start time"
    v-model="startTime"
    start='08:30'
    step='00:15'
    end='18:30'
  >
  </el-time-select>
  <el-time-select
    placeholder="End time"
    v-model="endTime"
    start='08:30'
    step='00:15'
    end='18:30'
    :minTime="startTime">
  </el-time-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const startTime = ref('')
const endTime = ref('')
</script>`

export { code1, code2 }
