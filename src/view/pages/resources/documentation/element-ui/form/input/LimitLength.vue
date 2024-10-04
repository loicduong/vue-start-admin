<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code13 } from './data'

const text = ref('')

const textarea = ref('')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#limit-length" />
      Limit length
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElInput
        v-model="text"
        type="text"
        placeholder="Please input"
        maxlength="10"
        show-word-limit
      />
      <div style="margin: 20px 0;" />
      <ElInput
        v-model="textarea"
        type="textarea"
        placeholder="Please input"
        maxlength="30"
        show-word-limit
      />

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code13
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
