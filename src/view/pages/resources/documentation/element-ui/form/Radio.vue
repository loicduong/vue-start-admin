<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIBasicUsage from '@/view/pages/resources/documentation/element-ui/form/radio/BasicUsage.vue'
import EUIButtonStyle from '@/view/pages/resources/documentation/element-ui/form/radio/ButtonStyle.vue'
import EUIDisabled from '@/view/pages/resources/documentation/element-ui/form/radio/Disabled.vue'
import EUIRadioButtonGroup from '@/view/pages/resources/documentation/element-ui/form/radio/RadioButtonGroup.vue'
import EUIWithBorders from '@/view/pages/resources/documentation/element-ui/form/radio/WithBorders.vue'

setCurrentPageTitle('Radio')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#radio" />
      Radio
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Single selection among multiple options.
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasicUsage />
  <EUIDisabled />
  <EUIRadioButtonGroup />
  <EUIButtonStyle />
  <EUIWithBorders />
</template>
