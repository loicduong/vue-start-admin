<script setup lang="ts">
import CodeHighlighter2 from '@/view/content/highlighters/CodeHighlighter2.vue'
import Multiselect from '@vueform/multiselect'
import { ref } from 'vue'

const example4 = ref({
  mode: 'tags' as const,
  value: ['batman'],
  options: [
    { value: 'batman', label: 'Batman' },
    { value: 'robin', label: 'Robin' },
    { value: 'joker', label: 'Joker' },
  ],
  searchable: true,
  createTag: true,
})

const htmlCode = ` <Multiselect v-model="example4.value" v-bind="example4"></Multiselect>`

const jsCode = `const example4 = ref({
      mode: "tags",
      value: ["batman"],
      options: [
        { value: "batman", label: "Batman" },
        { value: "robin", label: "Robin" },
        { value: "joker", label: "Joker" }
      ],
      searchable: true,
      createTag: true
    });`
</script>

<template>
  <!-- begin::Section -->
  <div class="pb-10">
    <!-- begin::Heading -->
    <h1 id="overview" class="anchor fw-bolder mb-5">
      <a href="#example4" />
      Tags with create, search and array of objects options
    </h1>
    <!-- end::Heading -->
    <!-- begin::Block -->
    <div class="py-5">
      <div class="bg-dark text-white rounded-1 mb-2 p-3">
        Data: {{ example4.value }}
      </div>
      <Multiselect
        v-model="example4.value"
        :mode="example4.mode"
        :options="example4.options"
        :searchable="example4.searchable"
        :create-tag="example4.createTag"
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
