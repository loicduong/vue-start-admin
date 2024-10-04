const code1 = `<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>

<script setup lang="ts">
import { ref } from 'vue'

interface TreeNode {
  label: string;
  children?: TreeNode[];
}

const data = ref<TreeNode[]>([
  {
    label: 'Level one 1',
    children: [{
      label: 'Level two 1-1',
      children: [{
        label: 'Level three 1-1-1'
      }]
    }]
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [{
          label: 'Level three 2-1-1'
        }]
      },
      {
        label: 'Level two 2-2',
        children: [{
          label: 'Level three 2-2-1'
        }]
      }
    ]
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [{
          label: 'Level three 3-1-1'
        }]
      },
      {
        label: 'Level two 3-2',
        children: [{
          label: 'Level three 3-2-1'
        }]
      }
    ]
  }
])

const defaultProps = {
  children: 'children',
  label: 'label'
}

const handleNodeClick = (data: TreeNode) => {
  console.log(data)
}
</script>`

const code2 = `<el-tree
  :props="props"
  :load="loadNode"
  lazy
  show-checkbox
  @check-change="handleCheckChange">
</el-tree>

<script setup lang="ts">
import { ref } from 'vue'

interface TreeNode {
  name: string;
  zones?: TreeNode[];
}

const props = {
  label: 'name',
  children: 'zones'
}

const count = ref(1)

const handleCheckChange = (data: TreeNode, checked: boolean, indeterminate: boolean) => {
  console.log(data, checked, indeterminate)
}

const handleNodeClick = (data: TreeNode) => {
  console.log(data)
}

const loadNode = (node: any, resolve: (data: TreeNode[]) => void) => {
  if (node.level === 0) {
    return resolve([{ name: 'Root1' }, { name: 'Root2' }])
  }
  if (node.level > 3) return resolve([])

  let hasChild: boolean
  if (node.data.name === 'region1') {
    hasChild = true
  } else if (node.data.name === 'region2') {
    hasChild = false
  } else {
    hasChild = Math.random() > 0.5
  }

  setTimeout(() => {
    let data: TreeNode[]
    if (hasChild) {
      data = [
        {
          name: 'zone' + count.value++
        },
        {
          name: 'zone' + count.value++
        }
      ]
    } else {
      data = []
    }

    resolve(data)
  }, 500)
}
</script>`

const code3 = `<el-tree
  :props="props"
  :load="loadNode"
  lazy
  show-checkbox>
</el-tree>

<script setup lang="ts">
interface TreeNode {
  name: string;
  leaf?: boolean;
  zones?: TreeNode[];
}

interface TreeNodeData {
  level: number;
  data: TreeNode;
}

const props = {
  label: 'name',
  children: 'zones',
  isLeaf: 'leaf'
}

const loadNode = (node: TreeNodeData, resolve: (data: TreeNode[]) => void) => {
  if (node.level === 0) {
    return resolve([{ name: 'region' }]);
  }
  if (node.level > 1) return resolve([]);

  setTimeout(() => {
    const data: TreeNode[] = [{
      name: 'leaf',
      leaf: true
    }, {
      name: 'zone'
    }];

    resolve(data);
  }, 500);
}
</script>`

const code4 = `<el-tree
  :data="data"
  :props="defaultProps"
  show-checkbox>
</el-tree>

<script setup lang="ts">
import { ref } from 'vue'

interface TreeNode {
  id: number;
  label: string;
  disabled?: boolean;
  children?: TreeNode[];
}

const data = ref<TreeNode[]>([
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 3,
        label: 'Level two 2-1',
        children: [
          {
            id: 4,
            label: 'Level three 3-1-1'
          },
          {
            id: 5,
            label: 'Level three 3-1-2',
            disabled: true
          }
        ]
      },
      {
        id: 2,
        label: 'Level two 2-2',
        disabled: true,
        children: [
          {
            id: 6,
            label: 'Level three 3-2-1'
          },
          {
            id: 7,
            label: 'Level three 3-2-2',
            disabled: true
          }
        ]
      }
    ]
  }
])

const defaultProps = {
  children: 'children',
  label: 'label',
  disabled: 'disabled',
}
</script>`

const code5 = `<el-tree
  :data="data"
  show-checkbox
  node-key="id"
  :default-expanded-keys="[2, 3]"
  :default-checked-keys="[5]"
  :props="defaultProps">
</el-tree>

<script setup lang="ts">
import { ref } from 'vue'

interface TreeNode {
  id: number;
  label: string;
  children?: TreeNode[];
}

const data = ref<TreeNode[]>([
  {
    id: 1,
    label: 'Level one 1',
    children: [{
      id: 4,
      label: 'Level two 1-1',
      children: [{
        id: 9,
        label: 'Level three 1-1-1'
      }, {
        id: 10,
        label: 'Level three 1-1-2'
      }]
    }]
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [{
      id: 5,
      label: 'Level two 2-1'
    }, {
      id: 6,
      label: 'Level two 2-2'
    }]
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [{
      id: 7,
      label: 'Level two 3-1'
    }, {
      id: 8,
      label: 'Level two 3-2'
    }]
  }
])

const defaultProps = {
  children: 'children',
  label: 'label'
}
</script>`

const code6 = `<el-tree
  :data="data"
  show-checkbox
  default-expand-all
  node-key="id"
  ref="tree"
  highlight-current
  :props="defaultProps">
</el-tree>

<div class="buttons">
  <el-button @click="getCheckedNodes">get by node</el-button>
  <el-button @click="getCheckedKeys">get by key</el-button>
  <el-button @click="setCheckedNodes">set by node</el-button>
  <el-button @click="setCheckedKeys">set by key</el-button>
  <el-button @click="resetChecked">reset</el-button>
</div>

<script setup lang="ts">
import { ref } from 'vue'

interface TreeNode {
  id: number;
  label: string;
  children?: TreeNode[];
}

const tree = ref(null)

const data = ref<TreeNode[]>([
  {
    id: 1,
    label: 'Level one 1',
    children: [{
      id: 4,
      label: 'Level two 1-1',
      children: [{
        id: 9,
        label: 'Level three 1-1-1'
      }, {
        id: 10,
        label: 'Level three 1-1-2'
      }]
    }]
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [{
      id: 5,
      label: 'Level two 2-1'
    }, {
      id: 6,
      label: 'Level two 2-2'
    }]
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [{
      id: 7,
      label: 'Level two 3-1'
    }, {
      id: 8,
      label: 'Level two 3-2'
    }]
  }
])

const defaultProps = {
  children: 'children',
  label: 'label'
}

const getCheckedNodes = () => {
  console.log(tree.value.getCheckedNodes())
}

const getCheckedKeys = () => {
  console.log(tree.value.getCheckedKeys())
}

const setCheckedNodes = () => {
  tree.value.setCheckedNodes([{
    id: 5,
    label: 'Level two 2-1'
  }, {
    id: 9,
    label: 'Level three 1-1-1'
  }])
}

const setCheckedKeys = () => {
  tree.value.setCheckedKeys([3])
}

const resetChecked = () => {
  tree.value.setCheckedKeys([])
}
</script>`

const code7 = `<div class="custom-tree-container">
  <div class="block">
    <p>Using render-content</p>
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="renderContent">
    </el-tree>
  </div>
  <div class="block">
    <p>Using scoped slot</p>
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false">
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span>
            <a
              @click="append(data)">
              Append
            </a>
            <a
              @click="remove(node, data)">
              Delete
            </a>
          </span>
        </span>
      </template>
    </el-tree>
  </div>
</div>

<script setup lang="ts">
import { ref, h } from 'vue'

interface TreeNode {
  id: number;
  label: string;
  children?: TreeNode[];
}

let id = 1000;

const initialData: TreeNode[] = [
  {
    id: 1,
    label: 'Level one 1',
    children: [{
      id: 4,
      label: 'Level two 1-1',
      children: [{
        id: 9,
        label: 'Level three 1-1-1'
      }, {
        id: 10,
        label: 'Level three 1-1-2'
      }]
    }]
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [{
      id: 5,
      label: 'Level two 2-1'
    }, {
      id: 6,
      label: 'Level two 2-2'
    }]
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [{
      id: 7,
      label: 'Level two 3-1'
    }, {
      id: 8,
      label: 'Level two 3-2'
    }]
  }
];

const data = ref<TreeNode[]>(JSON.parse(JSON.stringify(initialData)));

const append = (nodeData: TreeNode) => {
  const newChild: TreeNode = { id: id++, label: 'testtest', children: [] };
  if (!nodeData.children) {
    nodeData.children = [];
  }
  nodeData.children.push(newChild);
  data.value = [...data.value];
};

const remove = (node: any, nodeData: TreeNode) => {
  const parent = node.parent;
  const children = parent.data.children || parent.data;
  const index = children.findIndex((d: TreeNode) => d.id === nodeData.id);
  children.splice(index, 1);
  data.value = [...data.value];
};

const renderContent = (params: { node: any, data: TreeNode, store: any }) => {
  return h("span", {
    class: "custom-tree-node"
  }, [
    h("span", null, params.node.label),
    h("span", null, [
      h("a", {
        onClick: () => append(params.data)
      }, "Append "),
      h("a", {
        onClick: () => remove(params.node, params.data)
      }, "Delete")
    ])
  ]);
};
</script>

<style>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>`

const code8 = `<el-input
  placeholder="Filter keyword"
  v-model="filterText">
</el-input>

<el-tree
  class="filter-tree"
  :data="data"
  :props="defaultProps"
  default-expand-all
  :filter-node-method="filterNode"
  ref="tree">
</el-tree>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface TreeNode {
  id: number;
  label: string;
  children?: TreeNode[];
}

const tree = ref(null)
const filterText = ref('')

const data = ref<TreeNode[]>([
  {
    id: 1,
    label: 'Level one 1',
    children: [{
      id: 4,
      label: 'Level two 1-1',
      children: [{
        id: 9,
        label: 'Level three 1-1-1'
      }, {
        id: 10,
        label: 'Level three 1-1-2'
      }]
    }]
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [{
      id: 5,
      label: 'Level two 2-1'
    }, {
      id: 6,
      label: 'Level two 2-2'
    }]
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [{
      id: 7,
      label: 'Level two 3-1'
    }, {
      id: 8,
      label: 'Level two 3-2'
    }]
  }
])

const defaultProps = {
  children: 'children',
  label: 'label'
}

const filterNode = (value: string, data: TreeNode) => {
  if (!value) return true
  return data.label.indexOf(value) !== -1
}

watch(filterText, (val) => {
  tree.value?.filter(val)
})
</script>`

const code9 = `<el-tree
  :data="data"
  :props="defaultProps"
  accordion
  @node-click="handleNodeClick">
</el-tree>

<script setup lang="ts">
import { ref } from 'vue'

interface TreeNode {
  label: string;
  children?: TreeNode[];
}

const data = ref<TreeNode[]>([
  {
    label: 'Level one 1',
    children: [{
      label: 'Level two 1-1',
      children: [{
        label: 'Level three 1-1-1'
      }]
    }]
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [{
          label: 'Level three 2-1-1'
        }]
      },
      {
        label: 'Level two 2-2',
        children: [{
          label: 'Level three 2-2-1'
        }]
      }
    ]
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [{
          label: 'Level three 3-1-1'
        }]
      },
      {
        label: 'Level two 3-2',
        children: [{
          label: 'Level three 3-2-1'
        }]
      }
    ]
  }
])

const defaultProps = {
  children: 'children',
  label: 'label'
}

const handleNodeClick = (data: TreeNode) => {
  console.log(data)
}
</script>`

const code10 = `<el-tree
  :data="data"
  node-key="id"
  default-expand-all
  @node-drag-start="handleDragStart"
  @node-drag-enter="handleDragEnter"
  @node-drag-leave="handleDragLeave"
  @node-drag-over="handleDragOver"
  @node-drag-end="handleDragEnd"
  @node-drop="handleDrop"
  draggable
  :allow-drop="allowDrop"
  :allow-drag="allowDrag">
</el-tree>

<script setup lang="ts">
import { ref } from 'vue'

interface TreeNode {
  label: string;
  children?: TreeNode[];
}

const data = ref<TreeNode[]>([
  {
    label: 'Level one 1',
    children: [{
      label: 'Level two 1-1',
      children: [{
        label: 'Level three 1-1-1'
      }]
    }]
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [{
          label: 'Level three 2-1-1'
        }]
      },
      {
        label: 'Level two 2-2',
        children: [{
          label: 'Level three 2-2-1'
        }]
      }
    ]
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [{
          label: 'Level three 3-1-1'
        }]
      },
      {
        label: 'Level two 3-2',
        children: [{
          label: 'Level three 3-2-1'
        }]
      }
    ]
  }
])

const defaultProps = {
  children: 'children',
  label: 'label'
}

const handleDragStart = (node: any, ev: DragEvent) => {
  console.log('drag start', node)
}

const handleDragEnter = (draggingNode: any, dropNode: any, ev: DragEvent) => {
  console.log('tree drag enter: ', dropNode.label)
}

const handleDragLeave = (draggingNode: any, dropNode: any, ev: DragEvent) => {
  console.log('tree drag leave: ', dropNode.label)
}

const handleDragOver = (draggingNode: any, dropNode: any, ev: DragEvent) => {
  console.log('tree drag over: ', dropNode.label)
}

const handleDragEnd = (draggingNode: any, dropNode: any, dropType: string, ev: DragEvent) => {
  console.log('tree drag end: ', dropNode && dropNode.label, dropType)
}

const handleDrop = (draggingNode: any, dropNode: any, dropType: string, ev: DragEvent) => {
  console.log('tree drop: ', dropNode.label, dropType)
}

const allowDrop = (draggingNode: any, dropNode: any, type: string) => {
  if (dropNode.data.label === 'Level two 3-1') {
    return type !== 'inner'
  } else {
    return true
  }
}

const allowDrag = (draggingNode: any) => {
  return draggingNode.data.label.indexOf('Level three 3-1-1') === -1
}
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
