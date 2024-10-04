<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code3 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#customizable-close-button" />
      Customizable close button
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Customize the close button as texts or other symbols.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElAlert
        class="mb-5"
        title="unclosable alert"
        type="success"
        :closable="false"
      />
      <ElAlert
        class="mb-5"
        title="customized close-text"
        type="info"
        close-text="Gotcha"
      />
      <ElAlert title="alert with callback" type="warning" />

      <CodeHighlighter lang="html">
        {{ code3 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
