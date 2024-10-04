<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code7 } from './data'

const textarea1 = ref('')

const textarea2 = ref('')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#autosize-textarea" />
      Autosize Textarea
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Setting the <code>autosize</code> prop for a textarea type of Input makes
      the height to automatically adjust based on the content. An options object
      can be provided to <code>autosize</code> to specify the minimum and
      maximum number of lines the textarea can automatically adjust.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElInput
        v-model="textarea1"
        type="textarea"
        autosize
        placeholder="Please input"
      />
      <div style="margin: 20px 0;" />
      <ElInput
        v-model="textarea2"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        placeholder="Please input"
      />

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code7
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
