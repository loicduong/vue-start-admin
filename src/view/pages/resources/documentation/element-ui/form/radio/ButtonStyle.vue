<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code4 } from './data'

const radio1 = ref('New York')

const radio2 = ref('New York')

const radio3 = ref('New York')

const radio4 = ref('New York')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#button-style" />
      Button style
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Radio with button styles.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <div>
        <ElRadioGroup v-model="radio1">
          <ElRadioButton label="New York" />
          <ElRadioButton label="Washington" />
          <ElRadioButton label="Los Angeles" />
          <ElRadioButton label="Chicago" />
        </ElRadioGroup>
      </div>
      <div style="margin-top: 20px">
        <ElRadioGroup v-model="radio2" size="medium">
          <ElRadioButton label="New York" />
          <ElRadioButton label="Washington" />
          <ElRadioButton label="Los Angeles" />
          <ElRadioButton label="Chicago" />
        </ElRadioGroup>
      </div>
      <div style="margin-top: 20px">
        <ElRadioGroup v-model="radio3" size="small">
          <ElRadioButton label="New York" />
          <ElRadioButton label="Washington" disabled />
          <ElRadioButton label="Los Angeles" />
          <ElRadioButton label="Chicago" />
        </ElRadioGroup>
      </div>
      <div style="margin-top: 20px">
        <ElRadioGroup v-model="radio4" disabled size="mini">
          <ElRadioButton label="New York" />
          <ElRadioButton label="Washington" />
          <ElRadioButton label="Los Angeles" />
          <ElRadioButton label="Chicago" />
        </ElRadioGroup>
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code4
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
