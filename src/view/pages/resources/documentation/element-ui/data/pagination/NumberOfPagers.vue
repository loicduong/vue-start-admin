<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code2 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#number-of-pagers" />
      Number of pagers
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElPagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000" />

      <CodeHighlighter lang="html">
        {{ code2 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
