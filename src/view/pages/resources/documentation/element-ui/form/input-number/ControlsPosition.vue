<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code7 } from './data'

const num = ref(1)
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#controls-position" />
      Controls Position
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElInputNumber
        v-model="num"
        controls-position="right"
        :min="1"
        :max="10"
      />

      <CodeHighlighter lang="html">
        {{ code7 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
