<script setup lang="ts">
import CodeHighlighter2 from '@/view/content/highlighters/CodeHighlighter2.vue'
import Multiselect from '@vueform/multiselect'
import { ref } from 'vue'

const example1 = ref({
  value: 0,
  options: ['Batman', 'Robin', 'Joker'],
})

const htmlCode = `<Multiselect v-model="example1.value" v-bind="example1"></Multiselect>`

const jsCode = `const example1 = ref({
  value: 0,
  options: ["Batman", "Robin", "Joker"]
});`
</script>

<template>
  <!-- begin::Section -->
  <div class="pb-10">
    <!-- begin::Heading -->
    <h1 id="overview" class="anchor fw-bolder mb-5">
      <a href="#example1" />
      Single select
    </h1>
    <!-- end::Heading -->
    <!-- begin::Block -->
    <div class="py-5">
      <div class="bg-dark text-white rounded-1 mb-2 p-3">
        Data: {{ example1.value }}
      </div>
      <Multiselect
        v-model="example1.value"
        :options="example1.options"
      />
      <CodeHighlighter2>
        <template #html>
          {{ htmlCode }}
        </template>
        <template #js>
          {{ jsCode }}
        </template>
      </CodeHighlighter2>
    </div>
    <!-- end::Block -->
  </div>
  <!-- end::Card -->
</template>
