const code1 = `<div class="block">
  <span class="demonstration">Default</span>
  <el-rate v-model="value1"></el-rate>
</div>
<div class="block">
  <span class="demonstration">Color for different levels</span>
  <el-rate
    v-model="value2"
    :colors="colors">
  </el-rate>
</div>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref<number | null>(null)
const value2 = ref<number | null>(null)
const colors = ref<string[]>(['#99A9BF', '#F7BA2A', '#FF9900'])
</script>`

const code2 = `<div class="block">
  <el-rate  v-model="value"  allow-half />
</div>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref<number | null>(null)
</script>`

const code3 = `<el-rate
  v-model="value"
  :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
  show-text>
</el-rate>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref<number | null>(null)
</script>`

const code4 = `<el-rate
  v-model="value"
  :icon-classes="iconClasses"
  void-icon-class="icon-rate-face-off"
  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
</el-rate>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref<number | null>(null)
const iconClasses = ref<string[]>(['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'])
</script>`

const code5 = `<el-rate
  v-model="value"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value} points">
</el-rate>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(3.7)
</script>`

export { code1, code2, code3, code4, code5 }
