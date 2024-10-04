<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code3 } from '@/view/pages/resources/documentation/element-ui/basic/button/code'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#text-button" />
      Text Button
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Buttons without border and background.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElButton type="text">
        Text Button
      </ElButton>
      <ElButton type="text" disabled>
        Text Button
      </ElButton>

      <CodeHighlighter lang="html">
        {{ code3 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
