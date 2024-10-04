<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ElNotification } from 'element-plus'
import { code3 } from './data'

function open1() {
  ElNotification({
    title: 'Custom Position',
    message: 'I\'m at the top right corner',
  })
}

function open2() {
  ElNotification({
    title: 'Custom Position',
    message: 'I\'m at the bottom right corner',
    position: 'bottom-right',
  })
}

function open3() {
  ElNotification({
    title: 'Custom Position',
    message: 'I\'m at the bottom left corner',
    position: 'bottom-left',
  })
}

function open4() {
  ElNotification({
    title: 'Custom Position',
    message: 'I\'m at the top left corner',
    position: 'top-left',
  })
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#custom-position" />
      Custom position
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Notification can emerge from any corner you like.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElButton plain @click="open1">
        Top Right
      </ElButton>
      <ElButton plain @click="open2">
        Bottom Right
      </ElButton>
      <ElButton plain @click="open3">
        Bottom Left
      </ElButton>
      <ElButton plain @click="open4">
        Top Left
      </ElButton>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code3
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
