<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code4 } from './data'

const ruleForm = ref({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const rules = ref({
  name: [
    {
      required: true,
      message: 'Please input Activity name',
      trigger: 'blur',
    },
    {
      min: 3,
      max: 5,
      message: 'Length should be 3 to 5',
      trigger: 'blur',
    },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    {
      required: true,
      message: 'Please input activity form',
      trigger: 'blur',
    },
  ],
})

const ruleFormRef = ref()

function resetForm() {
  ruleFormRef.value.resetFields()
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#validation" />
      Validation
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Form component allows you to verify your data, helping you find and
      correct errors.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElForm
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <ElFormItem label="Activity name" prop="name">
          <ElInput v-model="ruleForm.name" />
        </ElFormItem>
        <ElFormItem label="Activity zone" prop="region">
          <ElSelect v-model="ruleForm.region" placeholder="Activity zone">
            <ElOption label="Zone one" value="shanghai" />
            <ElOption label="Zone two" value="beijing" />
          </ElSelect>
        </ElFormItem>
        <ElFormItem label="Activity time" required>
          <ElCol :span="11">
            <ElFormItem prop="date1">
              <ElDatePicker
                v-model="ruleForm.date1"
                type="date"
                placeholder="Pick a date"
                style="width: 100%;"
              />
            </ElFormItem>
          </ElCol>
          <ElCol class="line" :span="2">
            -
          </ElCol>
          <ElCol :span="11">
            <ElFormItem prop="date2">
              <ElTimePicker
                v-model="ruleForm.date2"
                placeholder="Pick a time"
                style="width: 100%;"
              />
            </ElFormItem>
          </ElCol>
        </ElFormItem>
        <ElFormItem label="Instant delivery" prop="delivery">
          <ElSwitch v-model="ruleForm.delivery" />
        </ElFormItem>
        <ElFormItem label="Activity type" prop="type">
          <ElCheckboxGroup v-model="ruleForm.type">
            <ElCheckbox label="Online activities" name="type" />
            <ElCheckbox label="Promotion activities" name="type" />
            <ElCheckbox label="Offline activities" name="type" />
            <ElCheckbox
              label="Simple brand exposure"
              name="type"
            />
          </ElCheckboxGroup>
        </ElFormItem>
        <ElFormItem label="Resources" prop="resource">
          <ElRadioGroup v-model="ruleForm.resource">
            <ElRadio label="Sponsorship" />
            <ElRadio label="Venue" />
          </ElRadioGroup>
        </ElFormItem>
        <ElFormItem label="Activity form" prop="desc">
          <ElInput v-model="ruleForm.desc" type="textarea" />
        </ElFormItem>
        <ElFormItem>
          <ElButton type="primary">
            Create
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
