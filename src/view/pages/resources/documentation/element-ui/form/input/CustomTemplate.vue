<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { onMounted, ref } from 'vue'
import { code11 } from './data'

const links = ref<{ value: string, link: string }[]>([])

const state = ref<string>('')

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
    ? links.value.filter(createFilter(queryString))
    : links.value
  // call callback function to return suggestion objects
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
  links.value = loadAll()
})
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#custom-template" />
      Custom template
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Customize how suggestions are displayed.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElAutocomplete
        v-model="state"
        popper-class="my-autocomplete"
        :fetch-suggestions="querySearch"
        placeholder="Please input"
      >
        <template #suffix>
          <i class="el-icon-edit el-input__icon" />
        </template>
        <template #default="{ item }">
          <div class="value">
            {{ item.value }}
          </div>
          <span class="link">{{ item.link }}</span>
        </template>
      </ElAutocomplete>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code11
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>

<style>
.my-autocomplete li {
  line-height: normal;
  padding: 7px;
}
.my-autocomplete li .name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.my-autocomplete li .addr {
  font-size: 12px;
  color: #b4b4b4;
}
.my-autocomplete li .highlighted .addr {
  color: #ddd;
}
</style>
