<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import BasicExample from '@/view/pages/resources/documentation/base/separator/BasicExample.vue'
import Colors from '@/view/pages/resources/documentation/base/separator/Colors.vue'
import Overview from '@/view/pages/resources/documentation/base/separator/Overview.vue'
import Sizes from '@/view/pages/resources/documentation/base/separator/Sizes.vue'
import Styles from '@/view/pages/resources/documentation/base/separator/Styles.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Separator')
})
</script>

<template>
  <!-- begin::Card -->
  <div class="card">
    <!-- begin::Card Body -->
    <div class="card-body p-10 p-lg-15">
      <Overview />

      <BasicExample />

      <Sizes />

      <Colors />

      <Styles />
    </div>
    <!-- end::Card Body -->
  </div>
  <!-- end::Card -->
</template>
