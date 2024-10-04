<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { code1 } from './data'

function open() {
  ElMessageBox.alert('This is a message', 'Title', {
    confirmButtonText: 'OK',
    callback: (action: string) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#alert" />
      Alert
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Alert components are non-overlay elements in the page that does not
      disappear automatically.
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
        {{ code1 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
