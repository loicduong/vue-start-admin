<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import Basic from '@/view/pages/resources/documentation/base/pulse/Basic.vue'
import BorderWidth from '@/view/pages/resources/documentation/base/pulse/BorderWidth.vue'
import Colors from '@/view/pages/resources/documentation/base/pulse/Colors.vue'
import Overview from '@/view/pages/resources/documentation/base/pulse/Overview.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Pulse')
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

      <BorderWidth />
    </div>
    <!-- end::Card Body -->
  </div>
  <!-- end::Card -->
</template>
