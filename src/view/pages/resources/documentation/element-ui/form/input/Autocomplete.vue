<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { onMounted, ref } from 'vue'
import { code10 } from './data'

const restaurants = ref<{ value: string, link: string }[]>([])

const state1 = ref<string>('')

const state2 = ref<string>('')

function createFilter(queryString: string) {
  return (restaurant: { value: string, link: string }) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase())
      === 0
    )
  }
}

function querySearch(queryString: string, cb: (results: any) => void) {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value
  // call callback function to return suggestions
  cb(results)
}

function loadAll() {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
  ]
}

onMounted(() => {
  restaurants.value = loadAll()
})
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#autocomplete" />
      Autocomplete
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      You can get some recommended tips based on the current input.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElRow class="demo-autocomplete">
        <ElCol :span="12">
          <div class="sub-title">
            list suggestions when activated
          </div>
          <ElAutocomplete
            v-model="state1"
            style="margin-top: 15px"
            class="inline-input"
            :fetch-suggestions="querySearch"
            placeholder="Please Input"
          />
        </ElCol>
        <ElCol :span="12">
          <div class="sub-title">
            list suggestions on input
          </div>
          <ElAutocomplete
            v-model="state2"
            style="margin-top: 15px"
            class="inline-input"
            :fetch-suggestions="querySearch"
            placeholder="Please Input"
            :trigger-on-focus="false"
          />
        </ElCol>
      </ElRow>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code10
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
