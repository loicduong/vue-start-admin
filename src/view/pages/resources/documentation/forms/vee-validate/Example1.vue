<script setup lang="ts">
import CodeHighlighter2 from '@/view/content/highlighters/CodeHighlighter2.vue'
import {
  example1Html,
  example1Js,
} from '@/view/pages/resources/documentation/forms/vee-validate/codes'
import { useField } from 'vee-validate'

function isRequired(value: string) {
  if (value && value.trim()) {
    return true
  }

  return 'This is required'
}

const { errorMessage, value } = useField('fieldName', isRequired)
</script>

<template>
  <!-- begin::Section -->
  <div class="pb-10">
    <!-- begin::Heading -->
    <h1 id="overview" class="anchor fw-bolder mb-5">
      <a href="#example1" />
      Field-level Validation
    </h1>
    <!-- end::Heading -->
    <!-- begin::Block -->
    <div class="py-5">
      <p>
        You can define validation rules for your fields using the
        <b>useField</b> composition API function, your rules can be as simple as
        a function that accepts the current value and returns an error message.
      </p>

      <div class="rounded border p-10 my-10">
        <input
          id="example1VeeValidate"
          v-model="value"
          type="text"
          class="form-control form-control-solid"
          placeholder="Interact with this field"
        >
        <span class="text-danger">{{ errorMessage }}</span>

        <CodeHighlighter2>
          <template #html>
            {{ example1Html }}
          </template>
          <template #js>
            {{ example1Js }}
          </template>
        </CodeHighlighter2>
      </div>
      <p>
        The validation happens automatically when <b>value</b> binding changes,
        meaning you can use <b>useField</b> to trigger validation for any kind
        of data and not just for inputs.
      </p>
    </div>
    <!-- end::Block -->
  </div>
  <!-- end::Card -->
</template>
