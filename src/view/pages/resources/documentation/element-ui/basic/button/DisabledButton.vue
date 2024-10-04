<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code2 } from '@/view/pages/resources/documentation/element-ui/basic/button/code'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#disabled-button" />
      Disabled Button
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      The <code>disabled</code> attribute determines if the button is disabled.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElRow>
        <ElButton disabled>
          Default
        </ElButton>
        <ElButton type="primary" disabled>
          Primary
        </ElButton>
        <ElButton type="success" disabled>
          Success
        </ElButton>
        <ElButton type="info" disabled>
          Info
        </ElButton>
        <ElButton type="warning" disabled>
          Warning
        </ElButton>
        <ElButton type="danger" disabled>
          Danger
        </ElButton>
      </ElRow>

      <ElRow>
        <ElButton plain disabled>
          Plain
        </ElButton>
        <ElButton type="primary" plain disabled>
          Primary
        </ElButton>
        <ElButton type="success" plain disabled>
          Success
        </ElButton>
        <ElButton type="info" plain disabled>
          Info
        </ElButton>
        <ElButton type="warning" plain disabled>
          Warning
        </ElButton>
        <ElButton type="danger" plain disabled>
          Danger
        </ElButton>
      </ElRow>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code2
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
