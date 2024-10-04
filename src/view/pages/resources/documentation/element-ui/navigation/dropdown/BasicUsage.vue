<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code1 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#basic-usage" />
      Basic usage
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Hover on the dropdown menu to unfold it for more actions.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElDropdown>
        <span class="el-dropdown-link">
          Dropdown List<i class="el-icon-arrow-down el-icon--right" />
        </span>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem>Action 1</ElDropdownItem>
            <ElDropdownItem>Action 2</ElDropdownItem>
            <ElDropdownItem>Action 3</ElDropdownItem>
            <ElDropdownItem disabled>
              Action 4
            </ElDropdownItem>
            <ElDropdownItem divided>
              Action 5
            </ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code1
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
