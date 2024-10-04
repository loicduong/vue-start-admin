<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code3 } from './data'

const isCollapse = ref(true)
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#collapse" />
      Collapse
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Vertical NavMenu could be collapsed.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElRadioGroup v-model="isCollapse" style="margin-bottom: 20px;">
        <ElRadioButton :label="false">
          expand
        </ElRadioButton>
        <ElRadioButton :label="true">
          collapse
        </ElRadioButton>
      </ElRadioGroup>
      <ElMenu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
      >
        <ElSubmenu index="1">
          <template #title>
            <i class="el-icon-location" />
            <span>Navigator One</span>
          </template>
          <ElMenuItemGroup>
            <template #title>
              <span>Group One</span>
            </template>
            <ElMenuItem index="1-1">
              item one
            </ElMenuItem>
            <ElMenuItem index="1-2">
              item two
            </ElMenuItem>
          </ElMenuItemGroup>
          <ElMenuItemGroup title="Group Two">
            <ElMenuItem index="1-3">
              item three
            </ElMenuItem>
          </ElMenuItemGroup>
          <ElSubmenu index="1-4">
            <template #title>
              <span>item four</span>
            </template>
            <ElMenuItem index="1-4-1">
              item one
            </ElMenuItem>
          </ElSubmenu>
        </ElSubmenu>
        <ElMenuItem index="2">
          <i class="el-icon-menu" />
          <template #title>
            Navigator Two
          </template>
        </ElMenuItem>
        <ElMenuItem index="3" disabled>
          <i class="el-icon-document" />
          <template #title>
            Navigator Three
          </template>
        </ElMenuItem>
        <ElMenuItem index="4">
          <i class="el-icon-setting" />
          <template #title>
            Navigator Four
          </template>
        </ElMenuItem>
      </ElMenu>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code3
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
