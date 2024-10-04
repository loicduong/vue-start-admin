<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code3 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#border-card" />
      Border card
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Border card tabs.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElTabs type="border-card">
        <ElTabPane label="User">
          User
        </ElTabPane>
        <ElTabPane label="Config">
          Config
        </ElTabPane>
        <ElTabPane label="Role">
          Role
        </ElTabPane>
        <ElTabPane label="Task">
          Task
        </ElTabPane>
      </ElTabs>

      <CodeHighlighter lang="html">
        {{ code3 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
