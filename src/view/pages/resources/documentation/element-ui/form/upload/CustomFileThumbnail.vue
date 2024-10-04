<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code4 } from './data'

const dialogImageUrl = ref('')

const dialogVisible = ref(false)

const disabled = ref(false)

function handlePictureCardPreview(file: any) {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#custom-file-thumbnail" />
      Custom file thumbnail
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Use <code>scoped-slot</code> to change default thumbnail template.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElUpload action="#" list-type="picture-card" :auto-upload="false">
        <template #default>
          <i class="el-icon-plus" />
        </template>
        <template #file="{ file }">
          <div>
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url"
              alt=""
            >
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <i class="el-icon-zoom-in" />
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
              >
                <i class="el-icon-download" />
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
              >
                <i class="el-icon-delete" />
              </span>
            </span>
          </div>
        </template>
      </ElUpload>
      <ElDialog v-model="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </ElDialog>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code4
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
