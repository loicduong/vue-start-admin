<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { code6 } from './data'

function open() {
  ElMessageBox.confirm('You have unsaved changes, save and proceed?', 'Confirm', {
    distinguishCancelAndClose: true,
    confirmButtonText: 'Save',
    cancelButtonText: 'Discard Changes',
  })
    .then(() => {
      ElMessage({
        type: 'info',
        message: 'Changes saved. Proceeding to a new route.',
      })
    })
    .catch((action: string) => {
      ElMessage({
        type: 'info',
        message:
          action === 'cancel'
            ? 'Changes discarded. Proceeding to a new route.'
            : 'Stay in the current route',
      })
    })
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#distinguishing-cancel-and-close" />
      Distinguishing cancel and close
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Alert components are non-overlay elements in the page that does not
      disappear automatically.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElButton type="text" @click="open">
        Click to open Message Box
      </ElButton>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code6
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
