<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code7 } from '@/view/pages/resources/documentation/element-ui/basic/button/code'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#sizes" />
      Sizes
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Besides default size, Button component provides three additional sizes for
      you to choose among different scenarios.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElRow>
        <ElButton>Default</ElButton>
        <ElButton size="medium">
          Medium
        </ElButton>
        <ElButton size="small">
          Small
        </ElButton>
        <ElButton size="mini">
          Mini
        </ElButton>
      </ElRow>
      <ElRow>
        <ElButton round>
          Default
        </ElButton>
        <ElButton size="medium" round>
          Medium
        </ElButton>
        <ElButton size="small" round>
          Small
        </ElButton>
        <ElButton size="mini" round>
          Mini
        </ElButton>
      </ElRow>

      <CodeHighlighter lang="html">
        {{ code7 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
