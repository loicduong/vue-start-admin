<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code7 } from './data'

let id = 1000

const data = ref(JSON.parse(JSON.stringify([
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
])))

function append(data: any) {
  const newChild = { id: id++, label: 'testtest', children: [] }
  if (!data.children) {
    data.children = []
  }
  data.children.push(newChild)
  data.value = [...data.value]
}

function remove(node: any, data: any) {
  const parent = node.parent
  const children = parent.data.children || parent.data
  const index = children.findIndex((d: any) => d.id === data.id)
  children.splice(index, 1)
  data.value = [...data.value]
}

function renderContent(h: any, { node, data }: any) {
  return h(
    'span',
    {
      class: 'custom-tree-node',
    },
    h('span', null, node.label),
    h(
      'span',
      null,
      h(
        'a',
        {
          onClick: () => append(data),
        },
        'Append ',
      ),
      h(
        'a',
        {
          onClick: () => remove(node, data),
        },
        'Delete',
      ),
    ),
  )
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#custom-node-content" />
      Custom node content
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      The content of tree nodes can be customized, so you can add icons or
      buttons as you will
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <div class="custom-tree-container">
        <div class="block">
          <p>Using render-content</p>
          <ElTree
            :data="data"
            show-checkbox
            node-key="id"
            default-expand-all
            :expand-on-click-node="false"
            :render-content="renderContent"
          />
        </div>
        <div class="block">
          <p>Using scoped slot</p>
          <ElTree :data="data" show-checkbox node-key="id" default-expand-all :expand-on-click-node="false">
            <template #default="{ node }">
              <span class="custom-tree-node">
                <span>{{ node.label }}</span>
                <span>
                  <a @click="append(data)">
                    Append
                  </a>
                  <a @click="remove(node, data)">
                    Delete
                  </a>
                </span>
              </span>
            </template>
          </ElTree>
        </div>
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code7
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
