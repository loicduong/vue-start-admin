<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code2 } from './data'

const value1 = ref(0)

const value2 = ref(0)
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#discrete-values" />
      Discrete values
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      The options can be discrete.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <div class="block">
        <span class="demonstration">Breakpoints not displayed</span>
        <ElSlider v-model="value1" :step="10" />
      </div>
      <div class="block">
        <span class="demonstration">Breakpoints displayed</span>
        <ElSlider v-model="value2" :step="10" show-stops />
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code2
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
