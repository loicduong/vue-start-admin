<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ElLoading } from 'element-plus'
import { ref } from 'vue'
import { code3 } from './data'

const fullscreenLoading = ref(false)

function openFullScreen1() {
  fullscreenLoading.value = true
  setTimeout(() => {
    fullscreenLoading.value = false
  }, 2000)
}

function openFullScreen2() {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loading.close()
  }, 2000)
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#full-screen-loading" />
      Full screen loading
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Show a full screen animation while loading data.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElButton
        v-loading.fullscreen.lock="fullscreenLoading"
        type="primary"
        @click="openFullScreen1"
      >
        As a directive
      </ElButton>
      <ElButton type="primary" @click="openFullScreen2">
        As a service
      </ElButton>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code3
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
