<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code2 } from './data'

const formInline = ref({
  user: '',
  region: '',
})
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#inline-form" />
      Inline form
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      When the vertical space is limited and the form is relatively simple, you
      can put it in one line.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElForm :inline="true" :model="formInline" class="demo-form-inline">
        <ElFormItem label="Approved by">
          <ElInput
            v-model="formInline.user"
            placeholder="Approved by"
          />
        </ElFormItem>
        <ElFormItem label="Activity zone">
          <ElSelect v-model="formInline.region" placeholder="Activity zone">
            <ElOption label="Zone one" value="shanghai" />
            <ElOption label="Zone two" value="beijing" />
          </ElSelect>
        </ElFormItem>
        <ElFormItem>
          <ElButton type="primary">
            Query
          </ElButton>
        </ElFormItem>
      </ElForm>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code2
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
