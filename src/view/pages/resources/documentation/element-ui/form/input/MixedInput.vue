<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code8 } from './data'

const input1 = ref('')

const input2 = ref('')

const input3 = ref('')

const select = ref('')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#mixed-input" />
      Mixed input
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Prepend or append an element, generally a label or a button.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <div>
        <ElInput v-model="input1" placeholder="Please input">
          <template #prepend>
            Http://
          </template>
        </ElInput>
      </div>
      <div style="margin-top: 15px;">
        <ElInput v-model="input2" placeholder="Please input">
          <template #append>
            .com
          </template>
        </ElInput>
      </div>
      <div style="margin-top: 15px;">
        <ElInput
          v-model="input3"
          placeholder="Please input"
          class="input-with-select"
        >
          <template #prepend>
            <ElSelect v-model="select" placeholder="Select">
              <ElOption label="Restaurant" value="1" />
              <ElOption label="Order No." value="2" />
              <ElOption label="Tel" value="3" />
            </ElSelect>
          </template>
          <template #append>
            <ElButton icon="el-icon-search" />
          </template>
        </ElInput>
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code8
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>

<style>
.el-select .el-input {
  width: 110px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
