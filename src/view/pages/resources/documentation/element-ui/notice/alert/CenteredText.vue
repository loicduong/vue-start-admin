<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code5 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#centered-text" />
      Centered text
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Use the <code>center</code> attribute to center the text.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElAlert
        class="mb-5"
        title="success alert"
        type="success"
        center
        show-icon
      />
      <ElAlert class="mb-5" title="info alert" type="info" center show-icon />
      <ElAlert
        class="mb-5"
        title="warning alert"
        type="warning"
        center
        show-icon
      />
      <ElAlert title="error alert" type="error" center show-icon />

      <CodeHighlighter lang="html">
        {{ code5 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
