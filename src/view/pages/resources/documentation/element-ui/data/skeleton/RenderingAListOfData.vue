<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import dayjs from 'dayjs'
import { onMounted, ref } from 'vue'
import { code6 } from './data'

const loading = ref(true)
const currentDate = ref(dayjs().format('YYYY-MM-DD'))
const lists = ref<{ imgUrl: string, name: string }[]>([])

onMounted(() => {
  loading.value = false
  lists.value = [
    {
      imgUrl:
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      name: 'Deer',
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      name: 'Horse',
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      name: 'Mountain Lion',
    },
  ]
})

function setLoading() {
  loading.value = true
  setTimeout(() => (loading.value = false), 2000)
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#rendering-a-list-of-data" />
      Rendering a list of data
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Most of the time, skeleton is used as indicators of rendering a list of
      data which haven't been fetched from server yet, then we need to create a
      list of skeleton out of no where to make it look like it is loading, with
      <code>count</code> attribute, you can control how many these templates you
      need to render to the browser.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElSpace direction="vertical" alignment="flex-start">
        <ElButton @click="setLoading">
          Click me to reload
        </ElButton>
        <ElSkeleton style="width: 240px" :loading="loading" animated :count="3">
          <template #template>
            <ElSkeletonItem variant="image" style="width: 400px; height: 267px;" />
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
            <ElCard v-for="(item, i) in lists" :key="i" :body-style="{ padding: '0px', marginBottom: '1px' }">
              <img :src="item.imgUrl" class="image multi-content">
              <div style="padding: 14px;">
                <span>{{ item.name }}</span>
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
          code6
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>

<style>
.image.multi-content {
  width: 400px;
  height: 267px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border-bottom: none;
}

.el-card {
  margin-bottom: 5px;
}
</style>
