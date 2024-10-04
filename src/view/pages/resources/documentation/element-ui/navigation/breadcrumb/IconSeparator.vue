<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code2 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#icon-separator" />
      Basic usage
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElBreadcrumb separator-class="el-icon-arrow-right">
        <ElBreadcrumbItem :to="{ path: '/' }">
          homepage
        </ElBreadcrumbItem>
        <ElBreadcrumbItem>promotion management</ElBreadcrumbItem>
        <ElBreadcrumbItem>promotion list</ElBreadcrumbItem>
        <ElBreadcrumbItem>promotion detail</ElBreadcrumbItem>
      </ElBreadcrumb>

      <CodeHighlighter lang="html">
        {{ code2 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
