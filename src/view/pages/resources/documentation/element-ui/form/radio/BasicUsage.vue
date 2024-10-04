<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code1 } from './data'

const radio = ref('1')
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
      Radio should not have too many options. Otherwise, use the Select
      component instead.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElRadio v-model="radio" label="1">
        Option A
      </ElRadio>
      <ElRadio v-model="radio" label="2">
        Option B
      </ElRadio>

      <CodeHighlighter lang="html">
        {{ code1 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
