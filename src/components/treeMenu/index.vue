<template>
  <div>
    <el-input placeholder="输入关键字进行查询" v-model="filterText">
    </el-input>
    <el-tree accordion class="filter-tree" @node-click="nodeClick" :data="data" :props="defaultProps" :filter-node-method="filterNode" ref="tree">
    </el-tree>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'treeMenu',
  props: {
  	data: ''
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    nodeClick(node) {
    	this.$emit('nodeClick', node)
    }
  },

  data() {
    return {
      filterText: '',
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  }
}
</script>
<style rel="stylesheet/less" lang="less" scoped>
.el-tree {
	position: absolute;
	top: 56px;
	left: 10px;
	right: 10px;
	bottom: 10px;
	overflow: auto;
}
</style>
