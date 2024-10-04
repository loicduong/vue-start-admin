<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIAddAndCloseTab from '@/view/pages/resources/documentation/element-ui/navigation/tabs/AddAndCloseTab.vue'
import EUIBasicUsage from '@/view/pages/resources/documentation/element-ui/navigation/tabs/BasicUsage.vue'
import EUIBorderCard from '@/view/pages/resources/documentation/element-ui/navigation/tabs/BorderCard.vue'
import EUICardStyle from '@/view/pages/resources/documentation/element-ui/navigation/tabs/CardStyle.vue'
import EUICustomizedTriggerButtonOfNewTab from '@/view/pages/resources/documentation/element-ui/navigation/tabs/CustomizedTriggerButtonOfNewTab.vue'
import EUICustomTab from '@/view/pages/resources/documentation/element-ui/navigation/tabs/CustomTab.vue'
import EUITabPosition from '@/view/pages/resources/documentation/element-ui/navigation/tabs/TabPosition.vue'

setCurrentPageTitle('Tabs')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#tabs" />
      Tabs
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Divide data collections which are related yet belong to different types.
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasicUsage />
  <EUICardStyle />
  <EUIBorderCard />
  <EUITabPosition />
  <EUICustomTab />
  <EUIAddAndCloseTab />
  <EUICustomizedTriggerButtonOfNewTab />
</template>
