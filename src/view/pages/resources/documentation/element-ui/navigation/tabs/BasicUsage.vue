<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code1 } from './data'

const activeName = ref('first')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#basic-usage" />
      Basic usage
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Basic and concise tabs.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElTabs v-model="activeName">
        <ElTabPane label="User" name="first">
          User
        </ElTabPane>
        <ElTabPane label="Config" name="second">
          Config
        </ElTabPane>
        <ElTabPane label="Role" name="third">
          Role
        </ElTabPane>
        <ElTabPane label="Task" name="fourth">
          Task
        </ElTabPane>
      </ElTabs>

      <CodeHighlighter lang="html">
        {{ code1 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
