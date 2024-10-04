<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import Example1 from '@/view/pages/resources/documentation/forms/vee-validate/Example1.vue'
import Example2 from '@/view/pages/resources/documentation/forms/vee-validate/Example2.vue'
import Example3 from '@/view/pages/resources/documentation/forms/vee-validate/Example3.vue'
import Example4 from '@/view/pages/resources/documentation/forms/vee-validate/Example4.vue'
import Overview from '@/view/pages/resources/documentation/forms/vee-validate/Overview.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('VeeValidate')
})
</script>

<template>
  <!-- begin::Card -->
  <div class="card card-custom">
    <!-- begin::Card Body -->
    <div class="card-body p-10 p-lg-15">
      <Overview />
      <Example1 />
      <Example2 />
      <Example3 />
      <Example4 />
    </div>
    <!-- end::Card Body -->
  </div>
  <!-- end::Card -->
</template>
