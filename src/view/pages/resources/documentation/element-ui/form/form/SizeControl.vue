<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code7 } from './data'

const sizeForm = ref({
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
      <a href="#size-control" />
      Size control
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      All components in a Form inherit their <code>size</code> attribute from
      that Form. Similarly, FormItem also has a <code>size</code> attribute.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElForm :model="sizeForm" label-width="120px" size="mini">
        <ElFormItem label="Activity name">
          <ElInput v-model="sizeForm.name" />
        </ElFormItem>
        <ElFormItem label="Activity zone">
          <ElSelect
            v-model="sizeForm.region"
            placeholder="please select your zone"
          >
            <ElOption label="Zone one" value="shanghai" />
            <ElOption label="Zone two" value="beijing" />
          </ElSelect>
        </ElFormItem>
        <ElFormItem label="Activity time">
          <ElCol :span="11">
            <ElDatePicker
              v-model="sizeForm.date1"
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
              v-model="sizeForm.date2"
              placeholder="Pick a time"
              style="width: 100%;"
            />
          </ElCol>
        </ElFormItem>
        <ElFormItem label="Activity type">
          <ElCheckboxGroup v-model="sizeForm.type">
            <ElCheckboxButton
              label="Online activities"
              name="type"
            />
            <ElCheckboxButton
              label="Promotion activities"
              name="type"
            />
          </ElCheckboxGroup>
        </ElFormItem>
        <ElFormItem label="Resources">
          <ElRadioGroup v-model="sizeForm.resource" size="medium">
            <ElRadio border label="Sponsor" />
            <ElRadio border label="Venue" />
          </ElRadioGroup>
        </ElFormItem>
        <ElFormItem size="large">
          <ElButton type="primary">
            Create
          </ElButton>
          <ElButton>Cancel</ElButton>
        </ElFormItem>
      </ElForm>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code7
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
