<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
</script>

<template>
  <!-- begin::Section -->
  <div class="py-10">
    <!-- begin::Heading -->
    <h1 id="sizes" class="anchor fw-bolder mb-5">
      <a href="#sizes" />
      Sizes
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Use <code>.separator</code> class in combination with
      <a href="https://getbootstrap.com/docs/5.0/utilities/borders/#border-width" class="fw-bold">Bootstrap Border
        Width</a>&nbsp; classes to change separator border width:
    </div>
    <!-- end::Block -->

    <!-- begin::Block -->
    <div class="py-5">
      <div class="rounded border p-10">
        <div class="separator my-10" />

        <div class="separator border-2 my-10" />

        <div class="separator border-3 my-10" />

        <div class="separator border-4 my-10" />

        <div class="separator border-5 my-10" />
      </div>
    </div>
    <!-- end::Block -->

    <!-- begin::Code -->
    <div class="py-5">
      <CodeHighlighter lang="html">
        {{ `
        <div class="separator my-10"></div>
        <div class="separator border-2 my-10"></div>
        <div class="separator border-3 my-10"></div>
        <div class="separator border-4 my-10"></div>
        <div class="separator border-5 my-10"></div>
        ` }}
      </CodeHighlighter>
    </div>
    <!-- end::Code -->
  </div>
  <!-- end::Section -->
</template>
