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
      Use Line Awesome icons with spesific class as explained in the
      <a
        class="fw-bold"
        href="https://icons8.com/line-awesome"
        target="_blank"
        rel="noopener noreferrer"
      >Icons Preview Page</a>:
    </div>
    <!-- end::Block -->

    <!-- begin::Block -->
    <div class="py-5">
      <div class="rounded border d-flex flex-wrap p-10">
        <i class="las la-wallet fs-2x me-15" />
        <i class="las la-highlighter fs-2x me-15" />
        <i class="las la-calendar-alt fs-2x me-15" />
        <i class="las la-comments fs-2x me-15" />
        <i class="las la-file-code fs-2x me-15" />
        <i class="las la-drafting-compass fs-2x me-15" />
        <i class="las la-tags fs-2x me-15" />
        <i class="las la-tools fs-2x me-15" />
      </div>
    </div>
    <!-- end::Block -->

    <!-- begin::Code -->
    <div class="py-5">
      <CodeHighlighter lang="html">
        {{ `<i class="las la-wallet"></i>
        <i class="las la-highlighter"></i>
        <i class="las la-calendar-alt"></i>
        <i class="las la-comments"></i>
        <i class="las la-file-code"></i>
        <i class="las la-drafting-compass"></i>
        <i class="las la-tags"></i>
        <i class="las la-tools"></i>` }}
      </CodeHighlighter>
    </div>
    <!-- end::Code -->
  </div>
  <!-- end::Section -->
</template>
