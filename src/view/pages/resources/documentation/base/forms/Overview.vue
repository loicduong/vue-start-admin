<script setup lang="ts">
import { themeName } from '@/core/helpers/documentation'
</script>

<template>
  <!-- begin::Section -->
  <div class="pb-10">
    <!-- begin::Heading -->
    <h1 id="overview" class="anchor fw-bolder mb-5">
      <a href="#overview" />
      Overview
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      <b>{{ themeName }}</b> customizes the
      <a href="https://getbootstrap.com/docs/5.0/forms/overview/" class="fw-bold">Bootstrap Forms</a>&nbsp; through the
      SASS variables in
      <code>src/sass/_variables.scss</code> and adds additonal options for the
      form elements in <code>src/sass/forms/</code>.
    </div>
    <!-- end::Block -->
  </div>
  <!-- end::Section -->
</template>
