<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
</script>

<template>
  <!-- begin::Section -->
  <div class="py-10">
    <!-- begin::Heading -->
    <h1 id="usage" class="anchor fw-bolder mb-3">
      <a href="#usage" />
      Usage
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Use Font Awesome icons with spesific class as explained in the
      <a
        class="fw-bold"
        href="https://fontawesome.com/icons/affiliatetheme?style=brands"
        target="_blank"
        rel="noopener noreferrer"
      >Icon Preview Page</a>:
    </div>
    <!-- end::Block -->

    <!-- begin::Block -->
    <div class="py-5">
      <div class="rounded border d-flex flex-wrap p-10">
        <i class="fas fa-envelope-open-text fs-2x me-15" />
        <i class="fab fa-affiliatetheme fs-2x me-15" />
        <i class="fas fa-mail-bulk fs-2x me-15" />
        <i class="fas fa-coins fs-2x me-15" />
        <i class="fas fa-chart-pie fs-2x me-15" />
        <i class="fas fa-percentage fs-2x me-15" />
        <i class="fas fa-print fs-2x me-15" />
        <i class="fas fa-pen-nib fs-2x me-15" />
      </div>
    </div>
    <!-- end::Block -->

    <!-- begin::Code -->
    <div class="py-5">
      <CodeHighlighter lang="html">
        {{ `<i class="fas fa-envelope-open-text fs-2x me-15"></i>
        <i class="fab fa-affiliatetheme fs-2x me-15"></i>
        <i class="fas fa-mail-bulk fs-2x me-15"></i>
        <i class="fas fa-coins fs-2x me-15"></i>
        <i class="fas fa-chart-pie fs-2x me-15"></i>
        <i class="fas fa-percentage fs-2x me-15"></i>
        <i class="fas fa-print fs-2x me-15"></i>
        <i class="fas fa-pen-nib fs-2x me-15"></i>` }}
      </CodeHighlighter>
    </div>
    <!-- end::Code -->
  </div>
  <!-- end::Section -->
</template>
