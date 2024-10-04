<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
</script>

<template>
  <!-- begin::Section -->
  <div class="pt-10">
    <!-- begin::Heading -->
    <h1 id="styles" class="anchor fw-bolder mb-5">
      <a href="#styles" />
      Styles
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Add <code>.separator-dotted</code> and
      <code>.separator-dashed</code> classes to change a separator's border
      style:
    </div>
    <!-- end::Block -->

    <!-- begin::Block -->
    <div class="py-5">
      <div class="rounded border p-10">
        <div class="separator separator-dotted border-dark my-10" />

        <div class="separator separator-dashed border-dark my-10" />
      </div>
    </div>
    <!-- end::Block -->

    <!-- begin::Code -->
    <div class="py-5">
      <CodeHighlighter lang="html">
        {{ `
        <div class="separator separator-dotted border-dark my-10"></div>
        <div class="separator separator-dashed border-dark my-10"></div>
        ` }}
      </CodeHighlighter>
    </div>
    <!-- end::Code -->
  </div>
  <!-- end::Section -->
</template>
