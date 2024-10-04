<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code4 } from '@/view/pages/resources/documentation/element-ui/basic/space/code'
import { ref } from 'vue'

const size = ref(20)
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#customized-size" />
      Customized Size
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Sometimes built-in sizes could not meet the business needs, we can use
      custom size (number type) to control the space between items.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElSlider v-model="size" />
      <ElSpace wrap :size="size">
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

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code4
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
