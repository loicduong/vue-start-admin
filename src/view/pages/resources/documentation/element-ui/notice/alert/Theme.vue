<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code2 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#theme" />
      Theme
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Alert provide two different themes, <code>light</code> and
      <code>dark</code>.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElAlert class="mb-5" title="success alert" type="success" effect="dark" />
      <ElAlert class="mb-5" title="info alert" type="info" effect="dark" />
      <ElAlert class="mb-5" title="warning alert" type="warning" effect="dark" />
      <ElAlert title="error alert" type="error" effect="dark" />

      <CodeHighlighter lang="html">
        {{ code2 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
