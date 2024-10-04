<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code7 } from '@/view/pages/resources/documentation/element-ui/basic/space/code'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#alignment" />
      Alignment
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Setting this attribute can adjust the alignment of child nodes, the
      desirable value can be found at align-items.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <div style="width: 256px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;">
        <ElSpace>
          string
          <ElButton>
            button
          </ElButton>
          <ElCard>
            <template #header>
              header
            </template>
            body
          </ElCard>
        </ElSpace>
      </div>
      <div style="width: 256px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;">
        <ElSpace alignment="flex-start">
          string
          <ElButton>
            button
          </ElButton>
          <ElCard>
            <template #header>
              header
            </template>
            body
          </ElCard>
        </ElSpace>
      </div>
      <div style="width: 256px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;">
        <ElSpace alignment="flex-end">
          string
          <ElButton>
            button
          </ElButton>
          <ElCard>
            <template #header>
              header
            </template>
            body
          </ElCard>
        </ElSpace>
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code7
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
