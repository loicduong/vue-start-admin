<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ElMessage } from 'element-plus'
import { code4 } from './data'

function openCenter() {
  ElMessage({
    message: 'Centered text',
    center: true,
  })
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#centered-text" />
      Centered text
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Use the <code>center</code> attribute to center the text.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElButton :plain="true" @click="openCenter">
        Centered text
      </ElButton>

      <CodeHighlighter lang="html">
        {{ code4 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
́
