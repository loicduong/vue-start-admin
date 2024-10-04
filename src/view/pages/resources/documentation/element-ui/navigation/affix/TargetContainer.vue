<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code2 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#target-container" />
      Target container
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      You can set <code>target</code> attribute to keep the affix in the
      container at all times. It will be hidden if out of range.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <div class="affix-container">
        <ElAffix target=".affix-container" :offset="80">
          <ElButton type="primary">
            Target container
          </ElButton>
        </ElAffix>
      </div>

      <CodeHighlighter lang="html">
        {{ code2 }}
      </CodeHighlighter>
    </div>
  </div>
</template>

<style scoped>
.affix-container {
  text-align: center;
  height: 400px;
  border-radius: 4px;
  background: #ecf5ff;
}
</style>
