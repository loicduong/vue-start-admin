<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code12 } from './data'

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

function formatter(row: any) {
  return row.address
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#sorting" />
      Sorting
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Sort the data to find or compare data quickly.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElTable :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }" style="width: 100%">
        <ElTableColumn prop="date" label="Date" sortable width="180" />
        <ElTableColumn prop="name" label="Name" width="180" />
        <ElTableColumn prop="address" label="Address" :formatter="formatter" />
      </ElTable>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code12
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
