<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code7 } from './data'

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
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#table-with-fixed-columns-and-header" />
      Table with fixed columns and header
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      When you have huge chunks of data to put in a table, you can fix the
      header and columns at the same time.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElTable :data="tableData" style="width: 100%" height="250">
        <ElTableColumn fixed prop="date" label="Date" width="150" />
        <ElTableColumn prop="name" label="Name" width="120" />
        <ElTableColumn prop="state" label="State" width="120" />
        <ElTableColumn prop="city" label="City" width="320" />
        <ElTableColumn prop="address" label="Address" width="600" />
        <ElTableColumn prop="zip" label="Zip" width="120" />
      </ElTable>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code7
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
