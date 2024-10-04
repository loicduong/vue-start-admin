<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIBasicUsage from '@/view/pages/resources/documentation/element-ui/navigation/affix/BasicUsage.vue'
import EUIFixedPosition from '@/view/pages/resources/documentation/element-ui/navigation/affix/FixedPosition.vue'
import EUITargetContainer from '@/view/pages/resources/documentation/element-ui/navigation/affix/TargetContainer.vue'

setCurrentPageTitle('Affix')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#affix" />
      Affix
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Fix the element to a specific visible area.
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasicUsage />
  <EUITargetContainer />
  <EUIFixedPosition />
</template>
