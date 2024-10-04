<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import BasicExample from '@/view/pages/resources/documentation/base/overlay/BasicExample.vue'
import CardBlocking from '@/view/pages/resources/documentation/base/overlay/CardBlocking.vue'
import ContentBlocking from '@/view/pages/resources/documentation/base/overlay/ContentBlocking.vue'
import ModalBlocking from '@/view/pages/resources/documentation/base/overlay/ModalBlocking.vue'
import Overview from '@/view/pages/resources/documentation/base/overlay/Overview.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Overlay')
})
</script>

<template>
  <!-- begin::Card -->
  <div class="card">
    <!-- begin::Card Body -->
    <div class="card-body p-10 p-lg-15">
      <Overview />

      <BasicExample />

      <ContentBlocking />

      <CardBlocking />

      <ModalBlocking />
    </div>
    <!-- end::Card Body -->
  </div>
  <!-- end::Card -->
</template>
