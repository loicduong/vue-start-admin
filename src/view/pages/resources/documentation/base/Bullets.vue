<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import Basic from '@/view/pages/resources/documentation/base/bullets/Basic.vue'
import Colors from '@/view/pages/resources/documentation/base/bullets/Colors.vue'
import DotStyle from '@/view/pages/resources/documentation/base/bullets/DotStyle.vue'
import Overview from '@/view/pages/resources/documentation/base/bullets/Overview.vue'
import Sizes from '@/view/pages/resources/documentation/base/bullets/Sizes.vue'
import VarticalStyle from '@/view/pages/resources/documentation/base/bullets/VarticalStyle.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Bullets')
})
</script>

<template>
  <!-- begin::Card -->
  <div class="card">
    <!-- begin::Card Body -->
    <div class="card-body p-10 p-lg-15">
      <Overview />

      <Basic />

      <Colors />

      <DotStyle />

      <VarticalStyle />

      <Sizes />
    </div>
    <!-- end::Card Body -->
  </div>
  <!-- end::Card -->
</template>
