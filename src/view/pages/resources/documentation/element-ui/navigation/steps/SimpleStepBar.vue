<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code7 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#simple-step-bar" />
      Simple step bar
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Simple step bars, where <code>align-center</code>,
      <code>description</code>, <code>direction</code> and
      <code>space</code> will be ignored.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElSteps :space="200" :active="1" simple>
        <ElStep title="Step 1" icon="el-icon-edit" />
        <ElStep title="Step 2" icon="el-icon-upload" />
        <ElStep title="Step 3" icon="el-icon-picture" />
      </ElSteps>

      <ElSteps
        :active="1"
        finish-status="success"
        simple
        style="margin-top: 20px"
      >
        <ElStep title="Step 1" />
        <ElStep title="Step 2" />
        <ElStep title="Step 3" />
      </ElSteps>

      <CodeHighlighter lang="html">
        {{ code7 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
