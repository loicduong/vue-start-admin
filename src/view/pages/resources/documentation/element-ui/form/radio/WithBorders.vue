<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code5 } from './data'

const radio1 = ref('1')

const radio2 = ref('1')

const radio3 = ref('1')

const radio4 = ref('1')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#with-borders" />
      With borders
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <div>
        <ElRadio v-model="radio1" label="1" border>
          Option A
        </ElRadio>
        <ElRadio v-model="radio1" label="2" border>
          Option B
        </ElRadio>
      </div>
      <div style="margin-top: 20px">
        <ElRadio
          v-model="radio2"
          label="1"
          border
          size="medium"
        >
          Option A
        </ElRadio>
        <ElRadio
          v-model="radio2"
          label="2"
          border
          size="medium"
        >
          Option B
        </ElRadio>
      </div>
      <div style="margin-top: 20px">
        <ElRadioGroup v-model="radio3" size="small">
          <ElRadio label="1" border>
            Option A
          </ElRadio>
          <ElRadio label="2" border disabled>
            Option B
          </ElRadio>
        </ElRadioGroup>
      </div>
      <div style="margin-top: 20px">
        <ElRadioGroup v-model="radio4" size="mini" disabled>
          <ElRadio label="1" border>
            Option A
          </ElRadio>
          <ElRadio label="2" border>
            Option B
          </ElRadio>
        </ElRadioGroup>
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code5
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
