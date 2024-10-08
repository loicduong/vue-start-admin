const code1
  = `<template>
  <p style="text-align: center; margin: 0 0 20px">Customize data items using render-content</p>
  <div style="text-align: center">
    <el-transfer
      v-model="leftValue"
      style="text-align: left; display: inline-block"
      filterable
      :left-default-checked="[2, 3]"
      :right-default-checked="[1]"
      :render-content="renderFunc"
      :titles="['Source', 'Target']"
      :button-texts="['To left', 'To right']"
      :format="{
        noChecked: '${
  String.fromCharCode(0x24)
}{total}',
        hasChecked: '${
  String.fromCharCode(0x24)
}{checked}/${
  String.fromCharCode(0x24)
}{total}'
      }"
      :data="data"
      @change="handleChange"
    >
      <template #left-footer>
        <el-button class="transfer-footer" size="small">Operation</el-button>
      </template>
      <template #right-footer>
        <el-button class="transfer-footer" size="small">Operation</el-button>
      </template>
    </el-transfer>
    <p style="text-align: center; margin: 50px 0 20px">Customize data items using scoped slot</p>
    <div style="text-align: center">
      <el-transfer
        v-model="rightValue"
        style="text-align: left; display: inline-block"
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :titles="['Source', 'Target']"
        :button-texts="['To left', 'To right']"
        :format="{
          noChecked: '${
  String.fromCharCode(0x24)
}{total}',
          hasChecked: '${
  String.fromCharCode(0x24)
}{checked}/${
  String.fromCharCode(0x24)
}{total}'
        }"
        :data="data"
        @change="handleChange"
      >
        <template #default="{ option }">
          <span>{{ option.key }} - {{ option.label }}</span>
        </template>
        <template #left-footer>
          <el-button class="transfer-footer" size="small">Operation</el-button>
        </template>
        <template #right-footer>
          <el-button class="transfer-footer" size="small">Operation</el-button>
        </template>
      </el-transfer>
    </div>
  </div>
</template>

<style>
.transfer-footer {
  margin-left: 20px;
  padding: 6px 5px;
}
</style>

<script setup lang="ts">
import { ref, h } from 'vue'

interface Option {
  key: number
  label: string
  disabled: boolean
}

const generateData = (): Option[] => {
  const data: Option[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: \`Option ${String.fromCharCode(0x24)}$\{ i }\`,
      disabled: i % 4 === 0
    })
  }
  return data
}

const data = ref(generateData())
const rightValue = ref([1])
const leftValue = ref([1])

const renderFunc = (option: Option) => {
  return h("span", null, option.key, " - ", option.label)
}

const handleChange = (value: number[], direction: string, movedKeys: number[]) => {
  console.log(value, direction, movedKeys)
}
</script>`

const code2
  = `<template>
  <el-transfer
    v-model="value"
    :props="{
      key: 'value',
      label: 'desc'
    }"
    :data="data">
  </el-transfer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Option {
  value: number
  desc: string
  disabled: boolean
}

const generateData = (): Option[] => {
  const data: Option[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      value: i,
      desc: \`Option ${String.fromCharCode(0x24)}$\{ i }\`,
      disabled: i % 4 === 0
    })
  }
  return data
}

const data = ref(generateData())
const value = ref<number[]>([])
</script>`

export { code1, code2 }
