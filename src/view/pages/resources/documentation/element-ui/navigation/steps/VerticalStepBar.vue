<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code6 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#vertical-step-bar" />
      Vertical step bar
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Vertical step bars.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <div style="height: 300px;">
        <ElSteps direction="vertical" :active="1">
          <ElStep title="Step 1" />
          <ElStep title="Step 2" />
          <ElStep title="Step 3" />
        </ElSteps>
      </div>

      <CodeHighlighter lang="html">
        {{ code6 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
