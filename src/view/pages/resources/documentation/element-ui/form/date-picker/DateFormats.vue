<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code5 } from './data'

const value1 = ref('')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#date-formats" />
      Date Formats
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Use <code>format</code> to control displayed text's format in the input
      box.<br>

      By default, the component accepts and emits a
      <code>Date</code> object.<br>

      Check the list here of all available formats of Day.js.<br>
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <div class="block">
        <span class="demonstration">Emits Date object</span>
        <div class="demonstration">
          Value: {{ value1 }}
        </div>
        <ElDatePicker
          v-model="value1"
          type="date"
          placeholder="Pick a Date"
          format="YYYY/MM/DD"
        />
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code5
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
