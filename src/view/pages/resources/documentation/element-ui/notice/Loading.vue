<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUICustomization from '@/view/pages/resources/documentation/element-ui/notice/loading/Customization.vue'
import EUIFullScreenLoading from '@/view/pages/resources/documentation/element-ui/notice/loading/FullScreenLoading.vue'
import EUILoadingInsideAContainer from '@/view/pages/resources/documentation/element-ui/notice/loading/LoadingInsideAContainer.vue'
import EUIService from '@/view/pages/resources/documentation/element-ui/notice/loading/Service.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Loading')
})
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#loading" />
      Loading
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Show animation while loading data.
    </div>
    <!-- end::Block -->
  </div>
  <EUILoadingInsideAContainer />
  <EUICustomization />
  <EUIFullScreenLoading />
  <EUIService />
</template>
