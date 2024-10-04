<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ElNotification } from 'element-plus'
import { code5 } from './data'

function open() {
  ElNotification({
    title: 'HTML String',
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#use-html-string" />
      Use HTML string
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      <code>message</code> supports HTML string.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElButton plain @click="open">
        Use HTML String
      </ElButton>

      <CodeHighlighter lang="html">
        {{ code5 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
