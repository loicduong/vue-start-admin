<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIAlignment from '@/view/pages/resources/documentation/element-ui/basic/layout/Alignment.vue'
import EUILayoutBasic from '@/view/pages/resources/documentation/element-ui/basic/layout/BasicLayout.vue'
import EUIColumnOffset from '@/view/pages/resources/documentation/element-ui/basic/layout/ColumnOffset.vue'
import EUIColumnSpacing from '@/view/pages/resources/documentation/element-ui/basic/layout/ColumnSpacing.vue'
import EUIHybridLayout from '@/view/pages/resources/documentation/element-ui/basic/layout/HybridLayout.vue'
import EUIResponsiveLayout from '@/view/pages/resources/documentation/element-ui/basic/layout/ResponsiveLayout.vue'

setCurrentPageTitle('Layout')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#layout" />
      Layout
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Quickly and easily create layouts with the basic 24-column.
    </div>
    <!-- end::Block -->
  </div>
  <EUILayoutBasic />
  <EUIColumnSpacing />
  <EUIHybridLayout />
  <EUIColumnOffset />
  <EUIAlignment />
  <EUIResponsiveLayout />
</template>
