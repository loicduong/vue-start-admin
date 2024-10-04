<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code4 } from './data'

const color = ref('#409EFF')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#sizes" />
      Sizes
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElColorPicker
        v-model="color"
        style="margin-right: 5px"
      />
      <ElColorPicker
        v-model="color"
        size="medium"
        style="margin-right: 5px"
      />
      <ElColorPicker
        v-model="color"
        size="small"
        style="margin-right: 5px"
      />
      <ElColorPicker
        v-model="color"
        size="mini"
        style="margin-right: 5px"
      />

      <CodeHighlighter lang="html">
        {{ code4 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
