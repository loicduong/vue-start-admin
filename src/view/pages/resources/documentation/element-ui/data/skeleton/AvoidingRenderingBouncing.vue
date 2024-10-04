<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import dayjs from 'dayjs'
import { ref } from 'vue'
import { code7 } from './data'

const loading = ref(false)
const currentDate = ref(dayjs().format('YYYY-MM-DD'))
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#avoiding-rendering-bouncing" />
      Avoiding rendering bouncing.
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Sometimes API responds very quickly, when that happens, the skeleton just
      gets rendered to the DOM then it needs to switch back to real DOM, that
      causes the sudden flashy. To avoid such thing, you can use the
      <code>throttle</code>
      attribute.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElSpace direction="vertical" alignment="flex-start">
        <div>
          <label style="margin-right: 16px;">Switch Loading</label>
          <ElSwitch v-model="loading" />
        </div>
        <ElSkeleton style="width: 240px" :loading="loading" animated :throttle="500">
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
                    operation button
                  </ElButton>
                </div>
              </div>
            </ElCard>
          </template>
        </ElSkeleton>
      </ElSpace>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code7
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
