<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import CodeHighlighter2 from '@/view/content/highlighters/CodeHighlighter2.vue'
import {
  example4Html,
  example4Js1,
  example4Js2,
} from '@/view/pages/resources/documentation/forms/vee-validate/codes'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

// Define a validation schema
const schema = yup.object({
  email: yup
    .string()
    .required()
    .email(),
  password: yup
    .string()
    .required()
    .min(8),
})

// Create a form context with the validation schema
useForm({
  validationSchema: schema,
})

// No need to define rules for fields
const { value: email, errorMessage: emailError } = useField('email')
const { value: password, errorMessage: passwordError } = useField(
  'password',
)
</script>

<template>
  <!-- begin::Section -->
  <div class="pb-10">
    <!-- begin::Heading -->
    <h1 id="overview" class="anchor fw-bolder mb-5">
      <a href="#example4" />
      Validation schemas with yup
    </h1>
    <!-- end::Heading -->
    <!-- begin::Block -->
    <div class="py-5">
      <p>
        Fortunately there is already a very neat way to build validation schemas
        for your forms by using <b>yup</b>, it allows you create validation
        objects like this:
      </p>

      <CodeHighlighter lang="js">
        {{ example4Js1 }}
      </CodeHighlighter>

      <p>
        vee-validate has built-in support for yup schemas, You can pass your
        schemas to the <b>useForm</b> function using the same
        <b>validationSchema</b> option:
      </p>

      <div class="rounded border p-10">
        <div class="mb-10">
          <label for="emailField" class="form-label">Email address</label>
          <input
            id="emailField"
            v-model="email"
            type="email"
            name="email"
            class="form-control form-control-solid"
            placeholder="email"
          >
          <span class="text-danger">{{ emailError }}</span>
        </div>

        <label for="passwordField" class="form-label">Password</label>
        <input
          id="passwordField"
          v-model="password"
          type="password"
          name="password"
          class="form-control form-control-solid"
          placeholder="password"
        >
        <span class="text-danger">{{ passwordError }}</span>

        <CodeHighlighter2>
          <template #html>
            {{ example4Html }}
          </template>
          <template #js>
            {{ example4Js2 }}
          </template>
        </CodeHighlighter2>
      </div>
    </div>
    <!-- end::Block -->
  </div>
  <!-- end::Card -->
</template>
