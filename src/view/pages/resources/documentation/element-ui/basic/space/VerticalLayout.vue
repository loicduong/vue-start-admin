<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code2 } from '@/view/pages/resources/documentation/element-ui/basic/space/code'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#vertical-layout" />
      Vertical Layout
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Using <code>direction</code> attribute to control the layout, we use
      <code>flex-direction</code> to implement this.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElSpace direction="vertical">
        <ElCard v-for="i in 2" :key="i" class="box-card" style="width: 250px">
          <template #header>
            <div class="card-header">
              <span>Card name</span>
              <ElButton class="button" type="text">
                Operation button
              </ElButton>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{ `List item ${o}` }}
          </div>
        </ElCard>
      </ElSpace>

      <CodeHighlighter lang="html">
        {{ code2 }}
      </CodeHighlighter>
    </div>
  </div>
</template>
