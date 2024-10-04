<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code7 } from './data'

const editableTabsValue = ref('2')

const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content',
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content',
  },
])

const tabIndex = ref(2)

function addTab() {
  const newTabName = `${++tabIndex.value}`
  editableTabs.value.push({
    title: 'New Tab',
    name: newTabName,
    content: 'New Tab content',
  })
  editableTabsValue.value = newTabName
}

function removeTab(targetName: string) {
  const tabs = editableTabs.value
  let activeName = editableTabsValue.value
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.name
        }
      }
    })
  }

  editableTabsValue.value = activeName
  editableTabs.value = tabs.filter(tab => tab.name !== targetName)
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#customized-trigger-button-of-new-tab" />
      Customized trigger button of new tab
    </h2>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <div style="margin-bottom: 20px;">
        <ElButton size="small" @click="addTab">
          add tab
        </ElButton>
      </div>
      <ElTabs
        v-model="editableTabsValue"
        type="card"
        closable
        @tab-remove="removeTab"
      >
        <ElTabPane
          v-for="item in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        >
          {{ item.content }}
        </ElTabPane>
      </ElTabs>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code7
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
