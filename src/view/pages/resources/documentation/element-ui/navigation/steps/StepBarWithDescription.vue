<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code4 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#step-bar-with-description" />
      Step bar with description
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      There is description for each step.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElSteps :active="1">
        <ElStep title="Step 1" description="Some description" />
        <ElStep title="Step 2" description="Some description" />
        <ElStep title="Step 3" description="Some description" />
      </ElSteps>

      <CodeHighlighter lang="html">
        {{ code4 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
