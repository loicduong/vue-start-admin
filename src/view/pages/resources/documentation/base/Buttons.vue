<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import ActiveColorStyle from '@/view/pages/resources/documentation/base/buttons/ActiveColorStyle.vue'
import ActiveLightStyle from '@/view/pages/resources/documentation/base/buttons/ActiveLightStyle.vue'
import ActiveStyle from '@/view/pages/resources/documentation/base/buttons/ActiveStyle.vue'
import BackgroundStyle from '@/view/pages/resources/documentation/base/buttons/BackgroundStyle.vue'
import BaseButtons from '@/view/pages/resources/documentation/base/buttons/BaseButtons.vue'
import ColorStyle from '@/view/pages/resources/documentation/base/buttons/ColorStyle.vue'
import Icons from '@/view/pages/resources/documentation/base/buttons/Icons.vue'
import LightStyle from '@/view/pages/resources/documentation/base/buttons/LightStyle.vue'
import Overview from '@/view/pages/resources/documentation/base/buttons/Overview.vue'
import SocialButtons from '@/view/pages/resources/documentation/base/buttons/SocialButtons.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Buttons')
})
</script>

<template>
  <!-- begin::Card -->
  <div class="card">
    <!-- begin::Card Body -->
    <div class="card-body p-10 p-lg-15">
      <Overview />

      <BaseButtons />

      <LightStyle />

      <BackgroundStyle />

      <ColorStyle />

      <ActiveStyle />

      <ActiveLightStyle />

      <ActiveColorStyle />

      <Icons />

      <SocialButtons />
    </div>
    <!-- end::Card Body -->
  </div>
  <!-- end::Card -->
</template>
