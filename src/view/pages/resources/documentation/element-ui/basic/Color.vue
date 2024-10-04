<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import CodeHighlighter2 from '@/view/content/highlighters/CodeHighlighter2.vue'

setCurrentPageTitle('Color')
</script>

<template>
  <!-- begin::Card -->
  <div class="card">
    <!-- begin::Card Body -->
    <div class="card-body p-10 p-lg-15">
      <!-- begin::Section -->
      <div class="py-10">
        <!-- begin::Heading -->
        <h1 id="animated-icon" class="anchor fw-bolder mb-5">
          <a href="#animated-icon" />
          Animated Icon
        </h1>
        <!-- end::Heading -->

        <!-- begin::Block -->
        <div class="py-5">
          Add <code>.accordion-icon-toggle</code> class to add toggle based
          animated icon in header:
        </div>
        <!-- end::Block -->

        <CodeHighlighter2 />
      </div>
      <!-- end::Section -->
    </div>
    <!-- end::Card Body -->
  </div>
  <!-- end::Card -->
</template>
