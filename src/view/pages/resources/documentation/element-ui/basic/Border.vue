<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import CodeHighlighter2 from '@/view/content/highlighters/CodeHighlighter2.vue'

setCurrentPageTitle('Border')
</script>

<template>
  <!-- begin::Section -->
  <div class="py-10">
    <!-- begin::Heading -->
    <h1 id="animated-icon" class="anchor fw-bolder mb-5">
      <a href="#layout" />
      Layout
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Add <code>.accordion-icon-toggle</code> class to add toggle based animated
      icon in header:
    </div>
    <!-- end::Block -->

    <CodeHighlighter2 />
  </div>
  <!-- end::Section -->
</template>
