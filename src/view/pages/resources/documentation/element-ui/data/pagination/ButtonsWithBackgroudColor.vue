<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code3 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#buttons-with-background-color" />
      Buttons with background color
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElPagination background layout="prev, pager, next" :total="1000" />

      <CodeHighlighter lang="html">
        {{ code3 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
