<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { code2 } from './data'

function open() {
  ElMessageBox.confirm(
    'This will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    },
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#confirm" />
      Confirm
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Confirm is used to ask users' confirmation.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElButton
        type="text"
        @click="open"
      >
        Click to open the Message Box
      </ElButton>

      <CodeHighlighter lang="html">
        {{ code2 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
