<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
</script>

<template>
  <!-- begin::Section -->
  <div class="py-10">
    <!-- begin::Heading -->
    <h1 id="basic" class="anchor fw-bolder mb-5">
      <a href="#basic" />
      Basic
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Use <code>.bullet</code> in a list or navigation items as a pointer:
    </div>
    <!-- end::Block -->

    <!-- begin::Block -->
    <div class="py-5">
      <div class="rounded border p-10">
        <div class="d-flex flex-column">
          <li class="d-flex align-items-center py-2">
            <span class="bullet me-5" /> Item 1
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet me-5" /> Item 2
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet me-5" /> Item 3
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet me-5" /> Item 4
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet me-5" /> Item 5
          </li>
        </div>
      </div>
    </div>
    <!-- end::Block -->

    <!-- begin::Code -->
    <div class="py-5">
      <CodeHighlighter lang="html">
        {{ `
        <div class="separator my-10"></div>
        ` }}
      </CodeHighlighter>
    </div>
    <!-- end::Code -->
  </div>
  <!-- end::Section -->
</template>
