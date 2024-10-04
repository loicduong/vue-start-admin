<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code4 } from './data'

const value = ref(3.7)
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#read-only" />
      Read-only
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Read-only Rate is for displaying rating score. Half star is supported.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElRate
        v-model="value"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value} points"
      />

      <CodeHighlighter lang="html">
        {{ code4 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
