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
      Use <code>.indication</code> class on a button and specify the button's
      label and progress message and toggle the indicator state with
      <code>data-kt-indicator="on"</code> custom HTML attribute:
    </div>
    <!-- end::Block -->

    <!-- begin::Block -->
    <div class="py-5">
      <div class="rounded border p-10">
        <button type="button" class="btn btn-primary me-10">
          <span class="indicator-label">
            Submit
          </span>
          <span class="indicator-progress">
            Please wait...
            <span class="spinner-border spinner-border-sm align-middle ms-2" />
          </span>
        </button>

        <button type="button" class="btn btn-primary" data-kt-indicator="on">
          <span class="indicator-label">
            Submit
          </span>
          <span class="indicator-progress">
            Please wait...
            <span class="spinner-border spinner-border-sm align-middle ms-2" />
          </span>
        </button>
      </div>
    </div>
    <!-- end::Block -->

    <!-- begin::Code -->
    <div class="py-5">
      <CodeHighlighter lang="html">
        {{ `<!-- Default state -->
        <button type="button" class="btn btn-primary me-10">
          <span class="indicator-label">
            Submit
          </span>
          <span class="indicator-progress">
            Please wait...
            <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
          </span>
        </button>

        <!-- Progress enabled state -->
        <button type="button" class="btn btn-primary" data-kt-indicator="on">
          <span class="indicator-label">
            Submit
          </span>
          <span class="indicator-progress">
            Please wait...
            <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
          </span></button>` }}
      </CodeHighlighter>
    </div>
    <!-- end::Code -->
  </div>
  <!-- end::Section -->
</template>
