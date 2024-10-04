<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import FontSize from '@/view/pages/resources/documentation/base/utilities/FontSize.vue'
import LineHeight from '@/view/pages/resources/documentation/base/utilities/LineHeight.vue'
import Opacity from '@/view/pages/resources/documentation/base/utilities/Opacity.vue'
import Overview from '@/view/pages/resources/documentation/base/utilities/Overview.vue'
import Spacing from '@/view/pages/resources/documentation/base/utilities/Spacing.vue'
import ThemeColor from '@/view/pages/resources/documentation/base/utilities/ThemeColor.vue'
import WidthAndHeight from '@/view/pages/resources/documentation/base/utilities/WidthAndHeight.vue'
import ZIndex from '@/view/pages/resources/documentation/base/utilities/ZIndex.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Utilities')
})
</script>

<template>
  <!-- begin::Card -->
  <div class="card">
    <!-- begin::Card Body -->
    <div class="card-body p-10 p-lg-15">
      <Overview />

      <ThemeColor />

      <Spacing />

      <FontSize />

      <LineHeight />

      <Opacity />

      <WidthAndHeight />

      <ZIndex />
    </div>
  </div>
  <!-- end::Card -->
</template>
