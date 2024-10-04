<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIAutocomplete from '@/view/pages/resources/documentation/element-ui/form/input/Autocomplete.vue'
import EUIAutosizeTextarea from '@/view/pages/resources/documentation/element-ui/form/input/AutosizeTextarea.vue'
import EUIBasicUsage from '@/view/pages/resources/documentation/element-ui/form/input/BasicUsage.vue'
import EUIClearable from '@/view/pages/resources/documentation/element-ui/form/input/Clearable.vue'
import EUICustomTemplate from '@/view/pages/resources/documentation/element-ui/form/input/CustomTemplate.vue'
import EUIDisabled from '@/view/pages/resources/documentation/element-ui/form/input/Disabled.vue'
import EUIInputWithIcon from '@/view/pages/resources/documentation/element-ui/form/input/InputWithIcon.vue'
import EUILimitLength from '@/view/pages/resources/documentation/element-ui/form/input/LimitLength.vue'
import EUIMixedInput from '@/view/pages/resources/documentation/element-ui/form/input/MixedInput.vue'
import EUIPasswordBox from '@/view/pages/resources/documentation/element-ui/form/input/PasswordBox.vue'
import EUIRemoteSearch from '@/view/pages/resources/documentation/element-ui/form/input/RemoteSearch.vue'
import EUISizes from '@/view/pages/resources/documentation/element-ui/form/input/Sizes.vue'
import EUITextarea from '@/view/pages/resources/documentation/element-ui/form/input/Textarea.vue'

setCurrentPageTitle('Input')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#input" />
      Input
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      A group of options for multiple choices.
    </div>
    <!-- end::Block -->

    <div class="py-5">
      <div class="rounded py-5 px-5 bg-light-danger">
        <div class="my-5">
          Input is a controlled component, it
          <b>always shows Vue binding value.</b>
        </div>
        <div class="my-5">
          Under normal circumstances, <code>input</code> event should be
          handled. Its handler should update component's binding value (or use
          <code>v-model</code>). Otherwise, input box's value will not change.
        </div>
        <div class="my-5">
          Do not support <code>v-model</code> modifiers.
        </div>
      </div>
    </div>
  </div>
  <EUIBasicUsage />
  <EUIDisabled />
  <EUIClearable />
  <EUIPasswordBox />
  <EUIInputWithIcon />
  <EUITextarea />
  <EUIAutosizeTextarea />
  <EUIMixedInput />
  <EUISizes />
  <EUIAutocomplete />
  <EUICustomTemplate />
  <EUIRemoteSearch />
  <EUILimitLength />
</template>
