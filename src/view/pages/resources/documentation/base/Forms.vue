<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import CustomCheckboxAndRadio from '@/view/pages/resources/documentation/base/forms/CustomCheckboxAndRadio.vue'
import CustomFormControl from '@/view/pages/resources/documentation/base/forms/CustomFormControl.vue'
import CustomFormSelect from '@/view/pages/resources/documentation/base/forms/CustomFormSelect.vue'
import CustomSwitch from '@/view/pages/resources/documentation/base/forms/CustomSwitch.vue'
import Overview from '@/view/pages/resources/documentation/base/forms/Overview.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Forms')
})
</script>

<template>
  <!-- begin::Card -->
  <div class="card">
    <!-- begin::Card Body -->
    <div class="card-body p-10 p-lg-15">
      <Overview />

      <CustomFormControl />

      <CustomFormSelect />

      <CustomCheckboxAndRadio />

      <CustomSwitch />
    </div>
  </div>
</template>
