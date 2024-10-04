<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code4 } from './data'

const value = ref(0)
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#vertical-mode" />
      Vertical mode
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <div class="block">
        <ElSlider v-model="value" vertical height="200px" />
      </div>

      <CodeHighlighter lang="html">
        {{ code4 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
