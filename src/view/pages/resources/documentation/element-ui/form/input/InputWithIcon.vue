<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code5 } from './data'

const input1 = ref('')

const input2 = ref('')

const input3 = ref('')

const input4 = ref('')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#input-with-icon" />
      Input with icon
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Add an icon to indicate input type.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <div class="demo-input-suffix mb-5">
        <span class="demo-input-label">Using attributes</span>
        <ElInput
          v-model="input1"
          placeholder="Pick a date"
          suffix-icon="el-icon-date"
        />
        <ElInput
          v-model="input2"
          placeholder="Type something"
          prefix-icon="el-icon-search"
        />
      </div>
      <div class="demo-input-suffix">
        <span class="demo-input-label">Using slots</span>
        <ElInput v-model="input3" placeholder="Pick a date">
          <template #suffix>
            <i class="el-input__icon el-icon-date" />
          </template>
        </ElInput>
        <ElInput v-model="input4" placeholder="Type something">
          <template #prefix>
            <i class="el-input__icon el-icon-search" />
          </template>
        </ElInput>
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code5
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>

<style scoped>
.demo-input-label {
  display: inline-block;
  width: 130px;
}

.el-input {
  width: auto;
  margin-right: 5px;
}
</style>
