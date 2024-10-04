<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code17 } from './data'

const tableData = ref([
  {
    id: 1,
    date: '2016-05-02',
    name: 'wangxiaohu',
  },
  {
    id: 2,
    date: '2016-05-04',
    name: 'wangxiaohu',
  },
  {
    id: 3,
    date: '2016-05-01',
    name: 'wangxiaohu',
    children: [
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu',
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu',
      },
    ],
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu',
  },
])

const tableData1 = ref([
  {
    id: 1,
    date: '2016-05-02',
    name: 'wangxiaohu',
  },
  {
    id: 2,
    date: '2016-05-04',
    name: 'wangxiaohu',
  },
  {
    id: 3,
    date: '2016-05-01',
    name: 'wangxiaohu',
    hasChildren: true,
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu',
  },
])

function load(tree: any, treeNode: any, resolve: any) {
  setTimeout(() => {
    resolve([
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu',
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu',
      },
    ])
  }, 1000)
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#tree-data-and-lazy-mode" />
      Tree data and lazy mode
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <div>
        <ElTable :data="tableData" style="width: 100%;margin-bottom: 20px;" row-key="id" border default-expand-all>
          <ElTableColumn prop="date" label="date" sortable width="180" />
          <ElTableColumn prop="name" label="Name" sortable width="180" />
        </ElTable>

        <ElTable
          :data="tableData1"
          style="width: 100%"
          row-key="id"
          border
          lazy
          :load="load"
          :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        >
          <ElTableColumn prop="date" label="Date" width="180" />
          <ElTableColumn prop="name" label="Name" width="180" />
        </ElTable>
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code17
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
