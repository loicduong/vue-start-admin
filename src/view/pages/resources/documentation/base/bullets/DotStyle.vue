<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
</script>

<template>
  <!-- begin::Section -->
  <div class="py-10">
    <!-- begin::Heading -->
    <h1 id="dot-style" class="anchor fw-bolder mb-5">
      <a href="#dot-style" />
      Dot Style
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Use <code>.bullet-dot</code> to apply dot style bullet:
    </div>
    <!-- end::Block -->

    <!-- begin::Block -->
    <div class="py-5">
      <div class="rounded border p-10">
        <div class="d-flex flex-column">
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-dot me-5" /> Item 1
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-dot bg-danger me-5" /> Item 2
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-dot bg-success me-5" /> Item 3
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-dot bg-info me-5" /> Item 4
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-dot bg-primary me-5" /> Item 5
          </li>
        </div>
      </div>
    </div>
    <!-- end::Block -->

    <!-- begin::Code -->
    <div class="py-5">
      <CodeHighlighter lang="html">
        {{ `
        <div class="d-flex flex-column">
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-dot me-5"></span> Item 1
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-dot bg-danger me-5"></span> Item 2
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-dot bg-success me-5"></span> Item 3
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-dot bg-info me-5"></span> Item 4
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-dot bg-primary me-5"></span> Item 5
          </li>
        </div>
        ` }}
      </CodeHighlighter>
    </div>
    <!-- end::Code -->
  </div>
  <!-- end::Section -->
</template>
