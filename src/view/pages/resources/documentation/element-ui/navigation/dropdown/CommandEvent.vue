<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ElMessage } from 'element-plus'
import { code5 } from './data'

function handleCommand(command: string) {
  ElMessage(`click on item ${command}`)
}
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#command-event" />
      Command event
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Clicking each dropdown item fires an event whose parameter is assigned by
      each item.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElDropdown @command="handleCommand">
        <span class="el-dropdown-link">
          Dropdown List<i class="el-icon-arrow-down el-icon--right" />
        </span>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem command="a">
              Action 1
            </ElDropdownItem>
            <ElDropdownItem command="b">
              Action 2
            </ElDropdownItem>
            <ElDropdownItem command="c">
              Action 3
            </ElDropdownItem>
            <ElDropdownItem command="d" disabled>
              Action 4
            </ElDropdownItem>
            <ElDropdownItem command="e" divided>
              Action 5
            </ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code5
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>

<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
