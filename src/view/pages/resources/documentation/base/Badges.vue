<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import Basic from '@/view/pages/resources/documentation/base/badges/Basic.vue'
import CircleBadge from '@/view/pages/resources/documentation/base/badges/CircleBadge.vue'
import LightStyle from '@/view/pages/resources/documentation/base/badges/LightStyle.vue'
import Overview from '@/view/pages/resources/documentation/base/badges/Overview.vue'
import SquareBadge from '@/view/pages/resources/documentation/base/badges/SquareBadge.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Badges')
})
</script>

<template>
  <!-- begin::Card -->
  <div class="card">
    <!-- begin::Card Body -->
    <div class="card-body p-10 p-lg-15">
      <Overview />

      <Basic />

      <LightStyle />

      <SquareBadge />

      <CircleBadge />
    </div>
    <!-- end::Card Body -->
  </div>
  <!-- end::Card -->
</template>
