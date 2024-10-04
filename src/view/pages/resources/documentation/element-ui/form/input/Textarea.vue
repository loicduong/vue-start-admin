<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code6 } from './data'

const textarea = ref('')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#textarea" />
      Textarea
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Resizable for entering multiple lines of text information. Add attribute
      <code>type="textarea"</code> to change <code>input</code> into native
      <code>textarea</code>.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElInput
        v-model="textarea"
        type="textarea"
        :rows="2"
        placeholder="Please input"
      />

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code6
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
