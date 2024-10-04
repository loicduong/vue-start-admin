<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code6 } from './data'

const value = ref(false)
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#hide-pagination-when-there-is-only-one-page" />
      Hide pagination when there is only one page
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      When there is only one page, hide the pagination by setting the
      <code>hide-on-single-page</code> attribute.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <div>
        <ElSwitch v-model="value" />
        <ElPagination :hide-on-single-page="value" :total="5" layout="prev, pager, next" />
      </div>

      <CodeHighlighter lang="html">
        {{ code6 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
