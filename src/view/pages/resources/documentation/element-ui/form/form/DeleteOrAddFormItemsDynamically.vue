<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code5 } from './data'

const dynamicValidateForm = ref({
  domains: [
    {
      key: 1,
      value: '',
    },
  ],
  email: '',
})

const dynamicValidateFormRef = ref()

function resetForm() {
  dynamicValidateFormRef.value.resetFields()
}

function removeDomain(item: any) {
  const index = dynamicValidateForm.value.domains.indexOf(item)
  if (index !== -1) {
    dynamicValidateForm.value.domains.splice(index, 1)
  }
}

function addDomain() {
  dynamicValidateForm.value.domains.push({
    key: Date.now(),
    value: '',
  })
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#delete-or-add-form-items-dynamically" />
      Delete or add form items dynamically
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElForm
        ref="dynamicValidateFormRef"
        :model="dynamicValidateForm"
        label-width="120px"
        class="demo-dynamic"
      >
        <ElFormItem
          prop="email"
          label="Email"
          :rules="[
            {
              required: true,
              message: 'Please input email address',
              trigger: 'blur',
            },
            {
              type: 'email',
              message: 'Please input correct email address',
              trigger: ['blur', 'change'],
            },
          ]"
        >
          <ElInput v-model="dynamicValidateForm.email" />
        </ElFormItem>
        <ElFormItem
          v-for="(domain, index) in dynamicValidateForm.domains"
          :key="domain.key"
          :label="`Domain${index}`"
          :prop="`domains.${index}.value`"
          :rules="{
            required: true,
            message: 'domain can not be null',
            trigger: 'blur',
          }"
        >
          <ElInput v-model="domain.value" /><ElButton @click.prevent="removeDomain(domain)">
            Delete
          </ElButton>
        </ElFormItem>
        <ElFormItem>
          <ElButton type="primary">
            Submit
          </ElButton>
          <ElButton @click="addDomain">
            New domain
          </ElButton>
          <ElButton @click="resetForm">
            Reset
          </ElButton>
        </ElFormItem>
      </ElForm>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code5
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
