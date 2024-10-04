<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIAlignment from '@/view/pages/resources/documentation/element-ui/form/form/Alignment.vue'
import EUIBasicForm from '@/view/pages/resources/documentation/element-ui/form/form/BasicForm.vue'
import EUICustomValidationRules from '@/view/pages/resources/documentation/element-ui/form/form/CustomValidationRules.vue'
import EUIDeleteOrAddFormItemsDynamically from '@/view/pages/resources/documentation/element-ui/form/form/DeleteOrAddFormItemsDynamically.vue'
import EUIInlineForm from '@/view/pages/resources/documentation/element-ui/form/form/InlineForm.vue'
import EUINumberValidate from '@/view/pages/resources/documentation/element-ui/form/form/NumberValidate.vue'
import EUISizeControl from '@/view/pages/resources/documentation/element-ui/form/form/SizeControl.vue'
import EUIValidation from '@/view/pages/resources/documentation/element-ui/form/form/Validation.vue'

setCurrentPageTitle('Form')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#form" />
      Form
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Form consists of <code>input</code>, <code>radio</code>,
      <code>select</code>, <code>checkbox</code> and so on. With form, you can
      collect, verify and submit data.
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasicForm />
  <EUIInlineForm />
  <EUIAlignment />
  <EUIValidation />
  <EUICustomValidationRules />
  <EUIDeleteOrAddFormItemsDynamically />
  <EUINumberValidate />
  <EUISizeControl />
</template>
