<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code5 } from '@/view/pages/resources/documentation/element-ui/basic/space/code'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#auto-wrapping" />
      Auto wrapping
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      When in horizontal mode, using <code>wrap</code> (bool type) to control
      auto wrapping behavior.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElSpace wrap>
        <div v-for="i in 20" :key="i">
          <ElButton type="text">
            Text button
          </ElButton>
        </div>
      </ElSpace>

      <CodeHighlighter lang="html">
        {{ code5 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
