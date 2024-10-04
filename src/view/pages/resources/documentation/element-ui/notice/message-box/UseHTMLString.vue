<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ElMessageBox } from 'element-plus'
import { code5 } from './data'

function open() {
  ElMessageBox.alert(
    '<strong>This is <i>HTML</i> string</strong>',
    'HTML String',
    {
      dangerouslyUseHTMLString: true,
    },
  )
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#use-html-string" />
      Use HTML String
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      <code>message</code> supports HTML string.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElButton type="text" @click="open">
        Click to open Message Box
      </ElButton>

      <CodeHighlighter lang="html">
        {{ code5 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
