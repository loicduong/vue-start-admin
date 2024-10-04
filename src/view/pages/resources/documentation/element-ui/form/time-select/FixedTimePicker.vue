<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code1 } from './data'

const value = ref('')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#fixed-time-picker" />
      Fixed time picker
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Provide a list of fixed time for users to choose.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElTimeSelect
        v-model="value"
        start="08:30"
        step="00:15"
        end="18:30"
        placeholder="Select time"
      />

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code1
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
