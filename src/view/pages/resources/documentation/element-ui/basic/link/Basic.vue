<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code1 } from '@/view/pages/resources/documentation/element-ui/basic/link/code'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#basic" />
      Basic
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Basic text link
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <div>
        <ElLink href="https://element.eleme.io" target="_blank" rel="noopener noreferrer">
          default
        </ElLink>
        <ElLink type="primary">
          primary
        </ElLink>
        <ElLink type="success">
          success
        </ElLink>
        <ElLink type="warning">
          warning
        </ElLink>
        <ElLink type="danger">
          danger
        </ElLink>
        <ElLink type="info">
          info
        </ElLink>
      </div>

      <CodeHighlighter lang="html">
        {{ code1 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
