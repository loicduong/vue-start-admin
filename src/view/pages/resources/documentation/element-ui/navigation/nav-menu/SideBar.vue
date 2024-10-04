<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code2 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#side-bar" />
      Side bar
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Vertical NavMenu with sub-menus.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElRow class="tac">
        <ElCol :span="12">
          <h5>Default colors</h5>
          <ElMenu
            default-active="2"
            class="el-menu-vertical-demo"
          >
            <ElSubmenu index="1">
              <template #title>
                <i class="el-icon-location" />
                <span>Navigator One</span>
              </template>
              <ElMenuItemGroup title="Group One">
                <ElMenuItem index="1-1">
                  item one
                </ElMenuItem>
                <ElMenuItem index="1-2">
                  item one
                </ElMenuItem>
              </ElMenuItemGroup>
              <ElMenuItemGroup title="Group Two">
                <ElMenuItem index="1-3">
                  item three
                </ElMenuItem>
              </ElMenuItemGroup>
              <ElSubmenu index="1-4">
                <template #title>
                  item four
                </template>
                <ElMenuItem index="1-4-1">
                  item one
                </ElMenuItem>
              </ElSubmenu>
            </ElSubmenu>
            <ElMenuItem index="2">
              <i class="el-icon-menu" />
              <span>Navigator Two</span>
            </ElMenuItem>
            <ElMenuItem index="3" disabled>
              <i class="el-icon-document" />
              <span>Navigator Three</span>
            </ElMenuItem>
            <ElMenuItem index="4">
              <i class="el-icon-setting" />
              <span>Navigator Four</span>
            </ElMenuItem>
          </ElMenu>
        </ElCol>
        <ElCol :span="12">
          <h5>Custom colors</h5>
          <ElMenu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <ElSubmenu index="1">
              <template #title>
                <i class="el-icon-location" />
                <span>Navigator One</span>
              </template>
              <ElMenuItemGroup title="Group One">
                <ElMenuItem index="1-1">
                  item one
                </ElMenuItem>
                <ElMenuItem index="1-2">
                  item one
                </ElMenuItem>
              </ElMenuItemGroup>
              <ElMenuItemGroup title="Group Two">
                <ElMenuItem index="1-3">
                  item three
                </ElMenuItem>
              </ElMenuItemGroup>
              <ElSubmenu index="1-4">
                <template #title>
                  item four
                </template>
                <ElMenuItem index="1-4-1">
                  item one
                </ElMenuItem>
              </ElSubmenu>
            </ElSubmenu>
            <ElMenuItem index="2">
              <i class="el-icon-menu" />
              <span>Navigator Two</span>
            </ElMenuItem>
            <ElMenuItem index="3" disabled>
              <i class="el-icon-document" />
              <span>Navigator Three</span>
            </ElMenuItem>
            <ElMenuItem index="4">
              <i class="el-icon-setting" />
              <span>Navigator Four</span>
            </ElMenuItem>
          </ElMenu>
        </ElCol>
      </ElRow>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code2
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>
