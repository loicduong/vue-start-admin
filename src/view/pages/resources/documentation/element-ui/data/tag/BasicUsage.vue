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
      <ElTag>Tag 1</ElTag>
      <ElTag type="success">
        Tag 2
      </ElTag>
      <ElTag type="info">
        Tag 3
      </ElTag>
      <ElTag type="warning">
        Tag 4
      </ElTag>
      <ElTag type="danger">
        Tag 5
      </ElTag>

      <CodeHighlighter lang="html">
        {{ code1 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
