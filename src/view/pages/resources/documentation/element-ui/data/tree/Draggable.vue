<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code10 } from './data'

const data = ref([
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
])

function allowDrop(draggingNode: any, dropNode: any, type: any) {
  if (dropNode.data.label === 'Level two 3-1') {
    return type !== 'inner'
  }
  else {
    return true
  }
}

function allowDrag(draggingNode: any) {
  return !draggingNode.data.label.includes('Level three 3-1-1')
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#draggable" />
      Draggable
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      You can drag and drop Tree nodes by adding a
      <code>draggable</code> attribute.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElTree
        :data="data"
        node-key="id"
        default-expand-all
        draggable
        :allow-drop="allowDrop"
        :allow-drag="allowDrag"
      />

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code10
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
