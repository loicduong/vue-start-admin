<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code9 } from './data'

const input1 = ref('')

const input2 = ref('')

const input3 = ref('')

const input4 = ref('')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#sizes" />
      Sizes
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <div class="demo-input-size">
        <ElInput v-model="input1" placeholder="Please Input" />
        <ElInput
          v-model="input2"
          style="margin-top: 15px"
          size="medium"
          placeholder="Please Input"
        />
        <ElInput
          v-model="input3"
          style="margin-top: 15px"
          size="small"
          placeholder="Please Input"
        />
        <ElInput
          v-model="input4"
          style="margin-top: 15px"
          size="mini"
          placeholder="Please Input"
        />
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code9
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
