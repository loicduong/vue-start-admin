<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code4 } from './data'

const tabPosition = ref('left')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#tab-position" />
      Tab position
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      You can use <code>tab-position</code> attribute to set the tab's position.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElRadioGroup v-model="tabPosition" style="margin-bottom: 30px;">
        <ElRadioButton label="top">
          top
        </ElRadioButton>
        <ElRadioButton label="right">
          right
        </ElRadioButton>
        <ElRadioButton label="bottom">
          bottom
        </ElRadioButton>
        <ElRadioButton label="left">
          left
        </ElRadioButton>
      </ElRadioGroup>

      <ElTabs :tab-position="tabPosition" style="height: 200px;">
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
        {{ code4 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
