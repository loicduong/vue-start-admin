<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code6 } from './data'

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

function handleTabsEdit(targetName: any, action: any) {
  if (action === 'add') {
    const newTabName = `${++tabIndex.value}`
    editableTabs.value.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content',
    })
    editableTabsValue.value = newTabName
  }
  if (action === 'remove') {
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
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#add-and-close-tab" />
      Add & close tab
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Only card type Tabs support addable & closeable.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElTabs
        v-model="editableTabsValue"
        type="card"
        editable
        @edit="handleTabsEdit"
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
          code6
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
