<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code6 } from './data'

const numberValidateForm = ref({
  age: '',
})

const numberValidateFormRef = ref()

function resetForm() {
  numberValidateFormRef.value.resetFields()
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#number-validate" />
      Number Validate
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElForm
        ref="numberValidateFormRef"
        :model="numberValidateForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <ElFormItem
          label="age"
          prop="age"
          :rules="[
            { required: true, message: 'age is required' },
            { type: 'number', message: 'age must be a number' },
          ]"
        >
          <ElInput
            v-model.number="numberValidateForm.age"
            type="age"
            autocomplete="off"
          />
        </ElFormItem>
        <ElFormItem>
          <ElButton type="primary">
            Submit
          </ElButton>
          <ElButton @click="resetForm">
            Reset
          </ElButton>
        </ElFormItem>
      </ElForm>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code6
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
