<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code4 } from './data'

const checkAll = ref(false)

const checkedCities = ref(['Shanghai', 'Beijing'])

const isIndeterminate = ref(true)

const cities = ref(['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'])

function handleCheckAllChange(val: any) {
  checkedCities.value = val ? cities.value : []
  isIndeterminate.value = false
}

function handleCheckedCitiesChange(value: any) {
  const checkedCount = value.length
  checkAll.value = checkedCount === cities.value.length
  isIndeterminate.value
    = checkedCount > 0 && checkedCount < cities.value.length
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#indeterminate" />
      Indeterminate
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      The <code>indeterminate</code> property can help you to achieve a 'check
      all' effect.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElCheckbox
        v-model="checkAll"
        :indeterminate="isIndeterminate"
        @change="handleCheckAllChange"
      >
        Check all
      </ElCheckbox>
      <div style="margin: 15px 0;" />
      <ElCheckboxGroup
        v-model="checkedCities"
        @change="handleCheckedCitiesChange"
      >
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
