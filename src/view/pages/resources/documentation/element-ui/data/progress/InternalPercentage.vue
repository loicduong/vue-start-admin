<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code2 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#internal-percentage" />
      Internal percentage
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      In this case the percentage takes no additional space.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElProgress :text-inside="true" :stroke-width="26" :percentage="70" class="mb-5" />
      <ElProgress :text-inside="true" :stroke-width="24" :percentage="100" status="success" class="mb-5" />
      <ElProgress :text-inside="true" :stroke-width="22" :percentage="80" status="warning" class="mb-5" />
      <ElProgress
        :text-inside="true"
        :stroke-width="20"
        :percentage="50"
        status="exception"
        class="mb-5"
      />

      <CodeHighlighter lang="html">
        {{ code2 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
