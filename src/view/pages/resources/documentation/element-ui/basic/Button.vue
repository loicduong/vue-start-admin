<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIBasicUsage from '@/view/pages/resources/documentation/element-ui/basic/button/BasicUsage.vue'
import EUIButtonGroup from '@/view/pages/resources/documentation/element-ui/basic/button/ButtonGroup.vue'
import EUIDisabledButton from '@/view/pages/resources/documentation/element-ui/basic/button/DisabledButton.vue'
import EUIIconButton from '@/view/pages/resources/documentation/element-ui/basic/button/IconButton.vue'
import EUILoadingButton from '@/view/pages/resources/documentation/element-ui/basic/button/LoadingButton.vue'
import EUISizes from '@/view/pages/resources/documentation/element-ui/basic/button/Sizes.vue'
import EUITextButton from '@/view/pages/resources/documentation/element-ui/basic/button/TextButton.vue'

setCurrentPageTitle('Button')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#button" />
      Button
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Commonly used button.
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasicUsage />
  <EUIDisabledButton />
  <EUITextButton />
  <EUIIconButton />
  <EUIButtonGroup />
  <EUILoadingButton />
  <EUISizes />
</template>
