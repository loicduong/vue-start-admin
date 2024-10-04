<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { ref } from 'vue'
import { code1 } from './data'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#top-bar" />
      Top bar
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Top bar NavMenu can be used in a variety of scenarios.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElMenu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
      >
        <ElMenuItem index="1">
          Processing Center
        </ElMenuItem>
        <ElSubmenu index="2">
          <template #title>
            Workspace
          </template>
          <ElMenuItem index="2-1">
            item one
          </ElMenuItem>
          <ElMenuItem index="2-2">
            item two
          </ElMenuItem>
          <ElMenuItem index="2-3">
            item three
          </ElMenuItem>
          <ElSubmenu index="2-4">
            <template #title>
              item four
            </template>
            <ElMenuItem index="2-4-1">
              item one
            </ElMenuItem>
            <ElMenuItem index="2-4-2">
              item two
            </ElMenuItem>
            <ElMenuItem index="2-4-3">
              item three
            </ElMenuItem>
          </ElSubmenu>
        </ElSubmenu>
        <ElMenuItem index="3" disabled>
          Info
        </ElMenuItem>
        <ElMenuItem index="4">
          <a href="https://www.ele.me" target="_blank" rel="noopener noreferrer">Orders</a>
        </ElMenuItem>
      </ElMenu>
      <div class="line my-10" />
      <ElMenu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <ElMenuItem index="1">
          Processing Center
        </ElMenuItem>
        <ElSubmenu index="2">
          <template #title>
            Workspace
          </template>
          <ElMenuItem index="2-1">
            item one
          </ElMenuItem>
          <ElMenuItem index="2-2">
            item two
          </ElMenuItem>
          <ElMenuItem index="2-3">
            item three
          </ElMenuItem>
          <ElSubmenu index="2-4">
            <template #title>
              item four
            </template>
            <ElMenuItem index="2-4-1">
              item one
            </ElMenuItem>
            <ElMenuItem index="2-4-2">
              item two
            </ElMenuItem>
            <ElMenuItem index="2-4-3">
              item three
            </ElMenuItem>
          </ElSubmenu>
        </ElSubmenu>
        <ElMenuItem index="3" disabled>
          Info
        </ElMenuItem>
        <ElMenuItem index="4">
          <a href="https://www.ele.me" target="_blank" rel="noopener noreferrer">Orders</a>
        </ElMenuItem>
      </ElMenu>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code1
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
