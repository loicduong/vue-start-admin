<script setup lang="ts">
import CodeHighlighter2 from '@/view/content/highlighters/CodeHighlighter2.vue'
import {
  example3Html,
  example3Js,
} from '@/view/pages/resources/documentation/forms/vee-validate/codes'
import { useField, useForm } from 'vee-validate'

// Define a validation schema
const simpleSchema = {
  email(value: string) {
    if (value && value.trim()) {
      return true
    }

    return 'Email is required'
  },
  password(value: string) {
    if (value && value.trim()) {
      return true
    }

    return 'Password is required'
  },
}

// Create a form context with the validation schema
useForm({
  validationSchema: simpleSchema,
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
      <a href="#example3" />
      Form-level Validation
    </h1>
    <!-- end::Heading -->
    <!-- begin::Block -->
    <div class="py-5">
      <p>
        Instead of providing validations for each field individually which can
        clutter your code, you can instead define the validation schema using
        the <b>useForm</b> function by passing a <b>validationSchema</b> option.
        Each field will automatically be associated with it and will be
        validated accordingly.
      </p>

      <p>
        A simple validation schema can be an object containing field names as
        keys and validation functions as the value for those keys.
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
            {{ example3Html }}
          </template>
          <template #js>
            {{ example3Js }}
          </template>
        </CodeHighlighter2>
      </div>
    </div>
    <!-- end::Block -->
  </div>
  <!-- end::Card -->
</template>
