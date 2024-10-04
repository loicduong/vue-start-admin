<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code6 } from './data'

const checked = ref(false)

function onChange(checked: any) {
  checked.value = checked
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#checkable-tag" />
      Checkable tag
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Sometimes because of the business needs, we might need checkbox like tag,
      but <b>button like checkbox</b> cannot meet our needs, here comes
      <code>check-tag</code>
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <div>
        <ElCheckTag checked style="margin-right: 8px;">
          Checked
        </ElCheckTag>
        <ElCheckTag :checked="checked" @change="onChange">
          Toggle me
        </ElCheckTag>
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code6
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
