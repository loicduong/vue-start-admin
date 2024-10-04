<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIBasicUsage from '@/view/pages/resources/documentation/element-ui/data/pagination/BasicUsage.vue'
import EUIButtonsWithBackgroudColor from '@/view/pages/resources/documentation/element-ui/data/pagination/ButtonsWithBackgroudColor.vue'
import EUIHidePaginWhenThereIsOnePg from '@/view/pages/resources/documentation/element-ui/data/pagination/HidePaginWhenThereIsOnePg.vue'
import EUIMoreElements from '@/view/pages/resources/documentation/element-ui/data/pagination/MoreElements.vue'
import EUINumberOfPagers from '@/view/pages/resources/documentation/element-ui/data/pagination/NumberOfPagers.vue'
import EUISmallPagination from '@/view/pages/resources/documentation/element-ui/data/pagination/SmallPagination.vue'

setCurrentPageTitle('Pagination')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#pagination" />
      Pagination
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      If you have too much data to display in one page, use pagination.
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasicUsage />
  <EUINumberOfPagers />
  <EUIButtonsWithBackgroudColor />
  <EUISmallPagination />
  <EUIMoreElements />
  <EUIHidePaginWhenThereIsOnePg />
</template>
