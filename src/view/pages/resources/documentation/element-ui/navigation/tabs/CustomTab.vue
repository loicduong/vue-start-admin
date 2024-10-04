<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code5 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#custom-tab" />
      Custom Tab
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      You can use named slot to customize the tab label content.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElTabs type="border-card">
        <ElTabPane>
          <template #label>
            <span><i class="el-icon-date" /> Route</span>
          </template>
          Route
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
        {{ code5 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
