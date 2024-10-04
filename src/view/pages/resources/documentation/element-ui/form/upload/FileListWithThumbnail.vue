<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code5 } from './data'

const fileList = ref([
  {
    name: 'food.jpeg',
    url:
      'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food2.jpeg',
    url:
      'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
])
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#file-list-with thumbnail" />
      FileList with thumbnail
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElUpload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :file-list="fileList"
        list-type="picture"
      >
        <ElButton size="small" type="primary">
          Click to upload
        </ElButton>
        <template #tip>
          <div class="el-upload__tip">
            jpg/png files with a size less than 500kb
          </div>
        </template>
      </ElUpload>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code5
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
