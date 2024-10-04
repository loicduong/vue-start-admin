<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code3 } from './data'

const percentage = ref(20)
const customColor = ref('#409eff')
const customColors = ref([
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
])

function customColorMethod(per: number) {
  if (per < 30) {
    return '#909399'
  }
  else if (per < 70) {
    return '#e6a23c'
  }
  else {
    return '#67c23a'
  }
}

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
      <a href="#custom-color" />
      Custom color
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      You can use <code>color</code> attr to set the progress bar color. it
      accepts color string, function, or array.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElProgress :percentage="percentage" :color="customColor" class="mb-5" />

      <ElProgress :percentage="percentage" :color="customColorMethod" class="mb-5" />

      <ElProgress :percentage="percentage" :color="customColors" class="mb-5" />
      <div>
        <ElButtonGroup>
          <ElButton icon="el-icon-minus" @click="decrease" />
          <ElButton icon="el-icon-plus" @click="increase" />
        </ElButtonGroup>
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code3
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
