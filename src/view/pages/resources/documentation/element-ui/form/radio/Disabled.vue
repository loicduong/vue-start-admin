<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code2 } from './data'

const radio = ref('selected and disabled')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#disabled" />
      Disabled
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      <code>disabled</code> attribute is used to disable the radio.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElRadio v-model="radio" disabled label="disabled">
        Option A
      </ElRadio>
      <ElRadio v-model="radio" disabled label="selected and disabled">
        Option B
      </ElRadio>

      <CodeHighlighter lang="html">
        {{ code2 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
