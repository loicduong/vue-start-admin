<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code4 } from '@/view/pages/resources/documentation/element-ui/basic/link/code'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#icon" />
      Icon
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Link with icon
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <div>
        <ElLink icon="el-icon-edit">
          Edit
        </ElLink>
        <ElLink>Check<i class="el-icon-view el-icon--right" /> </ElLink>
      </div>

      <CodeHighlighter lang="html">
        {{ code4 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
