<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code1 } from './data'

const input = ref('')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#basic-usage" />
      Basic usage
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElInput v-model="input" placeholder="Please input" />

      <CodeHighlighter lang="html">
        {{ code1 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
