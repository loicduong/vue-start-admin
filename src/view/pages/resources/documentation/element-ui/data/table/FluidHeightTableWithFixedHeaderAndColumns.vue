<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code8 } from './data'

const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
])

function deleteRow(index: number, rows: any[]) {
  rows.splice(index, 1)
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#fluid-height-table-with-fixed-header-and-columns" />
      Fluid-height Table with fixed header (and columns)
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      When the the data is dynamically changed, you might want the table to have
      a maximum height rather than a fixed height and to show the scroll bar if
      needed.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElTable :data="tableData" style="width: 100%" max-height="250">
        <ElTableColumn fixed prop="date" label="Date" width="150" />
        <ElTableColumn prop="name" label="Name" width="120" />
        <ElTableColumn prop="state" label="State" width="120" />
        <ElTableColumn prop="city" label="City" width="120" />
        <ElTableColumn prop="address" label="Address" width="600" />
        <ElTableColumn prop="zip" label="Zip" width="120" />
        <ElTableColumn fixed="right" label="Operations" width="120">
          <template #default="scope">
            <ElButton type="text" size="small" @click.prevent="deleteRow(scope.$index, tableData)">
              Remove
            </ElButton>
          </template>
        </ElTableColumn>
      </ElTable>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code8
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
