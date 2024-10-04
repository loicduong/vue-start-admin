const code1 = `<template>
  <el-input-number v-model="num" @change="handleChange" :min="1" :max="10"></el-input-number>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const num = ref(1)

const handleChange = (value: number) => {
  console.log(value)
}
</script>`

const code2 = `<template>
  <el-input-number v-model="num" :disabled="true"></el-input-number>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const num = ref(1)
</script>`

const code3 = `<template>
  <el-input-number v-model="num" :step="2"></el-input-number>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const num = ref(5)
</script>`

const code4 = `<template>
  <el-input-number v-model="num" :step="2" step-strictly></el-input-number>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const num = ref(2)
</script>`

const code5 = `<template>
  <el-input-number v-model="num" :precision="2" :step="0.1" :max="10"></el-input-number>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const num = ref(1)
</script>`

const code6 = `<template>
  <el-input-number v-model="num1"></el-input-number>
    <el-input-number size="medium" v-model="num2"></el-input-number>
    <el-input-number size="small" v-model="num3"></el-input-number>
    <el-input-number size="mini" v-model="num4"></el-input-number>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const num1 = ref(1)
const num2 = ref(1)
const num3 = ref(1)
const num4 = ref(1)
</script>`

const code7 = `<template>
  <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const num = ref(1)

const handleChange = (value: number) => {
  console.log(value)
}
</script>`

export { code1, code2, code3, code4, code5, code6, code7 }
