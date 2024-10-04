<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code10 } from './data'

const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
])

const currentRow = ref(null)
const singleTable = ref()

function setCurrent(row?: any) {
  singleTable.value.setCurrentRow(row)
}

function handleCurrentChange(val: any) {
  currentRow.value = val
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#single-select" />
      Single select
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Basic table is just for data display.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElTable
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        style="width: 100%"
        @current-change="handleCurrentChange"
      >
        <ElTableColumn type="index" width="50" />
        <ElTableColumn property="date" label="Date" width="120" />
        <ElTableColumn property="name" label="Name" width="120" />
        <ElTableColumn property="address" label="Address" />
      </ElTable>
      <div style="margin-top: 20px">
        <ElButton @click="setCurrent(tableData[1])">
          Select second row
        </ElButton>
        <ElButton @click="setCurrent()">
          Clear selection
        </ElButton>
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code10
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
