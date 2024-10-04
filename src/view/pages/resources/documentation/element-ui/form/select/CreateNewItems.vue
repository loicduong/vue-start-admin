<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code10 } from './data'

const options = ref([
  {
    value: 'HTML',
    label: 'HTML',
  },
  {
    value: 'CSS',
    label: 'CSS',
  },
  {
    value: 'JavaScript',
    label: 'JavaScript',
  },
])

const value = ref([])
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#create-new-items" />
      Create new items
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Create and select new items that are not included in select options
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElSelect
        v-model="value"
        multiple
        filterable
        allow-create
        default-first-option
        placeholder="Choose tags for your article"
      >
        <ElOption
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </ElSelect>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code10
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
