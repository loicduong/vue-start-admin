<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code3 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#fixed-position" />
      Fixed position
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      The affix component provides two fixed positions: <code>top</code> and
      <code>bottom</code>.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElAffix position="bottom" :offset="20">
        <ElButton type="primary">
          Offset bottom 20px
        </ElButton>
      </ElAffix>

      <CodeHighlighter lang="html">
        {{ code3 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
