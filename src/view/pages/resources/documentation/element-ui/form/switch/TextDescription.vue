<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code2 } from './data'

const value1 = ref(true)

const value2 = ref(true)
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#text-description" />
      Text description
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElSwitch
        v-model="value1"
        style="margin-bottom: 5px"
        active-text="Pay by month"
        inactive-text="Pay by year"
      />
      <ElSwitch
        v-model="value2"
        style="display: block"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="Pay by month"
        inactive-text="Pay by year"
      />

      <CodeHighlighter lang="html">
        {{ code2 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
