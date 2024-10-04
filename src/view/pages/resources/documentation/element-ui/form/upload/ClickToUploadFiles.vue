<script setup lang="ts">
import type { UploadFile, UploadRawFile, UploadUserFile } from 'element-plus'
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue'
import { code1 } from './data'

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

function handleExceed(files: File[], fileList: UploadUserFile[]) {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length
    } files this time, add up to ${files.length + fileList.length} totally`,
  )
}

function beforeRemove(file: UploadFile | UploadRawFile) {
  return ElMessageBox.confirm(`Cancel the transfer of ${file.name} ?`)
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#click-to-upload-files" />
      Click to upload files
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElUpload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
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
          code1
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
