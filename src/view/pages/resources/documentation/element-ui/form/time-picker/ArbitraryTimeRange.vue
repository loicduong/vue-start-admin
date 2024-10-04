<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code2 } from './data'

const value1 = ref([new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)])
const value2 = ref([new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)])
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#arbitrary-time-range" />
      Arbitrary time range
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Can pick an arbitrary time range.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElTimePicker
        v-model="value1"
        style="margin-right: 5px"
        is-range
        range-separator="To"
        start-placeholder="Start time"
        end-placeholder="End time"
      />
      <ElTimePicker
        v-model="value2"
        is-range
        arrow-control
        range-separator="To"
        start-placeholder="Start time"
        end-placeholder="End time"
      />

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code2
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>

<style>
.el-date-editor .el-range-separator {
  width: 10% !important;
}
</style>
