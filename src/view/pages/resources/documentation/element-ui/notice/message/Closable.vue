<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ElMessage } from 'element-plus'
import { code3 } from './data'

function open1() {
  ElMessage({
    showClose: true,
    message: 'This is a message.',
  })
}

function open2() {
  ElMessage({
    showClose: true,
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}

function open3() {
  ElMessage({
    showClose: true,
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}

function open4() {
  ElMessage({
    showClose: true,
    message: 'Oops, this is a error message.',
    type: 'error',
  })
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#closable" />
      Closable
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      A close button can be added.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElButton :plain="true" @click="open1">
        message
      </ElButton>
      <ElButton :plain="true" @click="open2">
        success
      </ElButton>
      <ElButton :plain="true" @click="open3">
        warning
      </ElButton>
      <ElButton :plain="true" @click="open4">
        error
      </ElButton>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code3
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
́́
