<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code2 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#step-bar-that-contains-status" />
      Step bar that contains status
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Shows the status of the step for each step.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElSteps :space="200" :active="1" finish-status="success">
        <ElStep title="Done" />
        <ElStep title="Processing" />
        <ElStep title="Step 3" />
      </ElSteps>

      <CodeHighlighter lang="html">
        {{ code2 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
