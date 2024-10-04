<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code4 } from './data'

const ruleForm = ref({
  pass: '',
  checkPass: '',
  age: '',
})

const ruleFormRef = ref()

const rules = ref({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: checkAge, trigger: 'blur' }],
})

function checkAge(rule: any, value: any, callback: any) {
  if (!value) {
    return callback(new Error('Please input the age'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'))
    }
    else {
      if (value < 18) {
        callback(new Error('Age must be greater than 18'))
      }
      else {
        callback()
      }
    }
  }, 1000)
}

function validatePass(rule: any, value: any, callback: any) {
  if (value === '') {
    callback(new Error('Please input the password'))
  }
  else {
    if (ruleForm.value.checkPass !== '') {
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}

function validatePass2(rule: any, value: any, callback: any) {
  if (value === '') {
    callback(new Error('Please input the password again'))
  }
  else if (value !== ruleForm.value.pass) {
    callback(new Error('Two inputs don\'t match!'))
  }
  else {
    callback()
  }
}

function resetForm() {
  ruleFormRef.value.resetFields()
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#custom-validation-rules" />
      Custom validation rules
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      This example shows how to customize your own validation rules to finish a
      two-factor password verification.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElForm
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <ElFormItem label="Password" prop="pass">
          <ElInput
            v-model="ruleForm.pass"
            type="password"
            autocomplete="off"
          />
        </ElFormItem>
        <ElFormItem label="Confirm" prop="checkPass">
          <ElInput
            v-model="ruleForm.checkPass"
            type="password"
            autocomplete="off"
          />
        </ElFormItem>
        <ElFormItem label="Age" prop="age">
          <ElInput v-model.number="ruleForm.age" />
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
          code4
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
