<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code6 } from '@/view/pages/resources/documentation/element-ui/basic/button/code'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#loading-button" />
      Loading Button
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Click the button to load data, then the button displays a loading state.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElButton type="primary" :loading="true">
        Loading
      </ElButton>

      <CodeHighlighter lang="html">
        {{ code6 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
