<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code3 } from './data'

const value = ref(null)
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#with-text" />
      With text
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Using text to indicate rating score
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElRate
        v-model="value"
        :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
        show-text
      />

      <CodeHighlighter lang="html">
        {{ code3 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
