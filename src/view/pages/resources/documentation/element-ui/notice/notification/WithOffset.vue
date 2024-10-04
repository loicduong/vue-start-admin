<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ElNotification } from 'element-plus'
import { code4 } from './data'

function open() {
  ElNotification({
    title: 'Success',
    message: 'This is a success message',
    offset: 100,
    type: 'success',
  })
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#with-offset" />
      With offset
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Customize Notification's offset from the edge of the screen.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElButton plain @click="open">
        Notification with offset
      </ElButton>

      <CodeHighlighter lang="html">
        {{ code4 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
