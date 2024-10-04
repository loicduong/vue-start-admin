<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code20 } from './data'

const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
])

function indexMethod(index: number) {
  return index * 2
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#custom-index" />
      Custom index
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      You can customize row index in <code>type=index</code> columns.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElTable :data="tableData" style="width: 100%">
        <ElTableColumn type="index" :index="indexMethod" />
        <ElTableColumn prop="date" label="Date" width="180" />
        <ElTableColumn prop="name" label="Name" width="180" />
        <ElTableColumn prop="address" label="Address" />
      </ElTable>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code20
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
