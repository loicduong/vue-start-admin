<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code2 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#max-value" />
      Max value
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      You can customize the max value.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElBadge :value="200" :max="99" class="item">
        <ElButton size="small">
          comments
        </ElButton>
      </ElBadge>
      <ElBadge :value="100" :max="10" class="item">
        <ElButton size="small">
          replies
        </ElButton>
      </ElBadge>

      <CodeHighlighter lang="html">
        {{ code2 }}
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
