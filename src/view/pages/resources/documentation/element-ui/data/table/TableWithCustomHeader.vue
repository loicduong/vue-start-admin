<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code15 } from './data'

const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Morgan',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
])

const search = ref('')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#table-with-custom-header" />
      Table with custom header
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Customize table header so it can be even more customized.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElTable
        :data="tableData.filter(
          data =>
            !search || data.name.toLowerCase().includes(search.toLowerCase()),
        )
        "
        style="width: 100%"
      >
        <ElTableColumn label="Date" prop="date" />
        <ElTableColumn label="Name" prop="name" />
        <ElTableColumn align="right">
          <template #header>
            <ElInput v-model="search" size="mini" placeholder="Type to search" />
          </template>
          <ElButton size="mini">
            Edit
          </ElButton>
          <ElButton size="mini" type="danger">
            Delete
          </ElButton>
        </ElTableColumn>
      </ElTable>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code15
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
