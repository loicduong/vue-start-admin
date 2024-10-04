<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code5 } from './data'

const num = ref(1)
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#precision" />
      Precision
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElInputNumber
        v-model="num"
        :precision="2"
        :step="0.1"
        :max="10"
      />

      <CodeHighlighter lang="html">
        {{ code5 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
