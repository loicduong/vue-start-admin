<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code2 } from './data'

const data = ref(generateData())

const value = ref([])

function generateData() {
  const data: { value: number, desc: string, disabled: boolean }[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      value: i,
      desc: `Option ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#prop-aliases" />
      Prop aliases
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      By default, Transfer looks for <code>key</code>, <code>label</code> and
      <code>disabled</code> in a data item. If your data items have different
      key names, you can use the <code>props</code> attribute to define aliases.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElTransfer
        v-model="value"
        :props="{
          key: 'value',
          label: 'desc',
        }"
        :data="data"
      />

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code2
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
