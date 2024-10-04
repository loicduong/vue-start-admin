<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code7 } from './data'

const upload = ref()

function submitUpload() {
  upload.value.submit()
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#manual-upload" />
      Manual upload
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElUpload
        ref="upload"
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :auto-upload="false"
      >
        <template #trigger>
          <ElButton size="small" type="primary">
            select file
          </ElButton>
        </template>
        <ElButton
          style="margin-left: 10px;"
          size="small"
          type="success"
          @click="submitUpload"
        >
          upload to server
        </ElButton>
        <template #tip>
          <div class="el-upload__tip">
            jpg/png files with a size less than 500kb
          </div>
        </template>
      </ElUpload>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code7
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
