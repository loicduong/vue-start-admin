<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIBasicUsage from '@/view/pages/resources/documentation/element-ui/form/switch/BasicUsage.vue'
import EUIDisabled from '@/view/pages/resources/documentation/element-ui/form/switch/Disabled.vue'
import EUIExtendedValueTypes from '@/view/pages/resources/documentation/element-ui/form/switch/ExtendedValueTypes.vue'
import EUILoading from '@/view/pages/resources/documentation/element-ui/form/switch/Loading.vue'
import EUITextDescription from '@/view/pages/resources/documentation/element-ui/form/switch/TextDescription.vue'

setCurrentPageTitle('Switch')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#switch" />
      Switch
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Switch is used for switching between two opposing states.
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasicUsage />
  <EUITextDescription />
  <EUIExtendedValueTypes />
  <EUIDisabled />
  <EUILoading />
</template>
