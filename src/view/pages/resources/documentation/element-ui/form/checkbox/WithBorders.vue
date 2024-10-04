<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code6 } from './data'

const checked1 = ref(true)

const checked2 = ref(false)

const checked3 = ref(false)

const checked4 = ref(true)

const checkboxGroup1 = ref([])

const checkboxGroup2 = ref([])
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#with-borders" />
      With borders
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <div>
        <ElCheckbox v-model="checked1" label="Option1" border />
        <ElCheckbox v-model="checked2" label="Option2" border />
      </div>
      <div style="margin-top: 20px">
        <ElCheckbox
          v-model="checked3"
          label="Option1"
          border
          size="medium"
        />
        <ElCheckbox
          v-model="checked4"
          label="Option2"
          border
          size="medium"
        />
      </div>
      <div style="margin-top: 20px">
        <ElCheckboxGroup v-model="checkboxGroup1" size="small">
          <ElCheckbox label="Option1" border />
          <ElCheckbox label="Option2" border disabled />
        </ElCheckboxGroup>
      </div>
      <div style="margin-top: 20px">
        <ElCheckboxGroup v-model="checkboxGroup2" size="mini" disabled>
          <ElCheckbox label="Option1" border />
          <ElCheckbox label="Option2" border />
        </ElCheckboxGroup>
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code6
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
