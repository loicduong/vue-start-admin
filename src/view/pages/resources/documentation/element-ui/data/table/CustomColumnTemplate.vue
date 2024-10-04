<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code14 } from './data'

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
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#custom-column-template" />
      Custom column template
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Customize table column so it can be integrated with other components.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElTable :data="tableData" style="width: 100%">
        <ElTableColumn label="Date" width="180">
          <template #default="scope">
            <i class="el-icon-time" />
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </ElTableColumn>
        <ElTableColumn label="Name" width="180">
          <template #default="scope">
            <ElPopover effect="light" trigger="hover" placement="top">
              <template #default>
                <p>姓名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
              </template>
              <template #reference>
                <div class="name-wrapper">
                  <ElTag size="medium">
                    {{ scope.row.name }}
                  </ElTag>
                </div>
              </template>
            </ElPopover>
          </template>
        </ElTableColumn>
        <ElTableColumn label="Operations">
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
          code14
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
