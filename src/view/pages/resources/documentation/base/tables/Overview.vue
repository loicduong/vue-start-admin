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
      <b>{{ themeName }}</b> extends
      <a class="fw-bolder me-1" href="https://getbootstrap.com/docs/5.0/content/tables/">Bootstrap Tables</a>
      to provide wider variants for multi-purpose usage as static table and
      integrated with
      <a href="https://datatables.net/" class="fw-bolder me-1" target="_blank" rel="noopener noreferrer">Datatables</a>
      as well.
    </div>
    <!-- end::Block -->
  </div>
  <!-- end::Section -->
</template>
