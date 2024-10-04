<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code3 } from './data'

const radio = ref(3)
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#radio-button-group" />
      Radio button group
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Suitable for choosing from some mutually exclusive options.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElRadioGroup v-model="radio">
        <ElRadio :label="3">
          Option A
        </ElRadio>
        <ElRadio :label="6">
          Option B
        </ElRadio>
        <ElRadio :label="9">
          Option C
        </ElRadio>
      </ElRadioGroup>

      <CodeHighlighter lang="html">
        {{ code3 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
