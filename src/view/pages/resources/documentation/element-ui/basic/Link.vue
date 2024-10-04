<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIBasic from '@/view/pages/resources/documentation/element-ui/basic/link/Basic.vue'
import EUIDisabled from '@/view/pages/resources/documentation/element-ui/basic/link/Disabled.vue'
import EUIIcon from '@/view/pages/resources/documentation/element-ui/basic/link/Icon.vue'
import EUIUnderline from '@/view/pages/resources/documentation/element-ui/basic/link/Underline.vue'

setCurrentPageTitle('Link')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#button" />
      Link
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Text hyperlink
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasic />
  <EUIDisabled />
  <EUIUnderline />
  <EUIIcon />
</template>

<style>
.el-link {
  margin-right: 5px;
}
</style>
