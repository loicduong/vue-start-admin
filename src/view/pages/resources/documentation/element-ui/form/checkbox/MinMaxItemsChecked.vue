<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code4 } from './data'

const checkedCities = ref(['Shanghai', 'Beijing'])

const cities = ref(['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'])
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#min-max-items-checked" />
      Minimum / Maximum items checked
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      The <code>min</code> and <code>max</code> properties can help you to limit
      the number of checked items.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElCheckboxGroup v-model="checkedCities" :min="1" :max="2">
        <ElCheckbox v-for="city in cities" :key="city" :label="city">
          {{
            city
          }}
        </ElCheckbox>
      </ElCheckboxGroup>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code4
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
