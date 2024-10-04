<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code2 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#card-style" />
      Card Style
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Tabs styled as cards.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElTabs type="card">
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
        {{ code2 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
