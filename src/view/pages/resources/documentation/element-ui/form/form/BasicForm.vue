<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code1 } from './data'

const form = ref({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#basic-form" />
      Basic form
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      It includes all kinds of input items, such as <code>input</code>,
      <code>select</code>, <code>radio</code> and <code>checkbox</code>.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElForm ref="form" :model="form" label-width="120px">
        <ElFormItem label="Activity name">
          <ElInput v-model="form.name" />
        </ElFormItem>
        <ElFormItem label="Activity zone">
          <ElSelect
            v-model="form.region"
            placeholder="please select your zone"
          >
            <ElOption label="Zone one" value="shanghai" />
            <ElOption label="Zone two" value="beijing" />
          </ElSelect>
        </ElFormItem>
        <ElFormItem label="Activity time">
          <ElCol :span="11">
            <ElDatePicker
              v-model="form.date1"
              type="date"
              placeholder="Pick a date"
              style="width: 100%;"
            />
          </ElCol>
          <ElCol class="line" :span="2">
            -
          </ElCol>
          <ElCol :span="11">
            <ElTimePicker
              v-model="form.date2"
              placeholder="Pick a time"
              style="width: 100%;"
            />
          </ElCol>
        </ElFormItem>
        <ElFormItem label="Instant delivery">
          <ElSwitch v-model="form.delivery" />
        </ElFormItem>
        <ElFormItem label="Activity type">
          <ElCheckboxGroup v-model="form.type">
            <ElCheckbox label="Online activities" name="type" />
            <ElCheckbox label="Promotion activities" name="type" />
            <ElCheckbox label="Offline activities" name="type" />
            <ElCheckbox
              label="Simple brand exposure"
              name="type"
            />
          </ElCheckboxGroup>
        </ElFormItem>
        <ElFormItem label="Resources">
          <ElRadioGroup v-model="form.resource">
            <ElRadio label="Sponsor" />
            <ElRadio label="Venue" />
          </ElRadioGroup>
        </ElFormItem>
        <ElFormItem label="Activity form">
          <ElInput v-model="form.desc" type="textarea" />
        </ElFormItem>
        <ElFormItem>
          <ElButton type="primary">
            Create
          </ElButton>
          <ElButton>Cancel</ElButton>
        </ElFormItem>
      </ElForm>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code1
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
