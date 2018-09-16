<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu v-for='(items, index) in menus' :key="items.menu" :default-active="hasChild" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#082450" text-color="#fff" active-text-color="blue">
        <el-submenu :index="(index + 1 + '')" v-if="items.children.length !== 0">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ items.menu }}</span>
          </template>
          <div v-for="(item, i) in items.children" :key="item.menu">
            <el-menu-item-group v-if="item.children.length === 0">
              <el-menu-item :index="(index + 1 + '-' + (i + 1))">{{ item.menu }}</el-menu-item>
            </el-menu-item-group>
            <el-submenu :index="(index + 1 + '-' + (i + 1))" v-else-if="item.children.length !== 0">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ item.menu }}</span>
              </template>
              <side-bar :menus="item.children"></side-bar>
            </el-submenu>
          </div>
        </el-submenu>
        <el-menu-item :index="(index + 1 + '')" v-else-if="items.children.length === 0">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ items.menu }}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script type="text/javascript">
export default {
  name: 'sideBar',
  props: {
    menus: ''
  },
  created() {
    console.log(this.menus)
  },
  computed: {
    hasChild() {
      if (this.menus[0].children.length === 0) {
        return '1'
      } else {
        return '1-1'
      }
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
      console.log(this.menus)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
      console.log(this.menus)
    }
  }
}

</script>
<style rel="stylesheet/less" lang="less" scoped>
.el-row .el-submenu .el-menu-item {
  min-width: 150px;
}

.el-menu-item-group ul {
  background-color: green;
}

.side-bar-wrapper .el-submenu__title {
  padding-left: 20px!important;
}

</style>
<style rel="stylesheet/less" lang="less">
.el-submenu__title {
  padding-left: 20px!important;
}

</style>
