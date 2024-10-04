<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIBasicUsage from '@/view/pages/resources/documentation/element-ui/navigation/dropdown/BasicUsage.vue'
import EUICommandEvent from '@/view/pages/resources/documentation/element-ui/navigation/dropdown/CommandEvent.vue'
import EUIHowToTrigger from '@/view/pages/resources/documentation/element-ui/navigation/dropdown/HowToTrigger.vue'
import EUIMenuHidingBehavior from '@/view/pages/resources/documentation/element-ui/navigation/dropdown/MenuHidingBehavior.vue'
import EUISizes from '@/view/pages/resources/documentation/element-ui/navigation/dropdown/Sizes.vue'
import EUITriggeringElement from '@/view/pages/resources/documentation/element-ui/navigation/dropdown/TriggeringElement.vue'

setCurrentPageTitle('Dropdown')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#dropdown" />
      Dropdown
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Toggleable menu for displaying lists of links and actions.
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasicUsage />
  <EUITriggeringElement />
  <EUIHowToTrigger />
  <EUIMenuHidingBehavior />
  <EUICommandEvent />
  <EUISizes />
</template>
