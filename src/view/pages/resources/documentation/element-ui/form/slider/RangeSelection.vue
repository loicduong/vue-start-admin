<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code3 } from './data'

const value = ref([4, 8])
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#range-selection" />
      Range selection
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Selecting a range of values is supported.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <div class="block">
        <ElSlider v-model="value" range show-stops :max="10" />
      </div>

      <CodeHighlighter lang="html">
        {{ code3 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
