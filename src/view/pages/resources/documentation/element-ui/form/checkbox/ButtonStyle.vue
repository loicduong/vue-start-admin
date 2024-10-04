<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code5 } from './data'

const checkboxGroup1 = ref(['Shanghai'])
const checkboxGroup2 = ref(['Shanghai'])
const checkboxGroup3 = ref(['Shanghai'])
const checkboxGroup4 = ref(['Shanghai'])
const cities = ref(['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'])
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#button-style" />
      Button style
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Checkbox with button styles.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <div>
        <ElCheckboxGroup v-model="checkboxGroup1">
          <ElCheckboxButton
            v-for="city in cities"
            :key="city"
            :label="city"
          >
            {{ city }}
          </ElCheckboxButton>
        </ElCheckboxGroup>
      </div>
      <div style="margin-top: 20px">
        <ElCheckboxGroup v-model="checkboxGroup2" size="medium">
          <ElCheckboxButton
            v-for="city in cities"
            :key="city"
            :label="city"
          >
            {{ city }}
          </ElCheckboxButton>
        </ElCheckboxGroup>
      </div>
      <div style="margin-top: 20px">
        <ElCheckboxGroup v-model="checkboxGroup3" size="small">
          <ElCheckboxButton
            v-for="city in cities"
            :key="city"
            :label="city"
            :disabled="city === 'Beijing'"
          >
            {{ city }}
          </ElCheckboxButton>
        </ElCheckboxGroup>
      </div>
      <div style="margin-top: 20px">
        <ElCheckboxGroup v-model="checkboxGroup4" size="mini" disabled>
          <ElCheckboxButton
            v-for="city in cities"
            :key="city"
            :label="city"
          >
            {{ city }}
          </ElCheckboxButton>
        </ElCheckboxGroup>
      </div>

      <CodeHighlighter lang="html">
        {{ code5 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
