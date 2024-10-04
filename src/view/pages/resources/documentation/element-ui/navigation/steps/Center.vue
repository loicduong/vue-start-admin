<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code3 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#center" />
      Center
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Title and description can be centered.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElSteps :active="2" align-center>
        <ElStep title="Step 1" description="Some description" />
        <ElStep title="Step 2" description="Some description" />
        <ElStep title="Step 3" description="Some description" />
        <ElStep title="Step 4" description="Some description" />
      </ElSteps>

      <CodeHighlighter lang="html">
        {{ code3 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
