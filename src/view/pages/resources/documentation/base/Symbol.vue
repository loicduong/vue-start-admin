<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import Avatar from '@/view/pages/resources/documentation/base/symbol/Avatar.vue'
import AvatarBackground from '@/view/pages/resources/documentation/base/symbol/AvatarBackground.vue'
import AvatarRatio from '@/view/pages/resources/documentation/base/symbol/AvatarRatio.vue'
import Badge from '@/view/pages/resources/documentation/base/symbol/Badge.vue'
import Label from '@/view/pages/resources/documentation/base/symbol/Label.vue'
import Overview from '@/view/pages/resources/documentation/base/symbol/Overview.vue'
import Sizes from '@/view/pages/resources/documentation/base/symbol/Sizes.vue'
import Styles from '@/view/pages/resources/documentation/base/symbol/Styles.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Symbol')
})
</script>

<template>
  <!-- begin::Card -->
  <div class="card">
    <!-- begin::Card Body -->
    <div class="card-body p-10 p-lg-15">
      <Overview />

      <Avatar />

      <AvatarBackground />

      <AvatarRatio />

      <Label />

      <Badge />

      <Styles />

      <Sizes />
    </div>
    <!-- end::Card Body -->
  </div>
  <!-- end::Card -->
</template>
