<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code7 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#with-icon-and-description" />
      With icon and description
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Alert components are non-overlay elements in the page that does not
      disappear automatically.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElAlert
        class="mb-5"
        title="success alert"
        type="success"
        description="more text description"
        show-icon
      />
      <ElAlert
        class="mb-5"
        title="info alert"
        type="info"
        description="more text description"
        show-icon
      />
      <ElAlert
        class="mb-5"
        title="warning alert"
        type="warning"
        description="more text description"
        show-icon
      />
      <ElAlert
        title="error alert"
        type="error"
        description="more text description"
        show-icon
      />

      <CodeHighlighter lang="html">
        {{ code7 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
