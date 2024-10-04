const code1 = `<template>
  <el-button :plain="true" @click="open">Show message</el-button>
  <el-button :plain="true" @click="openVn">VNode</el-button>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { ElMessage } from 'element-plus';

const open = () => {
  ElMessage('This is a message.');
};

const openVn = () => {
  ElMessage({
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode')
    ])
  });
};
</script>`

const code2 = `<template>
  <el-button :plain="true" @click="open2">success</el-button>
  <el-button :plain="true" @click="open3">warning</el-button>
  <el-button :plain="true" @click="open1">message</el-button>
  <el-button :plain="true" @click="open4">error</el-button>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';

const open1 = () => {
  ElMessage('This is a message.');
};

const open2 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success'
  });
};

const open3 = () => {
  ElMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning'
  });
};

const open4 = () => {
  ElMessage.error('Oops, this is a error message.');
};
</script>`

const code3 = `<template>
  <el-button :plain="true" @click="open1">message</el-button>
  <el-button :plain="true" @click="open2">success</el-button>
  <el-button :plain="true" @click="open3">warning</el-button>
  <el-button :plain="true" @click="open4">error</el-button>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';

const open1 = () => {
  ElMessage({
    showClose: true,
    message: 'This is a message.'
  });
};

const open2 = () => {
  ElMessage({
    showClose: true,
    message: 'Congrats, this is a success message.',
    type: 'success'
  });
};

const open3 = () => {
  ElMessage({
    showClose: true,
    message: 'Warning, this is a warning message.',
    type: 'warning'
  });
};

const open4 = () => {
  ElMessage({
    showClose: true,
    message: 'Oops, this is a error message.',
    type: 'error'
  });
};
</script>`

const code4 = `<template>
  <el-button :plain="true" @click="openCenter">Centered text</el-button>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';

const openCenter = () => {
  ElMessage({
    message: 'Centered text',
    center: true
  });
};
</script>`

const code5 = `<template>
  <el-button :plain="true" @click="openHTML">Use HTML String</el-button>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';

const openHTML = () => {
  ElMessage({
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>'
  });
};
</script>`

export { code1, code2, code3, code4, code5 }
