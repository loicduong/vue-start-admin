<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIBasic from '@/view/pages/resources/documentation/element-ui/navigation/page-header/Basic.vue'

setCurrentPageTitle('PageHeader')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#page-header" />
      PageHeader
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      If path of the page is simple, it is recommended to use PageHeader instead
      of the Breadcrumb.
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasic />
</template>
