const code1 = `<el-switch v-model="value1">
</el-switch>
<el-switch
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
</script>`

const code2 = `<el-switch
  v-model="value1"
  active-text="Pay by month"
  inactive-text="Pay by year">
</el-switch>
<el-switch
  style="display: block"
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="Pay by month"
  inactive-text="Pay by year">
</el-switch>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
</script>`

const code3 = `<el-tooltip :content="'Switch value: ' + value" placement="top">
  <el-switch
    v-model="value"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-value="100"
    inactive-value="0">
  </el-switch>
</el-tooltip>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('100')
</script>`

const code4 = `<el-switch
  v-model="value1"
  disabled>
</el-switch>
<el-switch
  v-model="value2"
  disabled>
</el-switch>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
</script>`

const code5 = `<el-switch
  v-model="value1"
  loading>
</el-switch>
<el-switch
  v-model="value2"
  loading>
</el-switch>
<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
</script>`

export { code1, code2, code3, code4, code5 }
