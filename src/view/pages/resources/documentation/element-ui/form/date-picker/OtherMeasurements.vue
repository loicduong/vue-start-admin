<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code2 } from './data'

const value1 = ref('')

const value2 = ref('')

const value3 = ref('')

const value4 = ref('')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#other-measurements" />
      Other measurements
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      You can choose week, month, year or multiple dates by extending the
      standard date picker component.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <div class="container">
        <div class="block mb-5">
          <span class="demonstration" style="margin-right: 5px">Week</span>
          <ElDatePicker
            v-model="value1"
            type="week"
            format="[Week] ww"
            placeholder="Pick a week"
          />
        </div>
        <div class="block mb-5">
          <span class="demonstration" style="margin-right: 5px">Month</span>
          <ElDatePicker
            v-model="value2"
            type="month"
            placeholder="Pick a month"
          />
        </div>
      </div>
      <div class="container">
        <div class="block mb-5">
          <span class="demonstration" style="margin-right: 5px">Year</span>
          <ElDatePicker
            v-model="value3"
            type="year"
            placeholder="Pick a year"
          />
        </div>
        <div class="block mb-5">
          <span class="demonstration" style="margin-right: 5px">Dates</span>
          <ElDatePicker
            v-model="value4"
            type="dates"
            placeholder="Pick one or more dates"
          />
        </div>
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code2
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
