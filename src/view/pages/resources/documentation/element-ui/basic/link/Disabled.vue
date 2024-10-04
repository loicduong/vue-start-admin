<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code2 } from '@/view/pages/resources/documentation/element-ui/basic/link/code'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#disabled" />
      Disabled
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Disabled state of link
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <div>
        <ElLink disabled>
          default
        </ElLink>
        <ElLink type="primary" disabled>
          primary
        </ElLink>
        <ElLink type="success" disabled>
          success
        </ElLink>
        <ElLink type="warning" disabled>
          warning
        </ElLink>
        <ElLink type="danger" disabled>
          danger
        </ElLink>
        <ElLink type="info" disabled>
          info
        </ElLink>
      </div>

      <CodeHighlighter lang="html">
        {{ code2 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
