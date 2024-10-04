<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code5 } from '@/view/pages/resources/documentation/element-ui/basic/button/code'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#button-group" />
      Button Group
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Displayed as a button group, can be used to group a series of similar
      operations.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElButtonGroup>
        <ElButton type="primary" icon="el-icon-arrow-left">
          Previous Page
        </ElButton>
        <ElButton type="primary">
          Next Page<i class="el-icon-arrow-right el-icon-right" />
        </ElButton>
      </ElButtonGroup>
      <ElButtonGroup class="group2">
        <ElButton type="primary" icon="el-icon-edit" />
        <ElButton type="primary" icon="el-icon-share" />
        <ElButton type="primary" icon="el-icon-delete" />
      </ElButtonGroup>

      <CodeHighlighter lang="html">
        {{ code5 }}
      </CodeHighlighter>
    </div>
  </div>
</template>

<style>
.group2 {
  margin-left: 10px;
}
</style>
