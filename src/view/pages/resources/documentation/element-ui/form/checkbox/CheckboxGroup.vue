<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code2 } from './data'

const checkList = ref(['selected and disabled', 'Option A'])
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#checkbox-group" />
      Checkbox group
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      It is used for multiple checkboxes which are bound in one group, and
      indicates whether one option is selected by checking if it is checked.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElCheckboxGroup v-model="checkList">
        <ElCheckbox label="Option A" />
        <ElCheckbox label="Option B" />
        <ElCheckbox label="Option C" />
        <ElCheckbox label="disabled" disabled />
        <ElCheckbox label="selected and disabled" disabled />
      </ElCheckboxGroup>

      <CodeHighlighter lang="html">
        {{ code2 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
