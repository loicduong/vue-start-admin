<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIAlert from '@/view/pages/resources/documentation/element-ui/notice/message-box/Alert.vue'
import EUICenteredContent from '@/view/pages/resources/documentation/element-ui/notice/message-box/CenteredContent.vue'
import EUIConfirm from '@/view/pages/resources/documentation/element-ui/notice/message-box/Confirm.vue'
import EUICustomization from '@/view/pages/resources/documentation/element-ui/notice/message-box/Customization.vue'
import EUIDistinguishingCancelAndClose from '@/view/pages/resources/documentation/element-ui/notice/message-box/DistinguishingCancelAndClose.vue'
import EUIPrompt from '@/view/pages/resources/documentation/element-ui/notice/message-box/Prompt.vue'
import EUIUseHTMLString from '@/view/pages/resources/documentation/element-ui/notice/message-box/UseHTMLString.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('MessageBox')
})
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#message-box" />
      MessageBox
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      A set of modal boxes simulating system message box, mainly for alerting
      information, confirm operations and prompting messages.
    </div>
    <!-- end::Block -->

    <div class="py-5">
      <div class="rounded py-5 px-5 bg-light-info">
        By design MessageBox provides simulations of system's
        <code>alert</code>, <code>confirm</code> and <code>prompt</code>，so
        it's content should be simple. For more complicated contents, please use
        Dialog.
      </div>
    </div>
  </div>
  <EUIAlert />
  <EUIConfirm />
  <EUIPrompt />
  <EUICustomization />
  <EUIUseHTMLString />
  <EUIDistinguishingCancelAndClose />
  <EUICenteredContent />
</template>
