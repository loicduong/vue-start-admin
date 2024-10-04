const code1
  = `<template>
  <el-button type="text" @click="open">Click to open the Message Box</el-button>
</template>

<script setup lang="ts">
  import { ElMessage } from 'element-plus';

  function open() {
    this.$alert('This is a message', 'Title', {
      confirmButtonText: 'OK',
      callback: action => {
        ElMessage({
          type: 'info',
          message: \`action: ${
  String.fromCharCode(0x24)
}{action}\`
        });
      }
    });
  }
</script>`

const code2 = `<template>
  <el-button type="text" @click="open">Click to open the Message Box</el-button>
</template>

<script setup lang="ts">
  import { ElMessage } from 'element-plus';

  function open() {
    this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning'
    }).then(() => {
      ElMessage({
        type: 'success',
        message: 'Delete completed'
      });
    }).catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled'
      });
    });
  }
</script>`

const code3 = `<template>
  <el-button type="text" @click="open">Click to open Message Box</el-button>
</template>

<script setup lang="ts">
import { ElMessageBox, ElMessage } from 'element-plus';

const open = () => {
  ElMessageBox.prompt('Please input your e-mail', 'Tip', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    inputPattern: /[\\w!#$%&'*+/=?^_\`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_\`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/,
    inputErrorMessage: 'Invalid Email'
  }).then(({ value }) => {
    ElMessage({
      type: 'success',
      message: 'Your email is:' + value
    });
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: 'Input canceled'
    });
  });
};
</script>`

const code4 = `<template>
  <el-button type="text" @click="open">Click to open Message Box</el-button>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { ElMessageBox, ElMessage } from 'element-plus';

const open = () => {
  ElMessageBox({
    title: 'Message',
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode')
    ]),
    showCancelButton: true,
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    beforeClose: (action, instance, done) => {
      if (action === 'confirm') {
        instance.confirmButtonLoading = true;
        instance.confirmButtonText = 'Loading...';
        setTimeout(() => {
          done();
          setTimeout(() => {
            instance.confirmButtonLoading = false;
          }, 300);
        }, 3000);
      } else {
        done();
      }
    }
  }).then(action => {
    ElMessage({
      type: 'info',
      message: 'action: ' + action
    });
  });
};
</script>`

const code5 = `<template>
  <el-button type="text" @click="open">Click to open Message Box</el-button>
</template>

<script setup lang="ts">
import { ElMessageBox } from 'element-plus';

const open = () => {
  ElMessageBox.alert('<strong>This is <i>HTML</i> string</strong>', 'HTML String', {
    dangerouslyUseHTMLString: true
  });
};
</script>`

const code6 = `<template>
  <el-button type="text" @click="open">Click to open Message Box</el-button>
</template>

<script setup lang="ts">
import { ElMessageBox, ElMessage } from 'element-plus';

const open = () => {
  ElMessageBox.confirm('You have unsaved changes, save and proceed?', 'Confirm', {
    distinguishCancelAndClose: true,
    confirmButtonText: 'Save',
    cancelButtonText: 'Discard Changes'
  })
    .then(() => {
      ElMessage({
        type: 'info',
        message: 'Changes saved. Proceeding to a new route.'
      });
    })
    .catch(action => {
      ElMessage({
        type: 'info',
        message: action === 'cancel'
          ? 'Changes discarded. Proceeding to a new route.'
          : 'Stay in the current route'
      })
    });
};
</script>`

const code7 = `<template>
  <el-button type="text" @click="open">Click to open Message Box</el-button>
</template>

<script setup lang="ts">
import { ElMessageBox, ElMessage } from 'element-plus';

const open = () => {
  ElMessageBox.confirm('This will permanently delete the file. Continue?', 'Warning', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning',
    center: true
  }).then(() => {
    ElMessage({
      type: 'success',
      message: 'Delete completed'
    });
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: 'Delete canceled'
    });
  });
};
</script>`

export { code1, code2, code3, code4, code5, code6, code7 }
