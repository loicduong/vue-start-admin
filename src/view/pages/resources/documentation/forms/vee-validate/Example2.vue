<script setup lang="ts">
import CodeHighlighter2 from '@/view/content/highlighters/CodeHighlighter2.vue'
import {
  example2Html,
  example2Js,
} from '@/view/pages/resources/documentation/forms/vee-validate/codes'
import { useField } from 'vee-validate'
import * as yup from 'yup'

const { errorMessage, value } = useField(
  'fieldName',
  yup
    .string()
    .required()
    .min(8),
)
</script>

<template>
  <!-- begin::Section -->
  <div class="pb-10">
    <!-- begin::Heading -->
    <h1 id="overview" class="anchor fw-bolder mb-5">
      <a href="#example2" />
      Validating fields with yup
    </h1>
    <!-- end::Heading -->
    <!-- begin::Block -->
    <div class="py-5">
      <p>
        yup is a very popular, simple and powerful data validation library for
        JavaScript, you can use it in combination with vee-validate, You can use
        <b>yup</b> to define your validation rules for that field:
      </p>

      <div class="rounded border p-10">
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
            {{ example2Html }}
          </template>
          <template #js>
            {{ example2Js }}
          </template>
        </CodeHighlighter2>
      </div>
    </div>
    <!-- end::Block -->
  </div>
  <!-- end::Card -->
</template>
