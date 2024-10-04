const code1 = `<template>
  <el-select v-model="value" placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Option {
  value: string
  label: string
}

const options = ref<Option[]>([
  { value: 'Option1', label: 'Option1' },
  { value: 'Option2', label: 'Option2' },
  { value: 'Option3', label: 'Option3' },
  { value: 'Option4', label: 'Option4' },
  { value: 'Option5', label: 'Option5' }
])

const value = ref('')
</script>`

const code2 = `<template>
  <el-select v-model="value" placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
    </el-option>
  </el-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Option {
  value: string
  label: string
  disabled?: boolean
}

const options = ref<Option[]>([
  { value: 'Option1', label: 'Option1' },
  { value: 'Option2', label: 'Option2', disabled: true },
  { value: 'Option3', label: 'Option3' },
  { value: 'Option4', label: 'Option4' },
  { value: 'Option5', label: 'Option5' }
])

const value = ref('')
</script>`

const code3 = `<template>
  <el-select v-model="value" disabled placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Option {
  value: string
  label: string
}

const options = ref<Option[]>([
  { value: 'Option1', label: 'Option1' },
  { value: 'Option2', label: 'Option2' },
  { value: 'Option3', label: 'Option3' },
  { value: 'Option4', label: 'Option4' },
  { value: 'Option5', label: 'Option5' }
])

const value = ref('')
</script>`

const code4 = `<template>
  <el-select v-model="value" clearable placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Option {
  value: string
  label: string
}

const options = ref<Option[]>([
  { value: 'Option1', label: 'Option1' },
  { value: 'Option2', label: 'Option2' },
  { value: 'Option3', label: 'Option3' },
  { value: 'Option4', label: 'Option4' },
  { value: 'Option5', label: 'Option5' }
])

const value = ref('')
</script>`

const code5 = `<template>
  <el-select v-model="value1" multiple placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  <el-select
    v-model="value2"
    multiple
    collapse-tags
    style="margin-left: 20px;"
    placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Option {
  value: string
  label: string
}

const options = ref<Option[]>([
  { value: 'Option1', label: 'Option1' },
  { value: 'Option2', label: 'Option2' },
  { value: 'Option3', label: 'Option3' },
  { value: 'Option4', label: 'Option4' },
  { value: 'Option5', label: 'Option5' }
])

const value1 = ref<string[]>([])
const value2 = ref<string[]>([])
</script>`

const code6 = `<template>
  <el-select v-model="value" placeholder="Select">
    <el-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
    </el-option>
  </el-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface City {
  value: string
  label: string
}

const cities = ref<City[]>([
  { value: 'Beijing', label: 'Beijing' },
  { value: 'Shanghai', label: 'Shanghai' },
  { value: 'Nanjing', label: 'Nanjing' },
  { value: 'Chengdu', label: 'Chengdu' },
  { value: 'Shenzhen', label: 'Shenzhen' },
  { value: 'Guangzhou', label: 'Guangzhou' }
])

const value = ref('')
</script>`

const code7 = `<template>
  <el-select v-model="value" placeholder="Select">
    <el-option-group
      v-for="group in options"
      :key="group.label"
      :label="group.label">
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-option-group>
  </el-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface City {
  value: string
  label: string
}

interface OptionGroup {
  label: string
  options: City[]
}

const options = ref<OptionGroup[]>([
  {
    label: 'Popular cities',
    options: [
      { value: 'Shanghai', label: 'Shanghai' },
      { value: 'Beijing', label: 'Beijing' }
    ]
  },
  {
    label: 'City name',
    options: [
      { value: 'Chengdu', label: 'Chengdu' },
      { value: 'Shenzhen', label: 'Shenzhen' },
      { value: 'Guangzhou', label: 'Guangzhou' },
      { value: 'Dalian', label: 'Dalian' }
    ]
  }
])

const value = ref('')
</script>`

const code8 = `<template>
  <el-select v-model="value" filterable placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Option {
  value: string
  label: string
}

const options = ref<Option[]>([
  { value: 'Option1', label: 'Option1' },
  { value: 'Option2', label: 'Option2' },
  { value: 'Option3', label: 'Option3' },
  { value: 'Option4', label: 'Option4' },
  { value: 'Option5', label: 'Option5' }
])

const value = ref('')
</script>`

const code9
  = `<template>
  <el-select
    v-model="value"
    multiple
    filterable
    remote
    reserve-keyword
    placeholder="Please enter a keyword"
    :remote-method="remoteMethod"
    :loading="loading">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Option {
  value: string
  label: string
}

const options = ref<Option[]>([])
const value = ref<string[]>([])
const list = ref<Option[]>([])
const loading = ref(false)
const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
  "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
  "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
  "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas",
  "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
]

onMounted(() => {
  list.value = states.map(item => ({
    value: \`value: $\{ item }\`,
    label: \`label: $\{ item }\`
  }))
})

const remoteMethod = (query: string) => {
  if (query !== '') {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      options.value = list.value.filter(item => 
        item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    }, 200)
  } else {
    options.value = []
  }
}
</script>`

const code10 = `<template>
  <el-select
    v-model="value"
    multiple
    filterable
    allow-create
    default-first-option
    placeholder="Choose tags for your article">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Option {
  value: string
  label: string
}

const options = ref<Option[]>([
  { value: 'HTML', label: 'HTML' },
  { value: 'CSS', label: 'CSS' },
  { value: 'JavaScript', label: 'JavaScript' }
])

const value = ref<string[]>([])
</script>`

export {
  code1,
  code2,
  code3,
  code4,
  code5,
  code6,
  code7,
  code8,
  code9,
  code10,
}
