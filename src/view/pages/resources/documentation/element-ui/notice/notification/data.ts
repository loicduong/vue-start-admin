const code1 = `<template>
  <el-button
    plain
    @click="open1">
    Closes automatically
  </el-button>
  <el-button
    plain
    @click="open2">
    Won't close automatically
    </el-button>
</template>

<script setup lang="ts>
  import { h } from 'vue';
  import { ElNotification } from 'element-plus';

  function open1() {
    ElNotification({
      title: 'Title',
      message: h('i', { style: 'color: teal' }, 'This is a reminder')
    });
  }

  function open2() {
    ElNotification({
      title: 'Prompt',
      message: 'This is a message that does not automatically close',
      duration: 0
    });
  }
</script>`

const code2 = `<template>
  <el-button
    plain
    @click="open1">
    Success
  </el-button>
  <el-button
    plain
    @click="open2">
    Warning
  </el-button>
  <el-button
    plain
    @click="open3">
    Info
  </el-button>
  <el-button
    plain
    @click="open4">
    Error
  </el-button>
</template>

<script setup lang="ts">
  import { ElNotification } from 'element-plus';

  function open1() {
    ElNotification({
      title: 'Success',
      message: 'This is a success message',
      type: 'success'
    });
  }

  function open2() {
    ElNotification({
      title: 'Warning',
      message: 'This is a warning message',
      type: 'warning'
    });
  }

  function open3() {
    ElNotification({
      title: 'Info',
      message: 'This is an info message',
      type: 'info'
    });
  }

  function open4() {
    ElNotification({
      title: 'Error',
      message: 'This is an error message',
      type: 'error'
    });
  }
</script>`

const code3 = `<template>
  <el-button
    plain
    @click="open1">
    Top Right
  </el-button>
  <el-button
    plain
    @click="open2">
    Bottom Right
  </el-button>
  <el-button
    plain
    @click="open3">
    Bottom Left
  </el-button>
  <el-button
    plain
    @click="open4">
    Top Left
  </el-button>
</template>

<script setup lang="ts">
  import { ElNotification } from 'element-plus';

  function open1() {
    ElNotification({
      title: 'Custom Position',
      message: 'I\\'m at the top right corner',
      position: 'top-right'
    });
  }

  function open2() {
    ElNotification({
      title: 'Custom Position',
      message: 'I\\'m at the bottom right corner',
      position: 'bottom-right'
    });
  }

  function open3() {
    ElNotification({
      title: 'Custom Position',
      message: 'I\\'m at the bottom left corner',
      position: 'bottom-left'
    });
  }

  function open4() {
    ElNotification({
      title: 'Custom Position',
      message: 'I\\'m at the top left corner',
      position: 'top-left'
    });
  }
</script>`

const code4 = `<template>
  <el-button
    plain
    @click="open">
    Notification with offset
  </el-button>
</template>

<script setup lang="ts">
  import { ElNotification } from 'element-plus';

  function open() {
    ElNotification({
      title: 'Success',
      message: 'This is a success message',
      offset: 100
    });
  }
</script>`

const code5 = `<template>
  <el-button
    plain
    @click="open">
    Use HTML String
  </el-button>
</template>

<script setup lang="ts">
  import { ElNotification } from 'element-plus';

  function open() {
    ElNotification({
      title: 'HTML String',
      dangerouslyUseHTMLString: true,
      message: '<strong>This is <i>HTML</i> string</strong>'
    });
  }
</script>`

const code6 = `<template>
  <el-button
    plain
    @click="open">
    Hide close button
    </el-button>
</template>

<script setup lang="ts">
  import { ElNotification } from 'element-plus';

  function open() {
    ElNotification({
      title: 'Info',
      message: 'This is a message without close button',
      showClose: false
    });
  }
</script>`

export { code1, code2, code3, code4, code5, code6 }
