<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code5 } from './data'

const percentage = ref(10)
const colors = ref([
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
])

function increase() {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}

function decrease() {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
  }
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#dashboard-progress-bar" />
      Dashboard progress bar
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      You also can specify <code>type</code> attribute to
      <code>dashboard</code> to use dashboard progress bar.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElProgress type="dashboard" :percentage="percentage" :color="colors" />
      <div>
        <ElButtonGroup>
          <ElButton icon="el-icon-minus" @click="decrease" />
          <ElButton icon="el-icon-plus" @click="increase" />
        </ElButtonGroup>
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code5
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
