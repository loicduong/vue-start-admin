<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code6 } from './data'

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

const tree = ref()

function setCheckedNodes() {
  tree.value.setCheckedNodes([
    {
      id: 5,
      label: 'Level two 2-1',
    },
    {
      id: 9,
      label: 'Level three 1-1-1',
    },
  ])
}

function setCheckedKeys() {
  tree.value.setCheckedKeys([3])
}

function resetChecked() {
  tree.value.setCheckedKeys([])
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#checking-tree-nodes" />
      Checking tree nodes
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElTree
        ref="tree"
        :data="data"
        show-checkbox
        default-expand-all
        node-key="id"
        highlight-current
        :props="defaultProps"
      />

      <div class="buttons">
        <ElButton>get by node</ElButton>
        <ElButton>get by key</ElButton>
        <ElButton @click="setCheckedNodes">
          set by node
        </ElButton>
        <ElButton @click="setCheckedKeys">
          set by key
        </ElButton>
        <ElButton @click="resetChecked">
          reset
        </ElButton>
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code6
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
