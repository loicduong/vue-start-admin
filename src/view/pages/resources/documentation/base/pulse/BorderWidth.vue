<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'

const widths = [0, 1, 2, 3, 4, 5]
</script>

<template>
  <!-- begin::Section -->
  <div class="pt-10">
    <!-- begin::Heading -->
    <h1 id="border-width" class="anchor fw-bolder mb-5">
      <a href="#border-width" />
      Border Width
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Use the standard <code>.border-{width}</code> class with
      <code>.pulse-ring</code> to set a pulse ring's border width.
    </div>
    <!-- end::Block -->

    <!-- begin::Block -->
    <div class="py-5">
      Where <code>width</code> is one of:
      <ul class="pt-3">
        <template v-for="(item, i) in widths" :key="i">
          <li class="py-2">
            <code>{{ item }}</code> - for classes that set border width to
            {{ item }}px
          </li>
        </template>
      </ul>
    </div>
    <!-- end::Block -->

    <!-- begin::Block -->
    <div class="py-5">
      <div class="rounded border p-10 pb-0 d-flex flex-wrap align-items-center">
        <template v-for="(item, i) in widths" :key="i">
          <a href="#" class="btn btn-icon btn-light pulse pulse-primary me-10 mb-10">
            <span class="svg-icon svg-icon-2">
              <InlineSvg src="/media/icons/duotone/Layout/Layout-4-blocks.svg" />
            </span>
            <span :class="`border-${item}`" class="pulse-ring" />
          </a>
        </template>
      </div>
    </div>
    <!-- end::Block -->

    <!-- begin::Code -->
    <div class="py-5">
      <CodeHighlighter :field-height="400" lang="html">
        {{ `<a href="#"
          class="btn btn-icon btn-light pulse pulse-primary">
          <span class="svg-icon svg-icon-2"><svg>...</svg></span>
          <span class="pulse-ring border-0"></span>
        </a>
        <a href="#" class="btn btn-icon btn-light pulse pulse-primary">
          <span class="svg-icon svg-icon-2"><svg>...</svg></span>
          <span class="pulse-ring border-1"></span>
        </a>
        <a href="#" class="btn btn-icon btn-light pulse pulse-primary">
          <span class="svg-icon svg-icon-2"><svg>...</svg></span>
          <span class="pulse-ring border-2"></span>
        </a>
        <a href="#" class="btn btn-icon btn-light pulse pulse-primary">
          <span class="svg-icon svg-icon-2"><svg>...</svg></span>
          <span class="pulse-ring border-3"></span>
        </a>
        <a href="#" class="btn btn-icon btn-light pulse pulse-primary">
          <span class="svg-icon svg-icon-2"><svg>...</svg></span>
          <span class="pulse-ring border-4"></span>
        </a>
        <a href="#" class="btn btn-icon btn-light pulse pulse-primary">
          <span class="svg-icon svg-icon-2"><svg>...</svg></span>
          <span class="pulse-ring border-5"></span> </a>` }}
      </CodeHighlighter>
    </div>
    <!-- end::Code -->
  </div>
  <!-- end::Section -->
</template>
