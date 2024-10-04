<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code6 } from './data'

const num1 = ref(1)

const num2 = ref(1)

const num3 = ref(1)

const num4 = ref(1)
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#size" />
      Size
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Use attribute <code>size</code> to set additional sizes with
      <code>medium</code>, <code>small</code> or <code>mini</code>.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElInputNumber
        v-model="num1"
        style="margin-right: 5px"
      />
      <ElInputNumber
        v-model="num2"
        style="margin-right: 5px"
        size="medium"
      />
      <ElInputNumber
        v-model="num3"
        style="margin-right: 5px"
        size="small"
      />
      <ElInputNumber v-model="num4" size="mini" />

      <CodeHighlighter lang="html">
        {{ code6 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
