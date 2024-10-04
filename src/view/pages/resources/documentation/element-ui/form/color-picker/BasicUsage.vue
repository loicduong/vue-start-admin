<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code1 } from './data'

const color1 = ref('#409EFF')
const color2 = ref(null)
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
      <div class="block">
        <span
          class="demonstration"
          style="margin-right: 5px"
        >With default value</span>
        <ElColorPicker v-model="color1" />
      </div>
      <div class="block">
        <span
          class="demonstration"
          style="margin-right: 5px"
        >With no default value</span>
        <ElColorPicker v-model="color2" />
      </div>

      <CodeHighlighter lang="html">
        {{ code1 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
