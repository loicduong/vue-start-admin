<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code3 } from '@/view/pages/resources/documentation/element-ui/basic/link/code'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#underline" />
      Underline
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Underline of link
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <div>
        <ElLink :underline="false">
          Without Underline
        </ElLink>
        <ElLink>With Underline</ElLink>
      </div>

      <CodeHighlighter lang="html">
        {{ code3 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
