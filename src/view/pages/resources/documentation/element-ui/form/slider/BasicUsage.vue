<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code1 } from './data'

const value1 = ref(0)

const value2 = ref(50)

const value3 = ref(36)

const value4 = ref(48)

const value5 = ref(42)

function formatTooltip(val: number) {
  return val / 100
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#basic-usage" />
      Basic usage
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      The current value is displayed when the slider is being dragged.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <div class="block">
        <span class="demonstration">Default value</span>
        <ElSlider v-model="value1" />
      </div>
      <div class="block">
        <span class="demonstration">Customized initial value</span>
        <ElSlider v-model="value2" />
      </div>
      <div class="block">
        <span class="demonstration">Hide Tooltip</span>
        <ElSlider v-model="value3" :show-tooltip="false" />
      </div>
      <div class="block">
        <span class="demonstration">Format Tooltip</span>
        <ElSlider v-model="value4" :format-tooltip="formatTooltip" />
      </div>
      <div class="block">
        <span class="demonstration">Disabled</span>
        <ElSlider v-model="value5" disabled />
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code1
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
