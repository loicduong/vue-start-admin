<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code2 } from './data'

const checked1 = ref(false)
const checked2 = ref(true)
</script>

<template>
  <div className="mb-10">
    <!-- begin::Heading -->
    <h2 className="anchor fw-bolder mb-5">
      <a href="#disabled-state" />
      Disabled State
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div className="py-5">
      Disabled state for checkbox.
    </div>
    <!-- end::Block -->

    <div className="rounded border p-10">
      <ElCheckbox v-model="checked1" disabled>
        Option
      </ElCheckbox>
      <ElCheckbox v-model="checked2" disabled>
        Option
      </ElCheckbox>

      <CodeHighlighter lang="html">
        {{ code2 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
