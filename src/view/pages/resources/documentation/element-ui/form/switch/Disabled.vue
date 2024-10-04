<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code4 } from './data'

const value1 = ref(true)

const value2 = ref(false)
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#disabled" />
      Disabled
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElSwitch v-model="value1" style="margin-right: 5px" disabled />
      <ElSwitch v-model="value2" disabled />

      <CodeHighlighter lang="html">
        {{ code4 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
