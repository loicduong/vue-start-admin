<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code1 } from './data'

const data = ref(generateData())

const leftValue = ref([1])

const rightValue = ref([1])

function generateData() {
  const data: { key: number, label: string, disabled: boolean }[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

function renderFunc(h: any, option: any) {
  return h('span', null, option.key, ' - ', option.label)
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#customizable" />
      Customizable
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      You can customize list titles, button texts, render function for data
      items, checking status texts in list footer and list footer contents.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <p style="text-align: center; margin: 0 0 20px">
        Customize data items using render-content
      </p>
      <div style="text-align: center">
        <ElTransfer
          v-model="leftValue"
          style="text-align: left; display: inline-block"
          filterable
          :left-default-checked="[2, 3]"
          :right-default-checked="[1]"
          :render-content="renderFunc"
          :titles="['Source', 'Target']"
          :button-texts="['To left', 'To right']"
          :format="{
            noChecked: '${total}',
            hasChecked: '${checked}/${total}',
          }"
          :data="data"
        >
          <template #left-footer>
            <ElButton
              class="transfer-footer"
              size="small"
            >
              Operation
            </ElButton>
          </template>
          <template #right-footer>
            <ElButton
              class="transfer-footer"
              size="small"
            >
              Operation
            </ElButton>
          </template>
        </ElTransfer>
        <p style="text-align: center; margin: 50px 0 20px">
          Customize data items using scoped slot
        </p>
        <div style="text-align: center">
          <ElTransfer
            v-model="rightValue"
            style="text-align: left; display: inline-block"
            filterable
            :left-default-checked="[2, 3]"
            :right-default-checked="[1]"
            :titles="['Source', 'Target']"
            :button-texts="['To left', 'To right']"
            :format="{
              noChecked: '${total}',
              hasChecked: '${checked}/${total}',
            }"
            :data="data"
          >
            <template #default="{ option }">
              <span>{{ option.key }} - {{ option.label }}</span>
            </template>
            <template #left-footer>
              <ElButton
                class="transfer-footer"
                size="small"
              >
                Operation
              </ElButton>
            </template>
            <template #right-footer>
              <ElButton
                class="transfer-footer"
                size="small"
              >
                Operation
              </ElButton>
            </template>
          </ElTransfer>
        </div>
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code1
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>

<style>
.transfer-footer {
  margin-left: 20px;
  padding: 6px 5px;
}
</style>
