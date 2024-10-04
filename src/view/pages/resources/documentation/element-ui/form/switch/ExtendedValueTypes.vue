<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code3 } from './data'

const value = ref('100')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#extended-value-types" />
      Extended value types
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElTooltip :content="`Switch value: ${value}`" placement="top">
        <ElSwitch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-value="100"
          inactive-value="0"
        />
      </ElTooltip>

      <CodeHighlighter lang="html">
        {{ code3 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
