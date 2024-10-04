<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIBasicUsage from '@/view/pages/resources/documentation/element-ui/data/tag/BasicUsage.vue'
import EUICheckableTag from '@/view/pages/resources/documentation/element-ui/data/tag/CheckableTag.vue'
import EUIEditDynamically from '@/view/pages/resources/documentation/element-ui/data/tag/EditDynamically.vue'
import EUIRemovableTag from '@/view/pages/resources/documentation/element-ui/data/tag/RemovableTag.vue'
import EUISizes from '@/view/pages/resources/documentation/element-ui/data/tag/Sizes.vue'
import EUITheme from '@/view/pages/resources/documentation/element-ui/data/tag/Theme.vue'

setCurrentPageTitle('Tag')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#tag" />
      Tag
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Used for marking and selection.
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasicUsage />
  <EUIRemovableTag />
  <EUIEditDynamically />
  <EUISizes />
  <EUITheme />
  <EUICheckableTag />
</template>
