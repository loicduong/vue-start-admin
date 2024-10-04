<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code2 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#configurable-rows" />
      Configurable Rows
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      You can configure the row numbers yourself, for more precise rendering
      effect, the actual rendered row number will always be 1 row more than the
      given number, that is because we are rendering a title row with 33% width
      of the others.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElSkeleton :rows="5" />

      <CodeHighlighter lang="html">
        {{ code2 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
