<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#local-import" />
      Local import
    </h2>
    <!-- end::Heading -->

    <CodeHighlighter lang="html">
      import { ElNotification } from 'element-plus';
    </CodeHighlighter>

    <!-- begin::Block -->
    <div class="py-5">
      In this case you should call <code>ElNotification(options)</code>. We have
      also registered methods for different types, e.g.
      <code>ElNotification.success(options)</code>. You can call
      <code>ElNotification.closeAll()</code> to manually close all the
      instances.
    </div>
    <!-- end::Block -->
  </div>
</template>
