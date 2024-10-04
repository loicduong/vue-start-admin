<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code4 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#little-red-dot" />
      Little red dot
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Use a red dot to mark content that needs to be noticed.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElBadge is-dot class="item">
        query
      </ElBadge>
      <ElBadge is-dot class="item">
        <ElButton class="share-button" icon="el-icon-share" type="primary" />
      </ElBadge>

      <CodeHighlighter lang="html">
        {{ code4 }}
      </CodeHighlighter>
    </div>
  </div>
</template>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}

.el-badge__content.is-fixed.is-dot {
  background-color: red;
}
</style>
