<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code3 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#animation" />
      Animation
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      We have provided a switch flag indicating whether showing the loading
      animation, called <code>animated</code> when this is true, all children of
      <code>l-skeleton</code> will show animation
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElSkeleton :rows="5" animated />

      <CodeHighlighter lang="html">
        {{ code3 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
