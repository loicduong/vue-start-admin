<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code5 } from './data'

const value1 = ref(true)

const value2 = ref(false)
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#loading" />
      Loading
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElSwitch v-model="value1" style="margin-right: 5px" loading />
      <ElSwitch v-model="value2" loading />

      <CodeHighlighter lang="html">
        {{ code5 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
