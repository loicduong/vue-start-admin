<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code4 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#circular-progress-bar" />
      Circular progress bar
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElProgress type="circle" :percentage="0" />
      <ElProgress type="circle" :percentage="25" />
      <ElProgress type="circle" :percentage="100" status="success" />
      <ElProgress type="circle" :percentage="70" status="warning" />
      <ElProgress type="circle" :percentage="50" status="exception" />

      <CodeHighlighter lang="html">
        {{ code4 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
