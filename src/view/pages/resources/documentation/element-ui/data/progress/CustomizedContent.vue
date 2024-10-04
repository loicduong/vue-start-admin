<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code6 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#customized-content" />
      Customized content
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElProgress :percentage="50" class="mb-5">
        <ElButton type="text">
          Content
        </ElButton>
      </ElProgress>
      <ElProgress :text-inside="true" :stroke-width="20" :percentage="50" status="exception" class="mb-5">
        <span>Content</span>
      </ElProgress>
      <ElProgress type="circle" :percentage="100" status="success" class="mb-5">
        <ElButton type="success" icon="el-icon-check" circle />
      </ElProgress>
      <ElProgress type="dashboard" :percentage="80" class="mb-5">
        <template #default="{ percentage }">
          <span class="percentage-value">{{ percentage }}%</span>
          <span class="percentage-label">Progressing</span>
        </template>
      </ElProgress>

      <CodeHighlighter lang="html">
        {{ code6 }}
      </CodeHighlighter>
    </div>
  </div>
</template>

<style>
.percentage-value {
  margin-top: 10px;
  font-size: 28px;
}

.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
</style>
