<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code4 } from '@/view/pages/resources/documentation/element-ui/basic/button/code'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#icon-button" />
      Icon Button
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Use icons to add more meaning to Button. You can use icon alone to save
      some space, or use it with text.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElButton type="primary" icon="el-icon-edit" />
      <ElButton type="primary" icon="el-icon-share" />
      <ElButton type="primary" icon="el-icon-delete" />
      <ElButton type="primary" icon="el-icon-search">
        Search
      </ElButton>
      <ElButton type="primary">
        Upload<i class="el-icon-upload el-icon-right" />
      </ElButton>

      <CodeHighlighter lang="html">
        {{ code4 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
