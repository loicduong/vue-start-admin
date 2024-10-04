const code1 = `<el-page-header @back="goBack" content="detail">
</el-page-header>

<script setup lang="ts">
const goBack = () => {
  console.log('go back')
}
</script>`

export { code1 }
