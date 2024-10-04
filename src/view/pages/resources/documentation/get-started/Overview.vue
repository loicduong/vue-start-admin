<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import { themeName } from '@/core/helpers/documentation'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Overview')
})
</script>

<template>
  <!-- begin::Card -->
  <div class="card">
    <!-- begin::Card Body -->
    <div class="card-body p-10 p-lg-15">
      <div>
        <h2>Build Fast & Modern Admin Dashboards with {{ themeName }}.</h2>

        <p class="pt-10">
          Start - Bootstrap 5 Vue Multi-purpose Admin Dashboard Theme.
        </p>
      </div>
    </div>
    <!-- end::Card Body -->
  </div>
  <!-- end::Card -->
</template>
