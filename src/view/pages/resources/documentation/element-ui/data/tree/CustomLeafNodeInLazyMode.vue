<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code3 } from './data'

const props = ref({
  label: 'name',
  children: 'zones',
  isLeaf: 'leaf',
})

function loadNode(node: any, resolve: any) {
  if (node.level === 0) {
    return resolve([{ name: 'region' }])
  }
  if (node.level > 1)
    return resolve([])

  setTimeout(() => {
    const data = [
      {
        name: 'leaf',
        leaf: true,
      },
      {
        name: 'zone',
      },
    ]

    resolve(data)
  }, 500)
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#custom-leaf-node-in-lazy-mode" />
      Custom leaf node in lazy mode
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElTree :props="props" :load="loadNode" lazy show-checkbox />

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code3
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
