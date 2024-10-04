<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ElNotification } from 'element-plus'
import { code2 } from './data'

function open1() {
  ElNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  })
}

function open2() {
  ElNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
  })
}

function open3() {
  ElNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
  })
}

function open4() {
  ElNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
  })
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#with-types" />
      With types
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      We provide four types: success, warning, info and error.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElButton plain @click="open1">
        Success
      </ElButton>
      <ElButton plain @click="open2">
        Warning
      </ElButton>
      <ElButton plain @click="open3">
        Info
      </ElButton>
      <ElButton plain @click="open4">
        Error
      </ElButton>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code2
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
