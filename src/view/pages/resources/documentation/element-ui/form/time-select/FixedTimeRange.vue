<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code2 } from './data'

const startTime = ref('')

const endTime = ref('')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#fixed-time-range" />
      Fixed time range
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      If start time is picked at first, then the end time will change
      accordingly.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElTimeSelect
        v-model="startTime"
        style="margin-right: 5px"
        placeholder="Start time"
        start="08:30"
        step="00:15"
        end="18:30"
      />
      <ElTimeSelect
        v-model="endTime"
        placeholder="End time"
        start="08:30"
        step="00:15"
        end="18:30"
        :min-time="startTime"
      />

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code2
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
