<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code2 } from './data'

const color = ref('rgba(19, 206, 102, 0.8)')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#alpha" />
      Alpha
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElColorPicker v-model="color" show-alpha />

      <CodeHighlighter lang="html">
        {{ code2 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
