<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code3 } from './data'

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

function handlePictureCardPreview(file: any) {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#photo-wall" />
      Photo Wall
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Use <code>list-type</code> to change the fileList style.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElUpload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
      >
        <i class="el-icon-plus" />
      </ElUpload>
      <ElDialog v-model="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </ElDialog>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code3
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
