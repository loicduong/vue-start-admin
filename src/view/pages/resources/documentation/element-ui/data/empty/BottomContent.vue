<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code4 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#button-content" />
      Bottom content
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Use the default slot to insert content at the bottom.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElEmpty>
        <ElButton type="primary">
          Button
        </ElButton>
      </ElEmpty>

      <CodeHighlighter lang="html">
        {{ code4 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
