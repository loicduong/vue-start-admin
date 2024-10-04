<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code11 } from './data'

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
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
])

const multipleSelection = ref([])
const multipleTable = ref()

function toggleSelection(rows?: any) {
  if (rows) {
    rows.forEach((row: any) => {
      multipleTable.value.toggleRowSelection(row)
    })
  }
  else {
    multipleTable.value.clearSelection()
  }
}

function handleSelectionChange(val: any) {
  multipleSelection.value = val
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#mulitple-select" />
      Multiple select
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      You can also select multiple rows.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElTable ref="multipleTable" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
        <ElTableColumn type="selection" width="55" />
        <ElTableColumn label="Date" width="120">
          <template #default="scope">
            {{ scope.row.date }}
          </template>
        </ElTableColumn>
        <ElTableColumn property="name" label="Name" width="120" />
        <ElTableColumn property="address" label="Address" show-overflow-tooltip />
      </ElTable>
      <div style="margin-top: 20px">
        <ElButton @click="toggleSelection([tableData[1], tableData[2]])">
          Toggle selection status of second and third
          rows
        </ElButton>
        <ElButton @click="toggleSelection()">
          Clear selection
        </ElButton>
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code11
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
