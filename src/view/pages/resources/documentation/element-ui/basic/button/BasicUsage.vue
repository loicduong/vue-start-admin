<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code1 } from '@/view/pages/resources/documentation/element-ui/basic/button/code'
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
      Just assign the class name to <code>el-icon-iconName</code>.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElRow>
        <ElButton>Default</ElButton>
        <ElButton type="primary">
          Primary
        </ElButton>
        <ElButton type="success">
          Success
        </ElButton>
        <ElButton type="info">
          Info
        </ElButton>
        <ElButton type="warning">
          Warning
        </ElButton>
        <ElButton type="danger">
          Danger
        </ElButton>
      </ElRow>

      <ElRow>
        <ElButton plain>
          Plain
        </ElButton>
        <ElButton type="primary" plain>
          Primary
        </ElButton>
        <ElButton type="success" plain>
          Success
        </ElButton>
        <ElButton type="info" plain>
          Info
        </ElButton>
        <ElButton type="warning" plain>
          Warning
        </ElButton>
        <ElButton type="danger" plain>
          Danger
        </ElButton>
      </ElRow>

      <ElRow>
        <ElButton round>
          Round
        </ElButton>
        <ElButton type="primary" round>
          Primary
        </ElButton>
        <ElButton type="success" round>
          Success
        </ElButton>
        <ElButton type="info" round>
          Info
        </ElButton>
        <ElButton type="warning" round>
          Warning
        </ElButton>
        <ElButton type="danger" round>
          Danger
        </ElButton>
      </ElRow>

      <ElRow>
        <ElButton icon="el-icon-search" circle />
        <ElButton type="primary" icon="el-icon-edit c-white" circle />
        <ElButton type="success" icon="el-icon-check c-white" circle />
        <ElButton type="info" icon="el-icon-message c-white" circle />
        <ElButton type="warning" icon="el-icon-star-off c-white" circle />
        <ElButton type="danger" icon="el-icon-delete c-white" circle />
      </ElRow>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code1
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
