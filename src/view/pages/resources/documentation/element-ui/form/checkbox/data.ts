const code1 = `<template>
  <!-- \`checked\` should be true or false -->
  <el-checkbox v-model="checked">Option</el-checkbox>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(true)
</script>
`

const code2 = `<template>
  <el-checkbox v-model="checked1" disabled>Option</el-checkbox>
  <el-checkbox v-model="checked2" disabled>Option</el-checkbox>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(true)
</script>`

const code3 = `<template>
  <el-checkbox-group v-model="checkList">
    <el-checkbox label="Option A"></el-checkbox>
    <el-checkbox label="Option B"></el-checkbox>
    <el-checkbox label="Option C"></el-checkbox>
    <el-checkbox label="disabled" disabled></el-checkbox>
    <el-checkbox label="selected and disabled" disabled></el-checkbox>
  </el-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checkList = ref(['selected and disabled', 'Option A'])
</script>`

const code4 = `<template>
  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Check all</el-checkbox>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'

const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

const checkAll = ref(false)
const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ref(cityOptions)
const isIndeterminate = ref(true)

const handleCheckAllChange = (val: boolean) => {
  checkedCities.value = val ? cityOptions : []
  isIndeterminate.value = false
}

const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === cities.value.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.value.length
}
</script>`

const code5 = `<template>
  <el-checkbox-group 
    v-model="checkedCities"
    :min="1"
    :max="2">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ref(cityOptions)
</script>`

const code6 = `<template>
  <div>
    <el-checkbox-group v-model="checkboxGroup1">
      <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
    </el-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox-group v-model="checkboxGroup2" size="medium">
      <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
    </el-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox-group v-model="checkboxGroup3" size="small">
      <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === 'Beijing'" :key="city">{{city}}</el-checkbox-button>
    </el-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
      <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
    </el-checkbox-group>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

const checkboxGroup1 = ref(['Shanghai'])
const checkboxGroup2 = ref(['Shanghai'])
const checkboxGroup3 = ref(['Shanghai'])
const checkboxGroup4 = ref(['Shanghai'])
const cities = ref(cityOptions)
</script>`

const code7 = `<template>
  <div>
    <el-checkbox v-model="checked1" label="Option1" border></el-checkbox>
    <e l-checkbox v-model="checked2" label="Option2" border></el-checkbox>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox v-model="checked3" label="Option1" border size="medium"></el-checkbox>
    <el-checkbox v-model="checked4" label="Option2" border size="medium"></el-checkbox>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox-group v-model="checkboxGroup1" size="small">
      <el-checkbox label="Option1" border></el-checkbox>
      <el-checkbox label="Option2" border disabled></el-checkbox>
    </el-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
      <el-checkbox label="Option1" border></el-checkbox>
      <el-checkbox label="Option2" border></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(true)
const checkboxGroup1 = ref<string[]>([])
const checkboxGroup2 = ref<string[]>([])
</script>`

export { code1, code2, code3, code4, code5, code6, code7 }
