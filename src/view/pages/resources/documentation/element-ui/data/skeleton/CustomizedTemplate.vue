<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code4 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#customized-template" />
      Customized Template
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      ElementPlus only provides the most common template, sometimes that could
      be a problem, so you have a slot named <code>template</code> to do that
      work.<br>

      Also we have provided different types skeleton unit that you can choose,
      for more detailed info, please scroll down to the bottom of this page to
      see the API description. Also, when building your own customized skeleton
      structure, you should be structuring them as closer to the real DOM as
      possible, which avoiding the DOM bouncing caused by the height difference.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElSkeleton style="width: 240px">
        <template #template>
          <ElSkeletonItem variant="image" style="width: 240px; height: 240px;" />
          <div style="padding: 14px;">
            <ElSkeletonItem variant="p" style="width: 50%" />
            <div style="display: flex; align-items: center; justify-items: space-between;">
              <ElSkeletonItem variant="text" style="margin-right: 16px;" />
              <ElSkeletonItem variant="text" style="width: 30%;" />
            </div>
          </div>
        </template>
      </ElSkeleton>

      <CodeHighlighter lang="html">
        {{ code4 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
