<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code3 } from './data'

const labelPosition = ref('right')

const formLabelAlign = ref({
  name: '',
  region: '',
  type: '',
})
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#alignment" />
      Alignment
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Depending on your design, there are several different ways to align your
      label element.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElRadioGroup v-model="labelPosition" size="small">
        <ElRadioButton label="left">
          Left
        </ElRadioButton>
        <ElRadioButton label="right">
          Right
        </ElRadioButton>
        <ElRadioButton label="top">
          Top
        </ElRadioButton>
      </ElRadioGroup>
      <div style="margin: 20px;" />
      <ElForm
        :label-position="labelPosition"
        label-width="100px"
        :model="formLabelAlign"
      >
        <ElFormItem label="Name">
          <ElInput v-model="formLabelAlign.name" />
        </ElFormItem>
        <ElFormItem label="Activity zone">
          <ElInput v-model="formLabelAlign.region" />
        </ElFormItem>
        <ElFormItem label="Activity form">
          <ElInput v-model="formLabelAlign.type" />
        </ElFormItem>
      </ElForm>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code3
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
