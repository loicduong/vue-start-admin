<script setup lang="ts">
import { themeName } from '@/core/helpers/documentation'
</script>

<template>
  <!-- begin::Section -->
  <div class="pb-10">
    <!-- begin::Heading -->
    <h1 id="overview" class="anchor fw-bolder mb-5">
      <RouterLink to="/documentation/utilities#overview" />
      Overview
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      <b>{{ themeName }}</b> fully utilizes the
      <a href="https://getbootstrap.com/docs/5.0/utilities/api/" class="fw-bold">Bootstrap Utility API</a>&nbsp; in
      <code>src/sass/_utilities.scss</code> to generate additional
      utility classes to cover its own design system. The customized utility
      SASS variables are defined in <code>src/sass/_variables.scss</code> and in
      <code>src/sass/_variables.custom.scss</code>
      you can override any variable for your needs.
    </div>
    <!-- end::Block -->
  </div>
  <!-- end::Section -->
</template>
