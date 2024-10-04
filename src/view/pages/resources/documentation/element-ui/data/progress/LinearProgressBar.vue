<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code1 } from './data'

function format(percentage: number) {
  return percentage === 100 ? 'Full' : `${percentage}%`
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#linear-progress-bar" />
      Linear progress bar
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElProgress :percentage="50" class="mb-5" />
      <ElProgress :percentage="100" :format="format" class="mb-5" />
      <ElProgress :percentage="100" status="success" class="mb-5" />
      <ElProgress :percentage="100" status="warning" class="mb-5" />
      <ElProgress :percentage="50" status="exception" />

      <CodeHighlighter lang="html">
        {{ code1 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
