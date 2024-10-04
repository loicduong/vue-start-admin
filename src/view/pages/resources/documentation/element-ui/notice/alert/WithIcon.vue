<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code4 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#with-icon" />
      With icon
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Displaying an icon improves readability.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElAlert class="mb-5" title="success alert" type="success" show-icon />
      <ElAlert class="mb-5" title="info alert" type="info" show-icon />
      <ElAlert class="mb-5" title="warning alert" type="warning" show-icon />
      <ElAlert title="error alert" type="error" show-icon />

      <CodeHighlighter lang="html">
        {{ code4 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
