<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code3 } from '@/view/pages/resources/documentation/element-ui/basic/space/code'
import { ref } from 'vue'

const size = ref('mini')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#control-the-size-of-the-space" />
      Control the size of the space
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Control the space size via <code>size</code> API. You can set the size
      with built-in sizes <code>mini</code>, <code>small</code>,
      <code>medium</code>, <code>large</code>, these size coresponds to
      <code>4px</code>, <code>8px</code>, <code>12px</code>, <code>16px</code>.
      The default size is <code>small</code>, A.K.A. <code>8px</code>

      You can also using customized size to override it. Refer to the next part.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElSpace direction="vertical" alignment="start" :size="30">
        <ElRadioGroup v-model="size">
          <ElRadio label="mini">
            mini
          </ElRadio>
          <ElRadio label="small">
            small
          </ElRadio>
          <ElRadio label="medium">
            medium
          </ElRadio>
          <ElRadio label="large">
            large
          </ElRadio>
        </ElRadioGroup>

        <ElSpace wrap :size="size">
          <ElCard v-for="i in 3" :key="i" class="box-card" style="width: 250px">
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
      </ElSpace>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code3
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>

<style lang="scss">
.c-white {
  color: white;
}
</style>
