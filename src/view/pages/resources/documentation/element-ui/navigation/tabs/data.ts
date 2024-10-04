const code1 = `<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const activeName = ref('first')

const handleClick = (tab: any, event: Event) => {
  console.log(tab, event)
}
</script>`

const code2 = `<template>
  <el-tabs type="card" @tab-click="handleClick">
    <el-tab-pane label="User">User</el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const activeName = ref('first')

const handleClick = (tab: any, event: Event) => {
  console.log(tab, event)
}
</script>`

const code3 = `<el-tabs type="border-card">
  <el-tab-pane label="User">User</el-tab-pane>
  <el-tab-pane label="Config">Config</el-tab-pane>
  <el-tab-pane label="Role">Role</el-tab-pane>
  <el-tab-pane label="Task">Task</el-tab-pane>
</el-tabs>`

const code4 = `<template>
  <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
    <el-radio-button label="top">top</el-radio-button>
    <el-radio-button label="right">right</el-radio-button>
    <el-radio-button label="bottom">bottom</el-radio-button>
    <el-radio-button label="left">left</el-radio-button>
  </el-radio-group>

  <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane label="User">User</el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tabPosition = ref('left')
</script>`

const code5 = `<el-tabs type="border-card">
  <el-tab-pane>
    <template #label>
      <span><i class="el-icon-date"></i> Route</span>
    </template>
    Route
  </el-tab-pane>
  <el-tab-pane label="Config">Config</el-tab-pane>
  <el-tab-pane label="Role">Role</el-tab-pane>
  <el-tab-pane label="Task">Task</el-tab-pane>
</el-tabs>`

const code6 = `<el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
  <el-tab-pane
    v-for="(item, index) in editableTabs"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  >
    {{item.content}}
  </el-tab-pane>
</el-tabs>
<script setup lang="ts">
import { ref } from 'vue'

interface Tab {
  title: string
  name: string
  content: string
}

const editableTabsValue = ref('2')
const editableTabs = ref<Tab[]>([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content'
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content'
  }
])
const tabIndex = ref(2)

const handleTabsEdit = (targetName: string, action: 'add' | 'remove') => {
  if (action === 'add') {
    let newTabName = (++tabIndex.value).toString()
    editableTabs.value.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content'
    })
    editableTabsValue.value = newTabName
  }
  if (action === 'remove') {
    let tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          let nextTab = tabs[index + 1] || tabs[index - 1]
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
</script>`

const code7 = `<div style="margin-bottom: 20px;">
  <el-button
    size="small"
    @click="addTab(editableTabsValue)"
  >
    add tab
  </el-button>
</div>
<el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
  <el-tab-pane
    v-for="(item, index) in editableTabs"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  >
    {{item.content}}
  </el-tab-pane>
</el-tabs>
<script setup lang="ts">
import { ref } from 'vue'

interface Tab {
  title: string
  name: string
  content: string
}

const editableTabsValue = ref('2')
const editableTabs = ref<Tab[]>([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content'
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content'
  }
])
const tabIndex = ref(2)

const addTab = (targetName: string) => {
  let newTabName = (++tabIndex.value).toString()
  editableTabs.value.push({
    title: 'New Tab',
    name: newTabName,
    content: 'New Tab content'
  })
  editableTabsValue.value = newTabName
}

const removeTab = (targetName: string) => {
  let tabs = editableTabs.value
  let activeName = editableTabsValue.value
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        let nextTab =`

export { code1, code2, code3, code4, code5, code6, code7 }
