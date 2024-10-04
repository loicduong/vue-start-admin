<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code7 } from './data'

let id = 0

const props = ref({
  lazy: true,
  lazyLoad(node: any, resolve: any) {
    const { level } = node
    setTimeout(() => {
      const nodes = Array.from({ length: level + 1 }).map(() => ({
        value: ++id,
        label: `Option - ${id}`,
        leaf: level >= 2,
      }))
      // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.
      resolve(nodes)
    }, 1000)
  },
})
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#dynamic-loading" />
      Dynamic loading
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Dynamic load its child nodes when checked a node.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElCascader :props="props" />

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code7
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
