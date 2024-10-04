<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code5 } from './data'

const currentPage1 = ref(5)

const currentPage2 = ref(5)

const currentPage3 = ref(5)

const currentPage4 = ref(4)
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#draggable" />
      More elements
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Add more modules based on your scenario.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <div class="block">
        <span class="demonstration">Total item count</span>
        <ElPagination
          v-model:current-page="currentPage1"
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1000"
        />
      </div>
      <div class="block">
        <span class="demonstration">Change page size</span>
        <ElPagination
          v-model:current-page="currentPage2"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="sizes, prev, pager, next"
          :total="1000"
        />
      </div>
      <div class="block">
        <span class="demonstration">Jump to</span>
        <ElPagination
          v-model:current-page="currentPage3"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000"
        />
      </div>
      <div class="block">
        <span class="demonstration">All combined</span>
        <ElPagination
          v-model:current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        />
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code5
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
