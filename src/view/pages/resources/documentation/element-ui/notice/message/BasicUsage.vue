<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ElMessage } from 'element-plus'
import { h } from 'vue'
import { code1 } from './data'

function open() {
  ElMessage('This is a message.')
}

function openVn() {
  ElMessage({
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#basic-usage" />
      Basic usage
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Displays at the top, and disappears after 3 seconds.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElButton :plain="true" @click="open">
        Show message
      </ElButton>
      <ElButton :plain="true" @click="openVn">
        VNode
      </ElButton>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code1
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
̰
