<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code2 } from './data'

const props = ref({
  label: 'name',
  children: 'zones',
})

const count = ref(1)

function loadNode(node: any, resolve: any) {
  if (node.level === 0) {
    return resolve([{ name: 'Root1' }, { name: 'Root2' }])
  }
  if (node.level > 3)
    return resolve([])

  let hasChild
  if (node.data.name === 'region1') {
    hasChild = true
  }
  else if (node.data.name === 'region2') {
    hasChild = false
  }
  else {
    hasChild = Math.random() > 0.5
  }

  setTimeout(() => {
    let data: any[] = []
    if (hasChild) {
      data = [
        {
          name: `zone${count.value++}`,
        },
        {
          name: `zone${count.value++}`,
        },
      ]
    }
    else {
      data = []
    }

    resolve(data)
  }, 500)
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#selectable" />
      Selectable
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Used for node selection.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElTree :props="props" :load="loadNode" lazy show-checkbox />

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code2
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
