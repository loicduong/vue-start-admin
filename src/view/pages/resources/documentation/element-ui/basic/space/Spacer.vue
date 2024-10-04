<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import {
  literalCode6,
  spacerCode6,
} from '@/view/pages/resources/documentation/element-ui/basic/space/code'
import { ElDivider } from 'element-plus'
import { h, ref } from 'vue'

const size = ref(10)
const spacer = ref(h(ElDivider, { direction: 'vertical' }))
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#spacer" />
      Spacer
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Sometimes we want something more than blank space, so we have (spacer) to
      help us.
    </div>
    <!-- end::Block -->

    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#literal-type-spacer" />
      Literal type spacer
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElSpace :size="size" spacer="|">
        <div v-for="i in 2" :key="i">
          <ElButton> button {{ i }} </ElButton>
        </div>
      </ElSpace>

      <CodeHighlighter lang="html">
        {{ literalCode6 }}
      </CodeHighlighter>
    </div>
  </div>

  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#spacer-can-also-be-vnode" />
      Spacer can also be VNode
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElSpace :size="size" :spacer="spacer">
        <div v-for="i in 2" :key="i">
          <ElButton> button {{ i }} </ElButton>
        </div>
      </ElSpace>

      <CodeHighlighter lang="html">
        {{ spacerCode6 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
