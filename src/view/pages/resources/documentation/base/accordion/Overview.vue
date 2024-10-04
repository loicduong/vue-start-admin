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
      {{ themeName }} customizes the
      <a href="https://getbootstrap.com/docs/5.0/components/accordion/" class="fw-bold">Bootstrap Accordion</a>&nbsp;
      through the SASS variables in
      <code>src/sass/_variables.scss</code> and adds additonal options in
      <code>src/sass/_accordion.scss</code>.
    </div>
    <!-- end::Block -->
  </div>
  <!-- end::Section -->
</template>
