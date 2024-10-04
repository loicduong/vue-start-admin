<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code3 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#customizations" />
      Customizations
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Displays text content other than numbers.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElBadge value="new" class="item">
        <ElButton size="small">
          comments
        </ElButton>
      </ElBadge>
      <ElBadge value="hot" class="item">
        <ElButton size="small">
          replies
        </ElButton>
      </ElBadge>

      <CodeHighlighter lang="html">
        {{ code3 }}
      </CodeHighlighter>
    </div>
  </div>
</template>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
