<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code1 } from './data'

const value1 = ref(null)

const value2 = ref(null)

const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
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
      <div class="block mb-5">
        <span class="demonstration mb-5">Default</span>
        <ElRate v-model="value1" />
      </div>
      <div class="block">
        <span class="demonstration mb-5">Color for different levels</span>
        <ElRate v-model="value2" :colors="colors" />
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code1
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
