<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIBasicUsage from '@/view/pages/resources/documentation/element-ui/form/checkbox/BasicUsage.vue'
import EUIButtonStyle from '@/view/pages/resources/documentation/element-ui/form/checkbox/ButtonStyle.vue'
import EUICheckboxGroup from '@/view/pages/resources/documentation/element-ui/form/checkbox/CheckboxGroup.vue'
import EUIDisabledState from '@/view/pages/resources/documentation/element-ui/form/checkbox/DisabledState.vue'
import EUIIndeterminate from '@/view/pages/resources/documentation/element-ui/form/checkbox/Indeterminate.vue'
import EUIMinMaxItemsChecked from '@/view/pages/resources/documentation/element-ui/form/checkbox/MinMaxItemsChecked.vue'
import EUIWithBorders from '@/view/pages/resources/documentation/element-ui/form/checkbox/WithBorders.vue'

setCurrentPageTitle('Checkbox')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#checkbox" />
      Checkbox
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      A group of options for multiple choices.
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasicUsage />
  <EUIDisabledState />
  <EUICheckboxGroup />
  <EUIIndeterminate />
  <EUIMinMaxItemsChecked />
  <EUIButtonStyle />
  <EUIWithBorders />
</template>
