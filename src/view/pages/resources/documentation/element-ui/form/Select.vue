<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIBasicMultipleSelect from '@/view/pages/resources/documentation/element-ui/form/select/BasicMultipleSelect.vue'
import EUIBasicUsage from '@/view/pages/resources/documentation/element-ui/form/select/BasicUsage.vue'
import EUIClearableSingleSelect from '@/view/pages/resources/documentation/element-ui/form/select/ClearableSingleSelect.vue'
import EUICreateNewItems from '@/view/pages/resources/documentation/element-ui/form/select/CreateNewItems.vue'
import EUICustomTemplate from '@/view/pages/resources/documentation/element-ui/form/select/CustomTemplate.vue'
import EUIDisabledOption from '@/view/pages/resources/documentation/element-ui/form/select/DisabledOption.vue'
import EUIDisabledSelect from '@/view/pages/resources/documentation/element-ui/form/select/DisabledSelect.vue'
import EUIGrouping from '@/view/pages/resources/documentation/element-ui/form/select/Grouping.vue'
import EUIOptionFiltering from '@/view/pages/resources/documentation/element-ui/form/select/OptionFiltering.vue'
import EUIRemoteSearch from '@/view/pages/resources/documentation/element-ui/form/select/RemoteSearch.vue'

setCurrentPageTitle('Select')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#select" />
      Select
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      When there are plenty of options, use a drop-down menu to display and
      select desired ones.
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasicUsage />
  <EUIDisabledOption />
  <EUIDisabledSelect />
  <EUIClearableSingleSelect />
  <EUIBasicMultipleSelect />
  <EUICustomTemplate />
  <EUIGrouping />
  <EUIOptionFiltering />
  <EUIRemoteSearch />
  <EUICreateNewItems />
</template>
