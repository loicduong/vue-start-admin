<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'

const colors = ['primary', 'success', 'info', 'warning', 'danger', 'dark']
</script>

<template>
  <!-- begin::Section -->
  <div class="py-10">
    <!-- begin::Heading -->
    <h1 id="light-style" class="anchor fw-bolder mb-5">
      <a href="#light-style" />
      Light Style
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Use <code>.btn-light-{color}</code> class to set a button's light style
      defined with <code>$theme-light-colors</code> map in
      <code>src/sass/_variables.scss</code>:
    </div>
    <!-- end::Block -->

    <!-- begin::Block -->
    <div class="py-5">
      <div class="rounded border p-10">
        <template v-for="(item, i) in colors" :key="i">
          <a href="#" :class="`btn-light-${item}`" class="btn me-2 mb-2">{{
            item
          }}</a>
        </template>
      </div>
    </div>
    <!-- end::Block -->

    <!-- begin::Code -->
    <div class="py-5">
      <CodeHighlighter lang="html">
        {{ `<a href="#" class="btn btn-light-primary">primary</a>
        <a href="#" class="btn btn-light-success">success</a>
        <a href="#" class="btn btn-light-info">info</a>
        <a href="#" class="btn btn-light-warning">warning</a>
        <a href="#" class="btn btn-light-danger">danger</a>
        <a href="#" class="btn btn-light-dark">dark</a>` }}
      </CodeHighlighter>
    </div>
    <!-- end::Code -->
  </div>
  <!-- end::Section -->
</template>
