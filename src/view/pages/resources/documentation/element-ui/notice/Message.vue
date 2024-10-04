<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIBasicUsage from '@/view/pages/resources/documentation/element-ui/notice/message/BasicUsage.vue'
import EUICenteredText from '@/view/pages/resources/documentation/element-ui/notice/message/CenteredText.vue'
import EUIClosable from '@/view/pages/resources/documentation/element-ui/notice/message/Closable.vue'
import EUITypes from '@/view/pages/resources/documentation/element-ui/notice/message/Types.vue'
import EUIUseHTMLString from '@/view/pages/resources/documentation/element-ui/notice/message/UseHTMLString.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Message')
})
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#message" />
      Message
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Used to show feedback after an activity. The difference with Notification
      is that the latter is often used to show a system level passive
      notification.
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasicUsage />
  <EUITypes />
  <EUIClosable />
  <EUICenteredText />
  <EUIUseHTMLString />
</template>
