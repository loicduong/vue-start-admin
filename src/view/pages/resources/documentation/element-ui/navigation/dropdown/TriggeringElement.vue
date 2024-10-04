<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code2 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#triggering-element" />
      Triggering element
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Use the button to trigger the dropdown list.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElDropdown>
        <ElButton type="primary">
          Dropdown List<i class="el-icon-arrow-down el-icon--right" />
        </ElButton>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem>Action 1</ElDropdownItem>
            <ElDropdownItem>Action 2</ElDropdownItem>
            <ElDropdownItem>Action 3</ElDropdownItem>
            <ElDropdownItem>Action 4</ElDropdownItem>
            <ElDropdownItem>Action 5</ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>
      <ElDropdown split-button type="primary">
        Dropdown List
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem>Action 1</ElDropdownItem>
            <ElDropdownItem>Action 2</ElDropdownItem>
            <ElDropdownItem>Action 3</ElDropdownItem>
            <ElDropdownItem>Action 4</ElDropdownItem>
            <ElDropdownItem>Action 5</ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code2
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>

<style>
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
