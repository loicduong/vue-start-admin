<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUICollapse from '@/view/pages/resources/documentation/element-ui/navigation/nav-menu/Collapse.vue'
import EUISideBar from '@/view/pages/resources/documentation/element-ui/navigation/nav-menu/SideBar.vue'
import EUITopBar from '@/view/pages/resources/documentation/element-ui/navigation/nav-menu/TopBar.vue'

setCurrentPageTitle('NavMenu')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#nav-menu" />
      NavMenu
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Menu that provides navigation for your website.
    </div>
    <!-- end::Block -->
  </div>
  <EUITopBar />
  <EUISideBar />
  <EUICollapse />
</template>
