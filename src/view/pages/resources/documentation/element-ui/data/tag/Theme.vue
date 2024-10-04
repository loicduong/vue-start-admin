<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code5 } from './data'

const items = ref([
  { type: '', label: 'Tag 1' },
  { type: 'success', label: 'Tag 2' },
  { type: 'info', label: 'Tag 3' },
  { type: 'danger', label: 'Tag 4' },
  { type: 'warning', label: 'Tag 5' },
])
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#theme" />
      Theme
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Tag provide three different themes: <code>dark</code>、<code>light</code>
      and <code>plain</code>
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <div class="tag-group mb-5">
        <span class="tag-group__title" style="margin-right: 5px">Dark</span>
        <ElTag v-for="item in items" :key="item.label" :type="item.type" effect="dark">
          {{ item.label }}
        </ElTag>
      </div>
      <div class="tag-group">
        <span class="tag-group__title" style="margin-right: 5px">Plain</span>
        <ElTag v-for="item in items" :key="item.label" :type="item.type" effect="plain">
          {{ item.label }}
        </ElTag>
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code5
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
