<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIBasicUsage from '@/view/pages/resources/documentation/element-ui/notice/notification/BasicUsage.vue'
import EUICustomPosition from '@/view/pages/resources/documentation/element-ui/notice/notification/CustomPosition.vue'
import EUIHideCloseButton from '@/view/pages/resources/documentation/element-ui/notice/notification/HideCloseButton.vue'
import EUIUseHTMLString from '@/view/pages/resources/documentation/element-ui/notice/notification/UseHTMLString.vue'
import EUIWithOffset from '@/view/pages/resources/documentation/element-ui/notice/notification/WithOffset.vue'
import EUIWithTypes from '@/view/pages/resources/documentation/element-ui/notice/notification/WithTypes.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Notification')
})
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#notification" />
      Notification
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Displays a global notification message at a corner of the page.
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasicUsage />
  <EUIWithTypes />
  <EUICustomPosition />
  <EUIWithOffset />
  <EUIUseHTMLString />
  <EUIHideCloseButton />
</template>
