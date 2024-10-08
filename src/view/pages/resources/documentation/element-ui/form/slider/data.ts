const code1 = `<template>
  <div class="block">
    <span class="demonstration">Default value</span>
    <el-slider v-model="value1"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Customized initial value</span>
    <el-slider v-model="value2"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Hide Tooltip</span>
    <el-slider v-model="value3" :show-tooltip="false"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Format Tooltip</span>
    <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Disabled</span>
    <el-slider v-model="value5" disabled></el-slider>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(50)
const value3 = ref(36)
const value4 = ref(48)
const value5 = ref(42)

const formatTooltip = (val: number): number => {
  return val / 100
}
</script>`

const code2 = `<template>
  <div class="block">
    <span class="demonstration">Breakpoints not displayed</span>
    <el-slider
      v-model="value1"
      :step="10">
    </el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Breakpoints displayed</span>
    <el-slider
      v-model="value2"
      :step="10"
      show-stops>
    </el-slider>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
</script>`

const code3 = `<template>
  <div class="block">
    <el-slider
      v-model="value"
      show-input>
    </el-slider>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
</script>`

const code4 = `<template>
  <div class="block">
    <el-slider
      v-model="value"
      range
      show-stops
      :max="10">
    </el-slider>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref<number[]>([4, 8])
</script>`

const code5 = `<template>
  <div class="block">
    <el-slider
      v-model="value"
      vertical
      height="200px">
    </el-slider>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
</script>`

const code6 = `<template>
  <div class="block">
    <el-slider
      v-model="value"
      range
      :marks="marks">
    </el-slider>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Mark {
  style?: {
    color: string
  }
  label: string
}

const value = ref<number[]>([30, 60])

const marks = ref<Record<number, string | Mark>>({
  0: '0°C',
  8: '8°C',
  37: '37°C',
  50: {
    style: {
      color: '#1989FA'
    },
    label: '50%'
  }
})
</script>`

export { code1, code2, code3, code4, code5, code6 }
