<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code1 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#basic-usage" />
      Basic usage
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <div class="block">
        <span class="demonstration">When you have few pages</span>
        <ElPagination layout="prev, pager, next" :total="50" />
      </div>
      <div class="block">
        <span class="demonstration">When you have more than 7 pages</span>
        <ElPagination layout="prev, pager, next" :total="1000" />
      </div>

      <CodeHighlighter lang="html">
        {{ code1 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
