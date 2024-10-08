const code1
  = `<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList"
>
  <el-button size="small" type="primary">Click to upload</el-button>
  <template #tip>
    <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
  </template>
</el-upload>
<script setup lang="ts">
  import { ref } from "vue";
  import { ElMessage, UploadFile, UploadRawFile, UploadUserFile } from "element-plus";

  const fileList = ref([
    {
      name: 'food.jpeg',
      url:
        'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
    {
      name: 'food2.jpeg',
      url:
        'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
  ])

  function handleExceed(files: File[], fileList: UploadUserFile[]) {
    ElMessage.warning(
      \`The limit is 3, you selected ${
  String.fromCharCode(0x24)
}{
    files.length
} files this time, add up to ${
  String.fromCharCode(0x24)
}{
    files.length + fileList.length
} totally\`,
        )
      }
  function beforeRemove(file: UploadFile | UploadRawFile) {
        return confirm(\`Cancel the transfert of ${
  String.fromCharCode(0x24)
}{file.name} ?\`)
      }
</script>`

const code2 = `<el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload"
>
  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<script setup lang="ts">
  import { ref } from "vue";

  const imageUrl = ref('')

  function handleAvatarSuccess(res, file) {
    imageUrl.value = URL.createObjectURL(file.raw)
  }

  function beforeAvatarUpload(file) {
    const isJPG = file.type === 'image/jpeg'
    const isLt2M = file.size / 1024 / 1024 < 2

    if (!isJPG) {
      ElMessage.error('Avatar picture must be JPG format!')
    }

    if (!isLt2M) {
      ElMessage.error('Avatar picture size can not exceed 2MB!')
    }

    return isJPG && isLt2M
  }
</script>`

const code3 = `<el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
>
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog v-model="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="" />
</el-dialog>
<script setup lang="ts">
  import { ref } from "vue";

  const dialogImageUrl = ref('')
  const dialogVisible = ref(false)

  function handlePictureCardPreview(file) {
    dialogImageUrl.value = file.url
    dialogVisible.value = true
  }
</script>`

const code4 = `<el-upload action="#" list-type="picture-card" :auto-upload="false">
  <template #default>
    <i class="el-icon-plus"></i>
  </template>
  <template #file="{file}">
    <div>
      <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
      <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
    </div>
  </template>
</el-upload>
<el-dialog v-model="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="" />
</el-dialog>
<script setup lang="ts">
  import { ref } from "vue";

  const dialogImageUrl = ref('')
  const dialogVisible = ref(false)
  const disabled = ref(false)

  function handlePictureCardPreview(file) {
    dialogImageUrl.value = file.url
    dialogVisible.value = true
  }


  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
      }
    },
    methods: {
      handleRemove(file) {
        console.log(file)
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      },
      handleDownload(file) {
        console.log(file)
      },
    },
  }
</script>`

const code5 = `<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :file-list="fileList"
  list-type="picture"
>
  <el-button size="small" type="primary">Click to upload</el-button>
  <template #tip>
    <div class="el-upload__tip">
      jpg/png files with a size less than 500kb
    </div>
  </template>
</el-upload>
<script setup lang="ts">
  import { ref } from "vue";

  const fileList = ref([
    {
      name: 'food.jpeg',
      url:
        'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
    {
      name: 'food2.jpeg',
      url:
        'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
  ])
</script>`

const code6 = `<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-change="handleChange"
  :file-list="fileList"
>
  <el-button size="small" type="primary">Click to upload</el-button>
  <template #tip>
    <div class="el-upload__tip">
      jpg/png files with a size less than 500kb
    </div>
  </template>
</el-upload>
<script setup lang="ts">
import { ref } from 'vue'

interface FileItem {
  name: string
  url: string
}

const fileList = ref<FileItem[]>([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food2.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
])

const handleChange = (file: any, fileList: FileItem[]) => {
  fileList.value = fileList.slice(-3)
}
</script>`

const code7 = `<el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  multiple
>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
  <template #tip>
    <div class="el-upload__tip">
      jpg/png files with a size less than 500kb
    </div>
  </template>
</el-upload>`

const code8 = `<el-upload
  class="upload-demo"
  ref="upload"
  action="https://jsonplaceholder.typicode.com/posts/"
  :auto-upload="false"
>
  <template #trigger>
    <el-button size="small" type="primary">select file</el-button>
  </template>
  <el-button
    style="margin-left: 10px;"
    size="small"
    type="success"
    @click="submitUpload"
    >upload to server</el-button
  >
  <template #tip>
    <div class="el-upload__tip">
      jpg/png files with a size less than 500kb
    </div>
  </template>
</el-upload>
<script setup lang="ts">
  const upload = ref()

  function submitUpload() {
    upload.value.submit()
  }
</script>`

export { code1, code2, code3, code4, code5, code6, code7, code8 }
