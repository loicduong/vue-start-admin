<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code1 } from './data'

const active = ref(0)
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
      Simple step bar.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElSteps :active="active" finish-status="success">
        <ElStep title="Step 1" />
        <ElStep title="Step 2" />
        <ElStep title="Step 3" />
      </ElSteps>

      <CodeHighlighter lang="html">
        {{ code1 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
́
