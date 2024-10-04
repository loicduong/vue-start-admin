<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref, watch } from 'vue'
import { code8 } from './data'

const filterText = ref('')

const tree = ref()

const data = ref([
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
    ],
  },
])

const defaultProps = ref({
  children: 'children',
  label: 'label',
})

watch(() => filterText.value, (val) => {
  tree.value.filter(val)
})

function filterNode(value: string, data: any) {
  if (!value)
    return true
  return data.label.includes(value)
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#tree-node-filtering" />
      Tree node filtering
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Tree nodes can be filtered
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElInput v-model="filterText" placeholder="Filter keyword" />

      <ElTree
        ref="tree"
        class="filter-tree"
        :data="data"
        :props="defaultProps"
        default-expand-all
        :filter-node-method="filterNode"
      />

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code8
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
