<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code1 } from './data'
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
      Alert components are non-overlay elements in the page that does not
      disappear automatically.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElAlert class="mb-5" title="success alert" type="success" />
      <ElAlert class="mb-5" title="info alert" type="info" />
      <ElAlert class="mb-5" title="warning alert" type="warning" />
      <ElAlert title="error alert" type="error" />

      <CodeHighlighter lang="html">
        {{ code1 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
