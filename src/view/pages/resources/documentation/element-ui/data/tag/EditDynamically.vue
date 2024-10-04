<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { nextTick, ref } from 'vue'
import { code3 } from './data'

const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3'])
const inputVisible = ref(false)
const inputValue = ref('')
const saveTagInput = ref()

function handleClose(tag: any) {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}

function showInput() {
  inputVisible.value = true

  nextTick(() => {
    saveTagInput.value.$refs.input.focus()
  })
}

function handleInputConfirm() {
  const value = inputValue.value
  if (value) {
    dynamicTags.value.push(value)
  }
  inputVisible.value = false
  inputValue.value = ''
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#edit-dynamically" />
      Edit Dynamically
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      You can use the <code>close</code> event to add and remove tag
      dynamically.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElTag v-for="tag in dynamicTags" :key="tag" closable :disable-transitions="false" @close="handleClose(tag)">
        {{ tag }}
      </ElTag>
      <ElInput
        v-if="inputVisible"
        ref="saveTagInput"
        v-model="inputValue"
        class="input-new-tag"
        size="mini"
        @keyup.enter="handleInputConfirm"
        @blur="handleInputConfirm"
      />
      <ElButton v-else class="button-new-tag" size="small" @click="showInput">
        + New Tag
      </ElButton>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code3
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>

<style>
.el-tag + .el-tag {
  margin-left: 10px;
}

.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
