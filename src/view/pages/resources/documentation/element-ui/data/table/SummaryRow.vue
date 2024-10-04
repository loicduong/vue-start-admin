<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code18 } from './data'

const tableData = ref([
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
  },
  {
    id: '12987124',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 9,
  },
  {
    id: '12987125',
    name: 'Tom',
    amount1: '621',
    amount2: '2.2',
    amount3: 17,
  },
  {
    id: '12987126',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 15,
  },
])

function getSummaries(param: any) {
  const { columns, data } = param
  const sums: any[] = []
  columns.forEach((column: any, index: number) => {
    if (index === 0) {
      sums[index] = 'Total Cost'
      return
    }
    const values = data.map((item: any) => Number(item[column.property]))
    if (!values.every((value: any) => isNaN(value))) {
      sums[index]
        = `$ ${
          values.reduce((prev: any, curr: any) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            }
            else {
              return prev
            }
          }, 0)}`
    }
    else {
      sums[index] = 'N/A'
    }
  })

  return sums
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#summary-row" />
      Summary row
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      For table of numbers, you can add an extra row at the table footer
      displaying each column's sum.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElTable :data="tableData" border show-summary style="width: 100%">
        <ElTableColumn prop="id" label="ID" width="180" />
        <ElTableColumn prop="name" label="Name" />
        <ElTableColumn prop="amount1" sortable label="Amount 1" />
        <ElTableColumn prop="amount2" sortable label="Amount 2" />
        <ElTableColumn prop="amount3" sortable label="Amount 3" />
      </ElTable>

      <ElTable
        :data="tableData"
        border
        height="200"
        :summary-method="getSummaries"
        show-summary
        style="width: 100%; margin-top: 20px"
      >
        <ElTableColumn prop="id" label="ID" width="180" />
        <ElTableColumn prop="name" label="Name" />
        <ElTableColumn prop="amount1" label="Cost 1 ($)" />
        <ElTableColumn prop="amount2" label="Cost 2 ($)" />
        <ElTableColumn prop="amount3" label="Cost 3 ($)" />
      </ElTable>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code18
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
