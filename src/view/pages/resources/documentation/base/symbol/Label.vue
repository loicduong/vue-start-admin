<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
</script>

<template>
  <!-- begin::Section -->
  <div class="py-10">
    <!-- begin::Heading -->
    <h1 id="label" class="anchor fw-bolder mb-5">
      <a href="#badge" />
      Label
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Set symbol lavel within <code>.symbol-label</code> element and style it
      with text and background utility classes:
    </div>
    <!-- end::Block -->

    <!-- begin::Block -->
    <div class="py-5">
      <div class="rounded border p-10 pb-0 d-flex flex-wrap">
        <div class="symbol symbol-50px me-10 mb-10">
          <div class="symbol-label fs-2 fw-bold text-success">
            A
          </div>
        </div>

        <div class="symbol symbol-50px me-10 mb-10">
          <div class="symbol-label fs-2 fw-bold bg-danger text-inverse-danger">
            L
          </div>
        </div>

        <div class="symbol symbol-50px me-10 mb-10">
          <div class="symbol-label fs-2 fw-bold text-danger">
            C
          </div>
        </div>

        <div class="symbol symbol-50px me-10 mb-10">
          <div class="symbol-label fs-2 fw-bold bg-primary text-inverse-primary">
            T
          </div>
        </div>

        <div class="symbol symbol-50px me-10 mb-10">
          <div class="symbol-label fs-2 fw-bold text-warning">
            X
          </div>
        </div>

        <div class="symbol symbol-50px me-10 mb-10">
          <div class="symbol-label fs-2 fw-bold bg-info text-inverse-info">
            S
          </div>
        </div>
      </div>
    </div>
    <!-- end::Block -->

    <!-- begin::Code -->
    <div class="py-5">
      <CodeHighlighter lang="html">
        {{ `
        <div class="symbol symbol-50px">
          <div class="symbol-label fs-2 fw-bold text-success">A</div>
        </div>

        <div class="symbol symbol-50px">
          <div class="symbol-label fs-2 fw-bold bg-danger text-inverse-danger">
            L
          </div>
        </div>

        <div class="symbol symbol-50px">
          <div class="symbol-label fs-2 fw-bold text-danger">C</div>
        </div>

        <div class="symbol symbol-50px">
          <div class="symbol-label fs-2 fw-bold bg-primary text-inverse-primary">
            T
          </div>
        </div>

        <div class="symbol symbol-50px">
          <div class="symbol-label fs-2 fw-bold text-warning">X</div>
        </div>

        <div class="symbol symbol-50px">
          <div class="symbol-label fs-2 fw-bold bg-info text-inverse-info">
            S
          </div>
        </div>
        ` }}
      </CodeHighlighter>
    </div>
    <!-- end::Code -->
  </div>
  <!-- end::Section -->
</template>
