<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIBasicUsage from '@/view/pages/resources/documentation/element-ui/form/cascader/BasicUsage.vue'
import EUICascaderPanel from '@/view/pages/resources/documentation/element-ui/form/cascader/CascaderPanel.vue'
import EUIClearable from '@/view/pages/resources/documentation/element-ui/form/cascader/Clearable.vue'
import EUICustomOptionContent from '@/view/pages/resources/documentation/element-ui/form/cascader/CustomOptionContent.vue'
import EUIDisabledOption from '@/view/pages/resources/documentation/element-ui/form/cascader/DisabledOption.vue'
import EUIDisplayOnlyTheLastLevel from '@/view/pages/resources/documentation/element-ui/form/cascader/DisplayOnlyTheLastLevel.vue'
import EUIDynamicLoading from '@/view/pages/resources/documentation/element-ui/form/cascader/DynamicLoading.vue'
import EUIFilterable from '@/view/pages/resources/documentation/element-ui/form/cascader/Filterable.vue'
import EUIMultipleSelection from '@/view/pages/resources/documentation/element-ui/form/cascader/MultipleSelection.vue'
import EUISelectAnyLevelOfOptions from '@/view/pages/resources/documentation/element-ui/form/cascader/SelectAnyLevelOfOptions.vue'

setCurrentPageTitle('Cascader')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#cascader" />
      Cascader
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      If the options have a clear hierarchical structure, Cascader can be used
      to view and select them.
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasicUsage />
  <EUIDisabledOption />
  <EUIClearable />
  <EUIDisplayOnlyTheLastLevel />
  <EUIMultipleSelection />
  <EUISelectAnyLevelOfOptions />
  <EUIDynamicLoading />
  <EUIFilterable />
  <EUICustomOptionContent />
  <EUICascaderPanel />
</template>
