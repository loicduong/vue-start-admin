<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import dayjs from 'dayjs'
import { ref } from 'vue'
import { code5 } from './data'

const loading = ref(true)
const currentDate = ref(dayjs().format('YYYY-MM-DD'))
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#loading-state" />
      Loading state
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      When Loading ends, we always need to show the real UI with data to our end
      users. with the attribtue loading we can control whether showing the DOM.
      You can also use slot default to structure the real DOM element.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElSpace direction="vertical" alignment="flex-start">
        <div>
          <label style="margin-right: 16px;">Switch Loading</label>
          <ElSwitch v-model="loading" />
        </div>
        <ElSkeleton style="width: 240px" :loading="loading" animated>
          <template #template>
            <ElSkeletonItem variant="image" style="width: 240px; height: 240px;" />
            <div style="padding: 14px;">
              <ElSkeletonItem variant="h3" style="width: 50%;" />
              <div
                style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"
              >
                <ElSkeletonItem variant="text" style="margin-right: 16px;" />
                <ElSkeletonItem variant="text" style="width: 30%;" />
              </div>
            </div>
          </template>
          <template #default>
            <ElCard :body-style="{ padding: '0px', marginBottom: '1px' }">
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              >
              <div style="padding: 14px;">
                <span>Delicious hamberger</span>
                <div class="bottom card-header">
                  <span class="time">{{ currentDate }}</span>
                  <ElButton type="text" class="button">
                    Operation button
                  </ElButton>
                </div>
              </div>
            </ElCard>
          </template>
        </ElSkeleton>
      </ElSpace>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code5
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
