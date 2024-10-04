<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import Example1 from '@/view/pages/resources/documentation/base/tables/Example1.vue'
import Example2 from '@/view/pages/resources/documentation/base/tables/Example2.vue'
import Example3 from '@/view/pages/resources/documentation/base/tables/Example3.vue'
import Example4 from '@/view/pages/resources/documentation/base/tables/Example4.vue'
import Example5 from '@/view/pages/resources/documentation/base/tables/Example5.vue'
import Example6 from '@/view/pages/resources/documentation/base/tables/Example6.vue'
import Example7 from '@/view/pages/resources/documentation/base/tables/Example7.vue'
import Example8 from '@/view/pages/resources/documentation/base/tables/Example8.vue'
import Example9 from '@/view/pages/resources/documentation/base/tables/Example9.vue'
import Example10 from '@/view/pages/resources/documentation/base/tables/Example10.vue'
import Overview from '@/view/pages/resources/documentation/base/tables/Overview.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Tables')
})
</script>

<template>
  <!-- begin::Card -->
  <div class="card">
    <!-- begin::Card Body -->
    <div class="card-body p-10 p-lg-15">
      <Overview />

      <Example1 />

      <Example2 />

      <Example3 />

      <Example4 />

      <Example5 />

      <Example6 />

      <Example7 />

      <Example8 />

      <Example9 />

      <Example10 />
    </div>
    <!-- end::Card Body -->
  </div>
  <!-- end::Card -->
</template>
