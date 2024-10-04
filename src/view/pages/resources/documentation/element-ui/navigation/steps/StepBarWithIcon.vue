<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code5 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#step-bar-with-icon" />
      Step bar with icon
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      A variety of custom icons can be used in the step bar.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElSteps :active="1">
        <ElStep title="Step 1" icon="el-icon-edit" />
        <ElStep title="Step 2" icon="el-icon-upload" />
        <ElStep title="Step 3" icon="el-icon-picture" />
      </ElSteps>

      <CodeHighlighter lang="html">
        {{ code5 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
