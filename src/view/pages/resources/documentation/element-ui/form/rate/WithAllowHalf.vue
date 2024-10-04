<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code2 } from './data'

const value = ref(null)
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#with-allow-half" />
      With allow-half
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <div class="block">
        <ElRate v-model="value" allow-half />
      </div>

      <CodeHighlighter lang="html">
        {{ code2 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
