<script setup lang="ts">
import CodeHighlighter2 from '@/view/content/highlighters/CodeHighlighter2.vue'
import Multiselect from '@vueform/multiselect'
import { ref } from 'vue'

const example6 = ref({
  mode: 'multiple' as const,
  value: null,
  placeholder: 'Select your characters',
  options: {
    batman: 'Batman',
    robin: 'Robin',
    joker: 'Joker',
  },
})

const htmlCode = `<Multiselect
      v-model="example6.value"
      v-bind="example6"
    >
      <template v-slot:multiplelabel="{ values }">
        <div class="multiselect-multiple-label">
          {{ values.length }} characters selected
        </div>
      </template>
    </Multiselect>`

const jsCode = `const example6 = ref({
      mode: "multiple",
      value: null,
      placeholder: "Select your characters",
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
      <a href="#example6" />
      Multiselect with custom label slot
    </h1>
    <!-- end::Heading -->
    <!-- begin::Block -->
    <div class="py-5">
      <div class="bg-dark text-white rounded-1 mb-2 p-3">
        Data: {{ example6.value }}
      </div>
      <Multiselect
        v-model="example6.value"
        :mode="example6.mode"
        :options="example6.options"
        :placeholder="example6.placeholder"
      >
        <template #multiplelabel="{ values }">
          <div class="multiselect-multiple-label">
            {{ (values as any[])?.length }} characters selected
          </div>
        </template>
      </Multiselect>
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
