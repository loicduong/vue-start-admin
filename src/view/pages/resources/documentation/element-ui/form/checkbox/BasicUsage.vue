<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code1 } from './data'

const checked = ref(true)
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#basic-usage" />
      Basic usage
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Checkbox can be used alone to switch between two states.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <!-- `checked` should be true or false -->
      <ElCheckbox v-model="checked">
        Option
      </ElCheckbox>

      <CodeHighlighter lang="html">
        {{ code1 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
