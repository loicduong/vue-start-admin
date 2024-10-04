<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code5 } from '@/view/pages/resources/documentation/element-ui/basic/layout/code'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#alignment" />
      Alignment
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Use the flex layout to make flexible alignment of columns.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElRow type="flex" class="row-bg">
        <ElCol :span="6">
          <div class="grid-content bg-purple" />
        </ElCol>
        <ElCol :span="6">
          <div class="grid-content bg-purple-light" />
        </ElCol>
        <ElCol :span="6">
          <div class="grid-content bg-purple" />
        </ElCol>
      </ElRow>
      <ElRow type="flex" class="row-bg" justify="center">
        <ElCol :span="6">
          <div class="grid-content bg-purple" />
        </ElCol>
        <ElCol :span="6">
          <div class="grid-content bg-purple-light" />
        </ElCol>
        <ElCol :span="6">
          <div class="grid-content bg-purple" />
        </ElCol>
      </ElRow>
      <ElRow type="flex" class="row-bg" justify="end">
        <ElCol :span="6">
          <div class="grid-content bg-purple" />
        </ElCol>
        <ElCol :span="6">
          <div class="grid-content bg-purple-light" />
        </ElCol>
        <ElCol :span="6">
          <div class="grid-content bg-purple" />
        </ElCol>
      </ElRow>
      <ElRow type="flex" class="row-bg" justify="space-between">
        <ElCol :span="6">
          <div class="grid-content bg-purple" />
        </ElCol>
        <ElCol :span="6">
          <div class="grid-content bg-purple-light" />
        </ElCol>
        <ElCol :span="6">
          <div class="grid-content bg-purple" />
        </ElCol>
      </ElRow>
      <ElRow type="flex" class="row-bg" justify="space-around">
        <ElCol :span="6">
          <div class="grid-content bg-purple" />
        </ElCol>
        <ElCol :span="6">
          <div class="grid-content bg-purple-light" />
        </ElCol>
        <ElCol :span="6">
          <div class="grid-content bg-purple" />
        </ElCol>
      </ElRow>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code5
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
