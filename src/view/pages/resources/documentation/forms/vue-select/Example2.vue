<script setup lang="ts">
import CodeHighlighter2 from '@/view/content/highlighters/CodeHighlighter2.vue'
import Multiselect from '@vueform/multiselect'
import { ref } from 'vue'

const example2 = ref({
  mode: 'multiple' as const,
  value: ['robin'],
  options: {
    batman: 'Batman',
    robin: 'Robin',
    joker: 'Joker',
  },
})

const htmlCode = ` <Multiselect v-model="example2.value" v-bind="example2"></Multiselect>`

const jsCode = `const example2 = ref({
      mode: "multiple",
      value: ["robin"],
      options: {
        batman: "Batman",
        robin: "Robin",
        joker: "Joker"
      }
    });`
</script>

<template>
  <!-- begin::Section -->
  <div class="pb-10">
    <!-- begin::Heading -->
    <h1 id="overview" class="anchor fw-bolder mb-5">
      <a href="#example2" />
      Multiselect with object options
    </h1>
    <!-- end::Heading -->
    <!-- begin::Block -->
    <div class="py-5">
      <div class="bg-dark text-white rounded-1 mb-2 p-3">
        Data: {{ example2.value }}
      </div>
      <Multiselect
        v-model="example2.value"
        :mode="example2.mode"
        :options="example2.options"
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
