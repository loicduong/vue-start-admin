<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { onMounted, ref } from 'vue'
import { code12 } from './data'

const links = ref<{ value: string, link: string }[]>([])

const state = ref('')

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

let timeout: NodeJS.Timeout

function createFilter(queryString: string) {
  return (restaurant: { value: string }) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase())
      === 0
    )
  }
}

function querySearchAsync(queryString: string, cb: (results: any[]) => void) {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value

  clearTimeout(timeout)
  timeout = setTimeout(() => {
    cb(results)
  }, 3000 * Math.random())
}

onMounted(() => {
  links.value = loadAll()
})
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#remote-search" />
      Remote search
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Search data from server-side.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElAutocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="Please input"
      />

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code12
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
