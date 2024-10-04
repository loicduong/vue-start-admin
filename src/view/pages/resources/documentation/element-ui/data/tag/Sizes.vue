<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code4 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#sizes" />
      Sizes
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Besides default size, Tag component provides three additional sizes for
      you to choose among different scenarios.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElTag>Default</ElTag>
      <ElTag size="medium">
        Medium
      </ElTag>
      <ElTag size="small">
        Small
      </ElTag>
      <ElTag size="mini">
        Mini
      </ElTag>

      <CodeHighlighter lang="html">
        {{ code4 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
