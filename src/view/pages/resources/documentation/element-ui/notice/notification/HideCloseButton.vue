<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ElNotification } from 'element-plus'
import { code6 } from './data'

function open() {
  ElNotification({
    title: 'Info',
    message: 'This is a message without close button',
    showClose: false,
    type: 'success',
  })
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#hide-close-button" />
      It is possible to hide the close button
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      It is possible to hide the close button
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElButton plain @click="open">
        Hide close button
      </ElButton>

      <CodeHighlighter lang="html">
        {{ code6 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
