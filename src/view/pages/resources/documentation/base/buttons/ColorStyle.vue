<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'

const colors = ['primary', 'success', 'info', 'warning', 'danger', 'dark']
</script>

<template>
  <!-- begin::Section -->
  <div class="py-10">
    <!-- begin::Heading -->
    <h1 id="color-style" class="anchor fw-bolder mb-5">
      <a href="#color-style" />
      Color Style
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Use <code>.btn-color-{color}</code> class to set a button's text and icon
      colors only:
    </div>
    <!-- end::Block -->

    <!-- begin::Block -->
    <div class="py-5">
      <div class="rounded border p-10">
        <template v-for="(item, i) in colors" :key="i">
          <a href="#" :class="`btn-color-${item}`" class="btn btn-bg-light me-2 mb-2">{{ item }}</a>
        </template>
      </div>
    </div>
    <!-- end::Block -->

    <!-- begin::Code -->
    <div class="py-5">
      <CodeHighlighter lang="html">
        {{ `<a href="#" class="btn btn-bg-light btn-color-primary">primary</a>
        <a href="#" class="btn btn-bg-light btn-color-success">success</a>
        <a href="#" class="btn btn-bg-light btn-color-info">info</a>
        <a href="#" class="btn btn-bg-light btn-color-warning">warning</a>
        <a href="#" class="btn btn-bg-light btn-color-danger">danger</a>
        <a href="#" class="btn btn-bg-light btn-color-dark">dark</a>` }}
      </CodeHighlighter>
    </div>
    <!-- end::Code -->
  </div>
  <!-- end::Section -->
</template>
