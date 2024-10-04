<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
</script>

<template>
  <!-- begin::Section -->
  <div class="pt-10">
    <!-- begin::Heading -->
    <h1 id="dot-separator" class="anchor fw-bolder mb-5">
      <a href="#dot-separator" />
      Dot Separator
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Add <code>.breadcrumb-dot</code> to enable dot separator style for a
      breadcrumb.
    </div>
    <!-- end::Block -->

    <!-- begin::Block -->
    <div class="py-5">
      <div class="rounded border p-10">
        <ol class="breadcrumb breadcrumb-dot text-muted fs-5 fw-bold">
          <li class="breadcrumb-item pe-3">
            <a href="#" class="pe-3">Home</a>
          </li>
          <li class="breadcrumb-item pe-3">
            <a href="#" class="pe-3">Library</a>
          </li>
          <li class="breadcrumb-item px-3 active text-muted">
            Active
          </li>
        </ol>
      </div>
    </div>
    <!-- end::Block -->

    <!-- begin::Code -->
    <div class="py-5">
      <CodeHighlighter lang="html">
        {{ `
        <ol class="breadcrumb breadcrumb-dot text-muted fs-5 fw-bold">
          <li class="breadcrumb-item pe-3">
            <a href="#" class="pe-3">Home</a>
          </li>
          <li class="breadcrumb-item pe-3">
            <a href="#" class="pe-3">Library</a>
          </li>
          <li class="breadcrumb-item px-3 active text-muted">Active</li>
        </ol>
        ` }}
      </CodeHighlighter>
    </div>
    <!-- end::Code -->
  </div>
  <!-- end::Section -->
</template>
