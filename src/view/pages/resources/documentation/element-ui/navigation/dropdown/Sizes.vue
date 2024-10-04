<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code6 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#sizes" />
      Sizes
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Besides default size, Dropdown component provides three additional sizes
      for you to choose among different scenarios.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElDropdown split-button type="primary">
        Default
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem>Action 1</ElDropdownItem>
            <ElDropdownItem>Action 2</ElDropdownItem>
            <ElDropdownItem>Action 3</ElDropdownItem>
            <ElDropdownItem>Action 4</ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>

      <ElDropdown size="medium" split-button type="primary">
        Medium
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem>Action 1</ElDropdownItem>
            <ElDropdownItem>Action 2</ElDropdownItem>
            <ElDropdownItem>Action 3</ElDropdownItem>
            <ElDropdownItem>Action 4</ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>

      <ElDropdown size="small" split-button type="primary">
        Small
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem>Action 1</ElDropdownItem>
            <ElDropdownItem>Action 2</ElDropdownItem>
            <ElDropdownItem>Action 3</ElDropdownItem>
            <ElDropdownItem>Action 4</ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>

      <ElDropdown size="mini" split-button type="primary">
        Mini
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem>Action 1</ElDropdownItem>
            <ElDropdownItem>Action 2</ElDropdownItem>
            <ElDropdownItem>Action 3</ElDropdownItem>
            <ElDropdownItem>Action 4</ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code6
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
