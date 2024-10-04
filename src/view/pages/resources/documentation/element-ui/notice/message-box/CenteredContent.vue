<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { code7 } from './data'

function open() {
  ElMessageBox.confirm(
    'This will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
      center: true,
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
      <a href="#centered-content" />
      Centered content
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Content of MessageBox can be centered.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElButton type="text" @click="open">
        Click to open Message Box
      </ElButton>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code7
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
