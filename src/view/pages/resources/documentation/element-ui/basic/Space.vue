<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIAlignment from '@/view/pages/resources/documentation/element-ui/basic/space/Alignment.vue'
import EUIAutoWrapping from '@/view/pages/resources/documentation/element-ui/basic/space/AutoWrapping.vue'
import EUIBasicUsage from '@/view/pages/resources/documentation/element-ui/basic/space/BasicUsage.vue'
import EUIControlTheSizeOfTheSpace from '@/view/pages/resources/documentation/element-ui/basic/space/ControlTheSizeOfTheSpace.vue'
import EUICustomizedSize from '@/view/pages/resources/documentation/element-ui/basic/space/CustomizedSize.vue'
import EUISpacer from '@/view/pages/resources/documentation/element-ui/basic/space/Spacer.vue'
import EUIVerticalLayout from '@/view/pages/resources/documentation/element-ui/basic/space/VerticalLayout.vue'

setCurrentPageTitle('Space')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#space" />
      Space
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Even though we have Divider, but sometimes we need more than one Divider
      to split the elements apart, so we stack each elements upon Divider, but
      doing so not only makes our code ugly but also makes it difficult to
      maintain. Space is this kind of component provides us both productivity
      and elegance.
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasicUsage />
  <EUIVerticalLayout />
  <EUIControlTheSizeOfTheSpace />
  <EUICustomizedSize />
  <EUIAutoWrapping />
  <EUISpacer />
  <EUIAlignment />
</template>
