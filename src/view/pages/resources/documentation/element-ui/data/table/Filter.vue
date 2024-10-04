<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code13 } from './data'

const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
])

const filterTable = ref()

function resetDateFilter() {
  filterTable.value.clearFilter('date')
}

function clearFilter() {
  filterTable.value.clearFilter()
}

function formatter(row: any) {
  return row.address
}

function filterTag(value: any, row: any) {
  return row.tag === value
}

function filterHandler(value: any, row: any, column: any) {
  const property = column.property
  return row[property] === value
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#filter" />
      Filter
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Filter the table to find desired data.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElButton @click="resetDateFilter">
        reset date filter
      </ElButton>
      <ElButton @click="clearFilter">
        reset all filters
      </ElButton>
      <ElTable ref="filterTable" row-key="date" :data="tableData" style="width: 100%">
        <ElTableColumn
          prop="date"
          label="Date"
          sortable
          width="180"
          column-key="date"
          :filters="[
            { text: '2016-05-01', value: '2016-05-01' },
            { text: '2016-05-02', value: '2016-05-02' },
            { text: '2016-05-03', value: '2016-05-03' },
            { text: '2016-05-04', value: '2016-05-04' },
          ]"
          :filter-method="filterHandler"
        />
        <ElTableColumn prop="name" label="Name" width="180" />
        <ElTableColumn prop="address" label="Address" :formatter="formatter" />
        <ElTableColumn
          prop="tag"
          label="Tag"
          width="100"
          :filters="[
            { text: 'Home', value: 'Home' },
            { text: 'Office', value: 'Office' },
          ]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
        >
          <template #default="scope">
            <ElTag :type="scope.row.tag === 'Home' ? 'primary' : 'success'" disable-transitions>
              {{ scope.row.tag
              }}
            </ElTag>
          </template>
        </ElTableColumn>
      </ElTable>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code13
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
