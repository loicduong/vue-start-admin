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

    <div class="rounded border p-10">
      <ElBreadcrumb separator="/">
        <ElBreadcrumbItem :to="{ path: '/' }">
          homepage
        </ElBreadcrumbItem>
        <ElBreadcrumbItem>
          <a href="/">promotion management</a>
        </ElBreadcrumbItem>
        <ElBreadcrumbItem>promotion list</ElBreadcrumbItem>
        <ElBreadcrumbItem>promotion detail</ElBreadcrumbItem>
      </ElBreadcrumb>

      <CodeHighlighter lang="html">
        {{ code1 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
